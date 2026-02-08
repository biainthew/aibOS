---
layout: post
title: "Youtube Rss 파싱 에러"
date: 2026-01-26
categories: [general]
tags: [Java]
excerpt_separator: ""
---



{% raw %}
```java
java.io.FileNotFoundException: https://www.youtube.com/feeds/videos.xml?channel_id=
```
{% endraw %}


### 예상 원인

1. 채널 ID 오류
2. 구글의 봇 차단(User-Agent 문제)
3. 일시적인 네트워크 또는 서버 이슈

### 실제 원인


Rome 라이브러리의 `XmlReader(feedUrl)` 을 사용해서 유튜브 영상을 불러오고 있었는데


이 방식은 `XmlReader` 가 내부적으로 URLConnection 을 생성할 때 기본 자바 User-Agent를 사용함


해결하려면 `XmlReader` 에 URL을 직접 넣는 대신 직접 헤더를 설정한 연결 객체를 전달해야 함


### 기존 코드


{% raw %}
```java
@Override
public List<YoutubeDTO> selectYoutubeVideos(String rssUrl, int limit) {
    List<YoutubeDTO> videos = new ArrayList<>();

    try {
        URL feedUrl = new URL(rssUrl);
        SyndFeedInput input = new SyndFeedInput();
        SyndFeed feed = input.build(new XmlReader(feedUrl));

        feed.getEntries().stream()
            .limit(limit)
            .forEach(entry -> {
                String link = entry.getLink();
                String videoId = extractVideoId(link);
                String thumbnail = getAvailableThumbnail(videoId);

                videos.add(YoutubeDTO.builder()
                        .videoId(videoId)
                        .title(entry.getTitle())
                        .link(link)
                        .thumbnail(thumbnail)
                        .build());
            });
    } catch (Exception e) {
        log.error("YouTube RSS 파싱 에러 - URL: {}, Message: {}", rssUrl, e.getMessage(), e);
        throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR, "YouTube RSS 파싱 에러 발생");
    }

    return videos;
}
```
{% endraw %}


### 수정된 코드


{% raw %}
```java
@Override
public List<YoutubeDTO> selectYoutubeVideos(String rssUrl, int limit) {
    List<YoutubeDTO> videos = new ArrayList<>();

    try {
        URL feedUrl = new URL(rssUrl);
        
        // 1. 직접 연결 객체 생성
        HttpURLConnection connection = (HttpURLConnection) feedUrl.openConnection();
        
        // 2. User-Agent 헤더 설정
        connection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

        // 3. 연결된 스트림을 통해 XmlReader 생성
        SyndFeedInput input = new SyndFeedInput();
        SyndFeed feed = input.build(new XmlReader(connection));

        feed.getEntries().stream()
            .limit(limit)
            .forEach(entry -> {
                String link = entry.getLink();
                String videoId = extractVideoId(link);
                String thumbnail = getAvailableThumbnail(videoId);

                videos.add(YoutubeDTO.builder()
                        .videoId(videoId)
                        .title(entry.getTitle())
                        .link(link)
                        .thumbnail(thumbnail)
                        .build());
            });
            
    } catch (FileNotFoundException e) {
        log.error("유튜브 채널을 찾을 수 없거나 접근이 차단되었습니다. URL: {}", rssUrl);
        throw new BusinessException(ErrorCode.NOT_FOUND, "유튜브 채널을 찾을 수 없습니다.");
    } catch (Exception e) {
        log.error("YouTube RSS 파싱 에러 - URL: {}, Message: {}", rssUrl, e.getMessage(), e);
        throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR, "YouTube RSS 파싱 에러 발생");
    }

    return videos;
}
```
{% endraw %}


### 이렇게 수정한 이유


XmlReader(URL) : 내부적으로 아무런 설정 없이 접속을 시도하기 때문에 유튜브 입장에서는 Java-specific-client 가 접근하는 것으로 보여 보안 정책상 차단할 가능성이 높음


XmlReader(URLConnection) : 직접 User-Agent 를 설정해서 보내면 유튜브 서버는 이를 일반 사용자의 브라우저 요청으로 인식하여 정상적으로 XML 데이터를 내려줌


### 이전 코드가 에러가 났다 안 났다 한 이유

