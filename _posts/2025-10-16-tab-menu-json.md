---
layout: post
title: "Tab menu / json"
date: 2023-01-02
categories: [general]
tags: [Javascript/Jquery]
---


### ✨ 예제


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Face Shop</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="./js/script.js" defer></script>
</head>
<body>
    <div id="wrap">
        <header id="header"></header>
        <main id="main">
            <section id="notice">
                <div class="container">
                    <div class="notice-title">
                        <h2><img src="./img/tit_notice.png" alt="notice"></h2>
                    </div>
                    <div class="notice-title-double-line">
                        <p ></p>
                    </div>
                    <nav class="noticeBt-wrap">
                        <ul>
                            <li>
                                <div>
                                    <a href="javascript:" class="noticeBt addNav" title="전체공지">전체공지</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="javascript:" class="noticeBt" title="쇼핑공지">쇼핑공지</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="javascript:" class="noticeBt" title="브랜드소식">브랜드소식</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="notice-board">
                        <table>
                            <colgroup>
                                <col style="width: 8%;">
                                <col style="width: 12%;">
                                <col style="width: 60%;">
                                <col style="width: 20%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>구분</th>
                                    <th>제목</th>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- ajax 바인딩 -->
                            </tbody>
                        </table>
                        <div class="notice-page">
                            <ul>
                                <li>
                                    <div class="pagePrev">
                                        <a href="javascript:" class="pagePrevBt">
                                            <img src="./img/btn_page_prev.png" alt="prev">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="notice-page-number">
                                        
                                    </div>
                                </li>
                                <li>
                                    <div class="nextPrev">
                                        <a href="javascript:" class="pageNextBt">
                                            <img src="./img/btn_page_next.png" alt="next">
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer"></footer>
    </div>
</body>
</html>
```


```javascript
let a = []; //전체공지 배열 (글 번호, 구분, 제목, 날짜)
let b = []; //쇼핑공지
let c = []; //브랜드공지

let imgNum = ''; //구분이미지 변수
let n = -1; //쇼핑공지 필터링 카운트 변수
let m = -1; //브랜드공지 필터링 카운트 변수

let noticeBtNum = 0;  //필터링 변수 전체공지=0; 쇼핑공지=1, 브랜드공지=2
let startRecord = 0; //1페이지 시작 번호
let list = 5; //한 화면에 보여질 목록 개수(40묶음)
let endRecord = startRecord+list; //1페이지의 끝번호

let totRecord = 0; //전체 레코드 개수 전체공지=200, 쇼핑공지=150개, 브랜드공지 = 50
let cnt=0; //글번호 변수
let txt=""; //출력할 배열 내용 변수

let group = 1;
let groupPage = 10;
let frontPage = 0;
let rearPage = frontPage+groupPage;
let currentPage = 0; //현재페이지에서 페이지 표시할 addClass 사용 버튼 변수



