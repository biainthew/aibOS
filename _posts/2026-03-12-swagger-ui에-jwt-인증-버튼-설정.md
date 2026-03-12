---
layout: post
title: "Swagger UI에 JWT 인증 버튼 설정"
date: 2026-03-12
categories: [general]
tags: []
excerpt_separator: ""
---



Spring boot 프로젝트에서 API 문서 자동화를 위해 Swagger 를 사용할 때 JWT 인증 버튼을 UI 에 포함시키는 설정


이 설정을 적용하면 Swagger UI 상단에 Authorize 버튼이 생기며 토큰을 한 번만 입력하면 모든 API 테스트 시 헤더에 `Authorization: Bearer {Token}` 이 자동으로 포함됨


{% raw %}
```java
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        String securitySchemeName = "BearerAuth";

        return new OpenAPI()
                .info(new Info()
                        .title("Noticeboard API")
                        .description("게시판 서비스 API")
                        .version("v1.0"))
                .addSecurityItem(new SecurityRequirement()
                        .addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}
```
{% endraw %}


### SecurityScheme 설정


Swagger 가 어떤 방식으로 인증을 처리할 지 정의


Http 타입의 bearer 스키마로 설정했고 포맷은 JWT로 지정


### SecurityRequirement 추가


정의한 인증 방식(BearerAuth) 을 API 전체에 기본으로 적용하도록 설정