1. 요청 속도 제한 (Rate Limiting)
    1. 특정 IP 에서 짧은 시간 동안 User Agent 없이 여러 번 요청이 들어왔을 경우
2. 구글의 서버 부하 분산 (Load Balancing)
    1. 유튜브 같은 거대 서비스는 수천 대의 서버가 요청을 나눠서 처리하기 때문에 보안 정책이 조금 느슨하게 설정된 서버로 연결되면 User-Agent 가 없어도 XML 을 보내줌
3. FileNotFoundException
    1. 자바의 HttpURLConnection 은 서버가 404 뿐만 아니라 403 에러를 보낼 때도 내부적으로 FileNotFoundException 을 던지는 경우가 많음

### 위와 같이 수정 후에도 간헐적으로 에러 발생 - 해결책

- 캐싱 하기
    - 매번 사용자 요청이 올 때마다 유튜브 RSS를 긁어오는 것이 아니라 DB나 Redis 에 결과를 저장하기
    - 30분 ~ 1시간에 한 번만 스케줄러가 RSS를 읽어와서 저장해두고 사용자는 DB에 있는 데이터를 보게 하기

### 최종 수정 코드


{% raw %}
```java
private final Integer youtubeCacheExpirationMinutes = 60; // 유튜브 캐시만료 시간(분)

private final Cache<String, List<YoutubeDTO>> youtubeCache = Caffeine.newBuilder()
        .expireAfterWrite(youtubeCacheExpirationMinutes, TimeUnit.MINUTES)
        .build();
        
@Override
    public List<YoutubeDTO> selectYoutubeVideos(String rssUrl, int limit) {
        // Check if the data is already in the cache
        List<YoutubeDTO> cachedVideos = youtubeCache.getIfPresent(rssUrl);

        if (cachedVideos != null) {
            log.info("Serving YouTube RSS feed from cache for URL: {}", rssUrl); // Log for cache hit
            return cachedVideos.stream()
                .limit(limit)
                .toList();
        }

        try {
            List<YoutubeDTO> allVideos = youtubeCache.get(rssUrl, k -> fetchAndParseYoutubeRss(k));

            if (allVideos == null || allVideos.isEmpty()) {
                return Collections.emptyList();
            }

            return allVideos.stream()
                .limit(limit)
                .toList();

        } catch (Exception e) {
            log.error("Failed to get YouTube videos for URL: {}. Reason: {}", rssUrl, e.getMessage());
            if (e.getCause() instanceof BusinessException) {
                throw (BusinessException) e.getCause();
            }
            return Collections.emptyList();
        }
    }

    private List<YoutubeDTO> fetchAndParseYoutubeRss(String rssUrl) {
        log.info("Fetching YouTube RSS feed from URL: {}", rssUrl);
        List<YoutubeDTO> videos = new ArrayList<>();
        try {
            URL feedUrl = new URL(rssUrl);
            HttpURLConnection connection = (HttpURLConnection) feedUrl.openConnection();
            connection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

            SyndFeedInput input = new SyndFeedInput();
            SyndFeed feed = input.build(new XmlReader(connection));

            feed.getEntries().forEach(entry -> {
                String link = entry.getLink();
                String videoId = extractVideoId(link);
                String thumbnail = getAvailableThumbnail(videoId);
                videos.add(YoutubeDTO.builder()
                        .videoId(videoId)
                        .title(entry.getTitle())
                        .link(link)
                        .thumbnail(thumbnail)
                        .build());
            });

            return videos;
        } catch (FileNotFoundException e) {
            log.error("유튜브 채널을 찾을 수 없거나 접근이 차단되었습니다. URL: {}", rssUrl);
            throw new BusinessException(ErrorCode.EXTERNAL_SERVICE_ERROR, "유튜브 채널을 찾을 수 없습니다.");
        } catch (Exception e) {
            log.error("YouTube RSS 파싱 에러 - URL: {}, Message: {}", rssUrl, e.getMessage(), e);
            throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR, "YouTube RSS 파싱 에러 발생");
        }
    }
```
{% endraw %}


**작동 원리**

1. 데이터를 가져오기 전 캐싱된 값이 있는지 확인
2. 캐시에 데이터가 없으면 fetchAndParseYoutubeRss 호출
3. 이후 60분간의 요청에는 메모리에 저장된 List<YoutubeDTO> 를 즉시 반환
