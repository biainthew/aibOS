---
layout: post
title: "[Git]private repo clone vscode"
date: 2023-06-01
categories: [general]
tags: [Work]
---


> 💡 private repository 는 ssh 기반 인증방식을 사용해야 한다고 함  
> 내가 어제 만든 개인 key 는 무쓸모였던 것 ,,


### 1. private repository 에 invite 를 받고 받은 계정으로 vscode 에서 로그인


### 2. ssh key 생성하기 (git bash 내장 명령어여서 깔려 있어야 함)

1. 터미널에 아래 명령어 입력

    입력하면 id_rsa(개인키) 와 id_rsa.pub(공개키) 이렇게 두가지를 생성해준다


```javascript
ssh-keygen
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/50eac7be-fa13-4e93-a9f6-351dd5a5219d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJMHUN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyGfkF2UeuFCjQU23cIKOxVccEHGO4AEOZB%2BGT4Oo%2BGAiAGjk%2Bxb0iEmDXurVsqnXaCYy3FkBrsVfte1L1CEM%2BQtiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NzVOv9S52L7yEibKtwD9yS3ThDqSVOTedw3sc1ySiDe4pJpgn0wGpitSUoBKbas4oYjDgtA6r2xlXOdHCeBzQAgvSDKHkZVROe%2FXeTAnISn3V%2F9fgJgXotSOk0GWZwxAyQRC0SiMvkir7Wz51e5JbSkN3AqL6GYLrRmDtggUddKrr591SGdNRkPpk6iLXUHVF8u0m6Q0TLsjFey%2BrMvgAUrFHp%2BdeTubT1%2BnjI9qvhtCZXcd6SSiNPV2oJNC7lHNRt9oNE5squ73mxZK%2Fj1PXdGb3xISwGIwa2GRf6uYAjVqMc7iG8z8%2FzL1zjMAlp8B6K8DfRbTeDmqeKNDvwkS1aiwpz4nevrMtDEezLzHUM6wA1I31Oyy1n7v64PX8HGmEaAbi1icolo%2B96NnNnLkFuETqpLF9mMgEKQzZRFPmE7rMLAkU2Zyk9o0OD17liBRDHDF8ctIj9Q6gszc7OFwlMYJUUZUvX18Rmky%2F7B4p9ffwN2eGWTn8qVvHPaz%2F6%2FxtyOTsE9xg%2BmXng7HmP4obC6LRFoewd0l%2BFL6MSSNhzVDjQG52IjW6jKo2vDJT5iY1cMubWa9oGzJuvkhQ%2FaPJW0M91kg4BR%2BiiE5zC9WsAMpu7SyHjJicueJ9%2F0ur6JzZRGqZwhRxb7qOMw1fPRygY6pgHIpzXEhXOT570dGaV4%2BWynzx1BLQHCEE%2F2a26OLgQ5DE3EqPCFSKhpHYh0DwayqoT4BsE1FN%2BXtkipOgm97NMZ%2F5%2BYVcBU%2F2V0tuIRM%2F1yp6tLtY76mEg770ou4IQ%2FAmXeOqWEH5ge8zCPAH2x7TZ2xQ91L%2BS6iDUKxhdKoEv1Ypb3BEFLToEVmUHTs7aEBp8FRUVO3M1Yr929aSO3TKURqxHzpUw0&X-Amz-Signature=ca500818ee53173c4b6b19685179e9c8dd154c07f36183a688a0e291290d46a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. 위의 경로에 있는 파일을 vscode 로 연다
2. 파일안에서 Ctrl A 하고 깃으로 넘어온다

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/8fb23454-a276-43ba-95c8-70441a9ab495/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJMHUN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyGfkF2UeuFCjQU23cIKOxVccEHGO4AEOZB%2BGT4Oo%2BGAiAGjk%2Bxb0iEmDXurVsqnXaCYy3FkBrsVfte1L1CEM%2BQtiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NzVOv9S52L7yEibKtwD9yS3ThDqSVOTedw3sc1ySiDe4pJpgn0wGpitSUoBKbas4oYjDgtA6r2xlXOdHCeBzQAgvSDKHkZVROe%2FXeTAnISn3V%2F9fgJgXotSOk0GWZwxAyQRC0SiMvkir7Wz51e5JbSkN3AqL6GYLrRmDtggUddKrr591SGdNRkPpk6iLXUHVF8u0m6Q0TLsjFey%2BrMvgAUrFHp%2BdeTubT1%2BnjI9qvhtCZXcd6SSiNPV2oJNC7lHNRt9oNE5squ73mxZK%2Fj1PXdGb3xISwGIwa2GRf6uYAjVqMc7iG8z8%2FzL1zjMAlp8B6K8DfRbTeDmqeKNDvwkS1aiwpz4nevrMtDEezLzHUM6wA1I31Oyy1n7v64PX8HGmEaAbi1icolo%2B96NnNnLkFuETqpLF9mMgEKQzZRFPmE7rMLAkU2Zyk9o0OD17liBRDHDF8ctIj9Q6gszc7OFwlMYJUUZUvX18Rmky%2F7B4p9ffwN2eGWTn8qVvHPaz%2F6%2FxtyOTsE9xg%2BmXng7HmP4obC6LRFoewd0l%2BFL6MSSNhzVDjQG52IjW6jKo2vDJT5iY1cMubWa9oGzJuvkhQ%2FaPJW0M91kg4BR%2BiiE5zC9WsAMpu7SyHjJicueJ9%2F0ur6JzZRGqZwhRxb7qOMw1fPRygY6pgHIpzXEhXOT570dGaV4%2BWynzx1BLQHCEE%2F2a26OLgQ5DE3EqPCFSKhpHYh0DwayqoT4BsE1FN%2BXtkipOgm97NMZ%2F5%2BYVcBU%2F2V0tuIRM%2F1yp6tLtY76mEg770ou4IQ%2FAmXeOqWEH5ge8zCPAH2x7TZ2xQ91L%2BS6iDUKxhdKoEv1Ypb3BEFLToEVmUHTs7aEBp8FRUVO3M1Yr929aSO3TKURqxHzpUw0&X-Amz-Signature=3d1ee67f012b5bcd98eaf66957a87cf09068a1c2a3f48f3ae97f5308592c12d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. New SSH key 누르고 title 에는 이름 영어로 key 에 Ctrl V 한 뒤 Add SSH key

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/43ef9127-3f5c-4e9d-8569-40d8d619b852/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJMHUN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyGfkF2UeuFCjQU23cIKOxVccEHGO4AEOZB%2BGT4Oo%2BGAiAGjk%2Bxb0iEmDXurVsqnXaCYy3FkBrsVfte1L1CEM%2BQtiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NzVOv9S52L7yEibKtwD9yS3ThDqSVOTedw3sc1ySiDe4pJpgn0wGpitSUoBKbas4oYjDgtA6r2xlXOdHCeBzQAgvSDKHkZVROe%2FXeTAnISn3V%2F9fgJgXotSOk0GWZwxAyQRC0SiMvkir7Wz51e5JbSkN3AqL6GYLrRmDtggUddKrr591SGdNRkPpk6iLXUHVF8u0m6Q0TLsjFey%2BrMvgAUrFHp%2BdeTubT1%2BnjI9qvhtCZXcd6SSiNPV2oJNC7lHNRt9oNE5squ73mxZK%2Fj1PXdGb3xISwGIwa2GRf6uYAjVqMc7iG8z8%2FzL1zjMAlp8B6K8DfRbTeDmqeKNDvwkS1aiwpz4nevrMtDEezLzHUM6wA1I31Oyy1n7v64PX8HGmEaAbi1icolo%2B96NnNnLkFuETqpLF9mMgEKQzZRFPmE7rMLAkU2Zyk9o0OD17liBRDHDF8ctIj9Q6gszc7OFwlMYJUUZUvX18Rmky%2F7B4p9ffwN2eGWTn8qVvHPaz%2F6%2FxtyOTsE9xg%2BmXng7HmP4obC6LRFoewd0l%2BFL6MSSNhzVDjQG52IjW6jKo2vDJT5iY1cMubWa9oGzJuvkhQ%2FaPJW0M91kg4BR%2BiiE5zC9WsAMpu7SyHjJicueJ9%2F0ur6JzZRGqZwhRxb7qOMw1fPRygY6pgHIpzXEhXOT570dGaV4%2BWynzx1BLQHCEE%2F2a26OLgQ5DE3EqPCFSKhpHYh0DwayqoT4BsE1FN%2BXtkipOgm97NMZ%2F5%2BYVcBU%2F2V0tuIRM%2F1yp6tLtY76mEg770ou4IQ%2FAmXeOqWEH5ge8zCPAH2x7TZ2xQ91L%2BS6iDUKxhdKoEv1Ypb3BEFLToEVmUHTs7aEBp8FRUVO3M1Yr929aSO3TKURqxHzpUw0&X-Amz-Signature=6edd50e978961d5f76fbd9d610280d23c64d090052300ed910cd85094b8790f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 3. clone 하려는 repo로 와서 SSH 방식 클릭 복사


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/55577684-5593-4c9f-b1b4-ecc517d183db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AJMHUN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T013555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyGfkF2UeuFCjQU23cIKOxVccEHGO4AEOZB%2BGT4Oo%2BGAiAGjk%2Bxb0iEmDXurVsqnXaCYy3FkBrsVfte1L1CEM%2BQtiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NzVOv9S52L7yEibKtwD9yS3ThDqSVOTedw3sc1ySiDe4pJpgn0wGpitSUoBKbas4oYjDgtA6r2xlXOdHCeBzQAgvSDKHkZVROe%2FXeTAnISn3V%2F9fgJgXotSOk0GWZwxAyQRC0SiMvkir7Wz51e5JbSkN3AqL6GYLrRmDtggUddKrr591SGdNRkPpk6iLXUHVF8u0m6Q0TLsjFey%2BrMvgAUrFHp%2BdeTubT1%2BnjI9qvhtCZXcd6SSiNPV2oJNC7lHNRt9oNE5squ73mxZK%2Fj1PXdGb3xISwGIwa2GRf6uYAjVqMc7iG8z8%2FzL1zjMAlp8B6K8DfRbTeDmqeKNDvwkS1aiwpz4nevrMtDEezLzHUM6wA1I31Oyy1n7v64PX8HGmEaAbi1icolo%2B96NnNnLkFuETqpLF9mMgEKQzZRFPmE7rMLAkU2Zyk9o0OD17liBRDHDF8ctIj9Q6gszc7OFwlMYJUUZUvX18Rmky%2F7B4p9ffwN2eGWTn8qVvHPaz%2F6%2FxtyOTsE9xg%2BmXng7HmP4obC6LRFoewd0l%2BFL6MSSNhzVDjQG52IjW6jKo2vDJT5iY1cMubWa9oGzJuvkhQ%2FaPJW0M91kg4BR%2BiiE5zC9WsAMpu7SyHjJicueJ9%2F0ur6JzZRGqZwhRxb7qOMw1fPRygY6pgHIpzXEhXOT570dGaV4%2BWynzx1BLQHCEE%2F2a26OLgQ5DE3EqPCFSKhpHYh0DwayqoT4BsE1FN%2BXtkipOgm97NMZ%2F5%2BYVcBU%2F2V0tuIRM%2F1yp6tLtY76mEg770ou4IQ%2FAmXeOqWEH5ge8zCPAH2x7TZ2xQ91L%2BS6iDUKxhdKoEv1Ypb3BEFLToEVmUHTs7aEBp8FRUVO3M1Yr929aSO3TKURqxHzpUw0&X-Amz-Signature=b159a3f183f160b0f4f5e600f9bac74cff352fd732f8db3a6ef8523a5ee5242e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 4. vscode 로 와서 clone 해주면 잘 됨


### 5. 근데 이제 다른 branch 를 clone 받고 싶을 때는


```javascript
git clone --branch '브랜치 이름' 'SSH 복사한 주소'
```