$.ajax({
    url: './data/notice.json',
    dataType: 'JSON',
    success: function(data){
        $.each(data.공지사항, function(idx, obj){  //배열을 전달하기 위해 each 함수 사용
            a[idx]=[]; //a의 index 값을 배열로 만듦 0~199
            if(obj.구분 == '쇼핑'){
                imgNum = "<img src='./img/icon_notice1.gif' alt='쇼핑'>";
            }else{
                imgNum = "<img src='./img/icon_notice2.gif' alt='브랜드'>";
            }

            a[idx][0] = idx+1; //번호
            a[idx][1] = imgNum; //구분 이미지
            a[idx][2] = obj.제목;
            a[idx][3] = obj.날짜;

            //쇼핑공지 필터링
            if(obj.구분 == '쇼핑'){
                n++;
                b[n]=[]; //b의 index 값을 배열로 만듦 0~149

                b[n][0] = n+1; //번호
                b[n][1] = imgNum; //구분 이미지
                b[n][2] = obj.제목;
                b[n][3] = obj.날짜;
            }
            //브랜드공지 필터링
            if(obj.구분 == '브랜드'){
                m++;
                c[m]=[];

                c[m][0]=m+1;
                c[m][1]=imgNum;
                c[m][2]=obj.제목;
                c[m][3]=obj.날짜;

            }

        }); //each end
        //필터 버튼 클릭 이벤트
        $('.noticeBt').each(function(index){
            $(this).click(function(){
                startRecord=0;
                endRecord=startRecord+list;
                noticeBtNum = index; // 클릭된 애의 index 번호
                noticeFn();
                $('.noticeBt').removeClass('addNav');
                $(this).addClass('addNav');
            });
        });
        noticeFn();
        function noticeFn(){
            if(noticeBtNum==0){
                totRecord=a.length; //200개
                cnt = a.length; //글번호는 전체공지 배열의 개수 200개
                for(i=0; i<a.length; i++){ //맨 첫번째 col 글번호
                    a[i][0]=cnt; //글번호 변수
                    cnt--; //최신 글부터 보이니까 감소
                }
                for(i=startRecord; i<endRecord; i++){ // i=0 i<5 01234
                    txt += "<tr>"; // txt = "" + "<tr>"
                    for(j=0; j<4; j++){ //0123
                        txt += "<td>"+a[i][j]+"</td>"; //세로로 다섯 칸 가로로 네 칸
                    }
                    txt += "</tr>"; // txt = "" + "<tr>"
                }
            }else if(noticeBtNum==1){ //쇼핑공지
                totRecord=b.length;
                cnt=b.length;
                for(i=0; i<b.length; i++){
                    b[i][0]=cnt;
                    cnt--;
                }
                for(i=startRecord; i<endRecord; i++){
                    txt += "<tr>";
                    for(j=0; j<4; j++){
                        txt +="<td>"+b[i][j]+"</td>"
                    }
                    txt+="</tr>"
                }
            }else if(noticeBtNum==2){
                totRecord=c.length;
                cnt=c.length;
                for(i=0; i<c.length; i++){
                    c[i][0]=cnt;
                    cnt--;
                }
                for(i=startRecord; i<endRecord; i++){
                    txt+= "<tr>";
                    for(j=0; j<4; j++){
                        txt+="<td>"+c[i][j]+"</td>"
                    }
                    txt += "</tr>"
                }
            }
            $('tbody').html(txt);
            txt='';
            cnt=0;

            //페이지 버튼 자동 추가
            //1. 전체 페이지 = 전체 레코드/5 한페이지에 5개씩
            totPage = totRecord/list;
            // console.log(totPage)

            //2. 현재 페이지 ((endRecord/list)groupPage)
            group = Math.ceil((endRecord/list)/groupPage); //1
            // console.log(group)

            //3. 페이지 그룹 범위
            frontPage = (group-1)*10; //0 10 20 30 ...
            // console.log(frontPage)
            rearPage = frontPage+groupPage; //frontPage + 10

            //4. 나머지 단위 10페이지가 안 되는 페이지 수 정리
            if(rearPage>totPage){
                rearPage=totPage
            }

            $('.notice-page-number>span').remove();
            for(i=frontPage; i<rearPage; i++){
                $('.notice-page-number').append(
                    '<span><a href="javascript:" class ="pageBt">'
                    +
                    (i<9?('0'+(i+1)):(i+1)) // 만약 i가 9보다 작으면 01 02 03 ..., 크면 그냥 숫자
                    +
                    '</a></span>'
                )
            }
            currentPage = (endRecord/list)%groupPage;
            $('.pageBt').eq(currentPage-1).addClass('addPage');
        } //noticeFn end
        $(document).on('mouseenter','.pageBt', function(){
            $('.pageBt').each(function(index){
                $(this).on({click:function(){
                    startRecord=(Number($(this).text())-1)*list;
                    //1페이지 시작 번호는 내가 누르는 그 페이지 버튼의 텍스트 -1 에 5를 곱한 값
                    endRecord=startRecord+list; //위의 값 + 5

                    if(endRecord>totRecord){
                        endRecord = totRecord
                    }
                    noticeFn()
                }})
            })
        });

        //다음 페이지 이동
        $('.pageNextBt').on({
            click:function(){
                startRecord += list;  //5씩 누적
                endRecord = startRecord + list;
                if(endRecord>totRecord){
                    startRecord = totRecord - (totRecord%list);
                    endRecord = totRecord;
                    if(startRecord == totRecord){
                        startRecord = totRecord-list;
                        endRecord=totRecord;
                        return false;
                    }
                }
                noticeFn();
            }
        });
        $('.pagePrevBt').on({click:function(){
            startRecord -= list;
            endRecord = startRecord+list;
            if(startRecord<0){
                startRecord=0;
                endRecord = startRecord+list;
            }
            noticeFn()
        }
    })
    },//success end
    error:function(){
        console.log('error')
    }
});
```


### ✔️ 문법


> 💡 `{  
>     “title1”:  
>     [  
>         {”data1” : ”content” , “data2” : “content” , …},  
>         {”data1” : ”content” , “data2” : “content” , …},  
>         …  
>         {”data1” : ”content” , “data2” : “content” , …}  
>     ]  
> }`


👉🏻 [] 안에 {} 안에 요소들 내용 넣어줌 , 로 구분 “” 쓰기


### ✔️ 문법


> 💡 `$.ajax({  
>     url: '',  
>     dataType: '',  
>     success: function(data){  
>   
>     }  
> });`


👉🏻 ajax로 데이터를 받아오겠다 / 데이터 파일 경로 / 타입 / 불러왔을 때 실행 할 함수


[**로컬에서 CORS policy 관련 에러가 발생하는 이유**](https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu)


npm 전역으로 설치 안될 때 앞에 sudo 붙이기


### ✔️ 문법


> 💡 `a[세로 크기][가로 크기];`


👉🏻 2차원 배열


### ✔️ 문법


> 💡 `조건문?(참일 경우 : 거짓일 경우);`


👉🏻 삼항 조건 연산자 / if else 문의 대체재로 빈번히 사용됨


👉🏻 세 개의 피연산자를 받는 유일한 연산자

