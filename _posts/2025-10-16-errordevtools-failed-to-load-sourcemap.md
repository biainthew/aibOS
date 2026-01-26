---
layout: post
title: "[Error]DevTools failed to load SourceMap"
date: 2023-01-12
categories: [general]
tags: [Work]
excerpt_separator: ""
---



* [참고 문서](https://sayit.tistory.com/entry/DevTools-failed-to-load-SourceMap-404-%EC%86%8C%EC%8A%A4-%EC%9D%BD%EA%B8%B0-%EC%8B%A4%ED%8C%A8-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


🦁 git 에 올리기 전에 cdn 방식으로 사용했던 라이브러리들을 다운받는 도중에 뜬 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/943456cd-9976-4cd1-838e-b958d8285825/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIQZQ3B%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJFMEMCIAm9u5lhOJrCYoBCEO0JKMaHqpJUKYqTd%2Bri4ma3c3OEAh92acE9sRsQy3IkreR%2BkB8mv2%2FpPme6GYVP26InZgEeKv8DCDwQABoMNjM3NDIzMTgzODA1IgzUPkvm30Y9wJkMx7wq3ANhao6cgWWlMTHPNAGfbGAjjYl9gWs9hizwiseemToC5CHya%2BwAymuOzCkWgaT86vMqVXEPmkOuO8%2FgllUJ9ym1SxDVAcGu8xXVIQp0aSNEIi2PrlMpQfbqzM78QPVzaURKezDLMV7dGs1SwQuWo52vx0W8iiLX63GTHMVviCKUuefVM2F5tZzmjsuHcjmw2cfm%2BNDZK33cpkDtV1Yg1iY6nHEBMkvEp01MOMkjBrAHkH3Ni5gpQxsumYrbb86HxMIeAhuvPh6uuuWKXVIUt97dWbq4LP4glN6y60G%2Bd8ScTjGpav3WW56zu0tF9JRpHajhgvDbU%2Ba7Yb5O4hQMmFaPAlxsY3%2BHOzeAsL%2FiKU7cvnqnPCA8icP1m8IpDDL3j7QKXkiz5AFkgY335FiRr0rYfwffBAX8jN8syPSFFD39li%2B5RjdU59is1jMx%2Fwb1cIR5%2BIyxEtMHxSRyL9VM%2Bkj92bKRpS7RRQYtCbKrTBKZXK%2Bz7W%2FbcYqyKRU7UgnF2fgHV2Tw2zXcEhBce2GxVU%2FtUeYUVhmtvz4HdvFzutx7Cnx31Hjs%2FVlULqGPQX7K3ByOwRYjSASBwM%2B8kC32mwRedyopMZvSbVy8VEEYsqxrV8qDDiaAxg4Om1TVBzDxmt3LBjqnAelQql9aHkH8h0TnL7JE5fKCPpwclF7G4XY2huAC1gJDJj1mRax8ve%2FUM%2BA8UmrEsQgm%2FkyVHHu8lNzbaFQhxRym0aV1gay6%2BWEPGg6FVN02IFUd86hBmrhSxAQklCPAEKkEI5QWy0t57Gjrp1tb314G6t0EArxV66kGTeygY3W0TPajeYNL9smypU%2Bv%2FyqJ0AEeb0pwV0qvNbTr%2ByScBWUppqn4%2B5nq&X-Amz-Signature=db1852e2025a5651eba21cdb61fd00cb4a946de4a46c541801aaf8c2127d3220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


👇🏻 해결 방법


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/e7b8f931-653d-404d-b39d-b5f38fcdb2ba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIQZQ3B%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T112325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJFMEMCIAm9u5lhOJrCYoBCEO0JKMaHqpJUKYqTd%2Bri4ma3c3OEAh92acE9sRsQy3IkreR%2BkB8mv2%2FpPme6GYVP26InZgEeKv8DCDwQABoMNjM3NDIzMTgzODA1IgzUPkvm30Y9wJkMx7wq3ANhao6cgWWlMTHPNAGfbGAjjYl9gWs9hizwiseemToC5CHya%2BwAymuOzCkWgaT86vMqVXEPmkOuO8%2FgllUJ9ym1SxDVAcGu8xXVIQp0aSNEIi2PrlMpQfbqzM78QPVzaURKezDLMV7dGs1SwQuWo52vx0W8iiLX63GTHMVviCKUuefVM2F5tZzmjsuHcjmw2cfm%2BNDZK33cpkDtV1Yg1iY6nHEBMkvEp01MOMkjBrAHkH3Ni5gpQxsumYrbb86HxMIeAhuvPh6uuuWKXVIUt97dWbq4LP4glN6y60G%2Bd8ScTjGpav3WW56zu0tF9JRpHajhgvDbU%2Ba7Yb5O4hQMmFaPAlxsY3%2BHOzeAsL%2FiKU7cvnqnPCA8icP1m8IpDDL3j7QKXkiz5AFkgY335FiRr0rYfwffBAX8jN8syPSFFD39li%2B5RjdU59is1jMx%2Fwb1cIR5%2BIyxEtMHxSRyL9VM%2Bkj92bKRpS7RRQYtCbKrTBKZXK%2Bz7W%2FbcYqyKRU7UgnF2fgHV2Tw2zXcEhBce2GxVU%2FtUeYUVhmtvz4HdvFzutx7Cnx31Hjs%2FVlULqGPQX7K3ByOwRYjSASBwM%2B8kC32mwRedyopMZvSbVy8VEEYsqxrV8qDDiaAxg4Om1TVBzDxmt3LBjqnAelQql9aHkH8h0TnL7JE5fKCPpwclF7G4XY2huAC1gJDJj1mRax8ve%2FUM%2BA8UmrEsQgm%2FkyVHHu8lNzbaFQhxRym0aV1gay6%2BWEPGg6FVN02IFUd86hBmrhSxAQklCPAEKkEI5QWy0t57Gjrp1tb314G6t0EArxV66kGTeygY3W0TPajeYNL9smypU%2Bv%2FyqJ0AEeb0pwV0qvNbTr%2ByScBWUppqn4%2B5nq&X-Amz-Signature=a995efe29e379b2c91d6df15b93b6378fdce3df955850bbd81c970c2c5a99eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


해당 소스파일( js, css) 파일의 제일 마지막 'sourceMappingURL' 속성의 참조 문구가 문제라고 한다


개발 히스토리를 기억하기 위한 문구라고 하는데 그 문구를 삭제하면 에러가 사라진다


