---
layout: post
title: "프레임워크 비교 1. NestJS + Kysely"
date: 2026-04-03
categories: [general]
tags: [Node.js]
excerpt_separator: ""
---



## **1. NestJS 기본 개념**


### **NestJS 보일러플레이트(주요 구성요소)**


NestJS의 요청 처리 흐름은 보통 `Guard → Interceptor(Pre) → Pipe → Controller → Service → Interceptor(Post)` 순으로 진행됩니다.


| **No** | **구성요소**         | **역할**                                  |
| ------ | ---------------- | --------------------------------------- |
| 1      | Guard            | 권한이 있는지 확인하여 접근을 허용/차단 (인증/인가)          |
| 2      | Interceptor      | 요청과 응답을 가로채서 추가 로직을 실행 (로그, 응답 가공)      |
| 3      | Pipe             | 들어오는 데이터의 형식을 검사하거나 변환                  |
| 4      | Controller       | 외부 요청을 받고 응답을 보내는 라우팅 역할                |
| 5      | Service          | 비즈니스 로직                                 |
| 6      | Middleware       | Guard보다 더 앞단에서 실행되며 로그 기록이나 쿠키 파싱 등에 쓰임 |
| 7      | DTO              | 데이터 규격 정의                               |
| 8      | Entity           | 데이터베이스의 테이블 구조를 코드로 정의                  |
| 9      | Decorator        | @ 기호를 사용하여 클래스나 메서드에 추가적인 기능을 부여        |
| 10     | Exception Filter | 서버에서 에러 발생 시 사용자에게 보여줄 에러 메세지 관리        |


> 💡 **Annotation 과 Decorator 의 차이**  
> 자바의 Annotation 은 컴파일된 파일에도 타입 정보가 남아서 런타임에 스프링 같은 컨테이너가 그 정보를 읽어 로직을 처리합니다.  
>   
> 반면 타입스크립트의 Decorator 는 클래스 정의 시점에 실제로 호출되어 클래스 정보를 가공하는 함수 입니다.  
>   
> ex) 타입스크립트는 자바스크립트로 변환되는 순간 모든 타입 정보가 삭제되는 특성이 있습니다. 하지만 NestJS의 `emitDecoratorMetadata` 옵션을 사용하면 `@Injectable()` 등이 붙은 클래스의 타입 정보를 컴파일 단계에서 미리 기록해두며 Nest 컨테이너는 이 기록을 바탕으로 런타임에 정확한 의존성 주입을 수행합니다.


### **보일러플레이트 생성 명령어**


NestJS는 이 모든 파일을 일일이 손으로 만들기 힘들기 때문에 CLI를 지원합니다.

- `nest g mo [이름]` : 모듈 생성
- `nest g co [이름]` : 컨트롤러 생성
- `nest g s [이름]` : 서비스 생성
- `nest g res [이름]` : CRUD에 필요한 모든 보일러플레이트(Module, Controller, Service, DTO, Entity)를 한 번에 생성해 줍니다.

## **2. Kysely 기본 개념**


### **작동 원리**

1. `database/types.ts`에 테이블 구조와 컬럼 타입을 선언합니다.
2. `repository.ts`에서 Kysely 인스턴스를 통해 `db.selectFrom('RPT_TASK')...`와 같이 체이닝 방식으로 쿼리를 조립합니다. 이때 IDE 내에서 테이블명과 컬럼명이 자동 완성됩니다.
3. TypeScript 컴파일러가 선언된 Interface와 사용된 쿼리 문법이 일치하는지 실시간으로 검증합니다. 존재하지 않는 컬럼을 참조하거나 잘못된 타입의 값을 비교하면 빌드 전 에러를 발생시킵니다.
4. 체이닝된 빌더 코드는 최종적으로 표준 SQL 구문으로 변환되며 내부 `pg` 드라이버를 통해 데이터베이스로 전달됩니다.

### **주요 구성요소**


| **구성요소**                     | **설명**                                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Database Interface           | 전체 데이터베이스 스키마를 표현하는 최상위 타입 정의입니다. 테이블명과 매핑된 각 인터페이스를 통해 쿼리 결과의 타입을 자동으로 추론합니다.          |
| Expression Builder           | `where` 절이나 `select` 절 내부에서 복잡한 조건(AND/OR 혼합 등)이나 서브쿼리를 작성할 때 사용되는 도구입니다.               |
| Raw SQL Snippets (`sql` tag) | 표준 빌더로 표현하기 어려운 DB 전용 함수나 복잡한 Native SQL이 필요할 때 타입 안전성을 유지하면서도 자유롭게 SQL을 작성할 수 있게 해줍니다. |
| CamelCase Plugin             | DB의 `snake_case`와 애플리케이션의 `camelCase` 사이의 명명 규칙 변환을 자동화하여 코드의 일관성을 유지합니다.               |


## **3. 실제 구현 내용**


### **프로젝트 구조**


{% raw %}
```plaintext
src/
├── main.ts                              # 엔트리포인트 (NestFactory.create)
├── app.module.ts                        # 루트 모듈
├── config/
│   └── env.ts                           # dotenv 로드, 환경변수 타입 정의
├── database/
│   ├── database.module.ts               # Kysely 인스턴스 제공 모듈
│   ├── database.provider.ts             # Kysely 인스턴스 생성 (HCCC 풀)
│   └── types.ts                         # Kysely DB 인터페이스 (테이블 타입 정의)
├── modules/
│   ├── report/
│   │   ├── report.module.ts             # ReportModule
│   │   ├── report.controller.ts         # GET /report/task 라우트
│   │   ├── report.service.ts            # 비즈니스 로직
│   │   └── report.repository.ts         # Kysely 쿼리
│   └── unsubscribe/
│       ├── unsubscribe.module.ts
│       ├── unsubscribe.controller.ts
│       ├── unsubscribe.service.ts
│       └── unsubscribe.repository.ts
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts     # 공통 에러 핸들링 (ExceptionFilter)
│   ├── interceptors/
│   │   └── logging.interceptor.ts       # 요청/응답 로깅 (AOP)
│   ├── pipes/
│   │   └── validation.pipe.ts           # 파라미터 검증
│   └── types/
│       └── common.ts                    # 공통 타입 (PageParams, ApiResponse 등)
└── shared/
    └── utils/
        └── pagination.ts                # 페이징 유틸
```
{% endraw %}


### **기존 코드 문제 해결**


**Winston 기반 수동 로깅 핸들링**

- 프레임워크 레벨의 공통 로깅 인터셉터 적용

{% raw %}
```javascript
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
// NestInterceptor 인터페이스를 구현해서 NestJS 가 이 클래스를 인터셉터로 인식하게 함
export class LoggingInterceptor implements NestInterceptor {
    // HTTP 라는 이름의 로거 생성
    private readonly logger = new Logger('HTTP');

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // 1. HTTP 요청 객체 가져오기
        const req = context.switchToHttp().getRequest();
        // 2. GET POST 등의 메서드와 URL 추출
        const {method, url} = req;
        // 3. 요청 시작 시간 기록
        const start = Date.now();

        // 4. 응답 처리 및 로깅
        return next.handle().pipe(
            // 성공 시에만 실행 에러 발생 시 http-exception.filter 에서 처리
            tap(() => {
                const res = context.switchToHttp().getResponse();
                const elapsed = Date.now() - start; // 소요시간
                this.logger.log(`${method} ${url} ${res.statusCode} ${elapsed}ms`);
            }),
        );
    }
}
```
{% endraw %}


`try-catch` **블록이 서비스 곳곳에 중복 작성되어 있으며 에러 발생 시 응답 포맷이 일관되지 않음**

- Global Exception Filter 도입하여 모든 예외 상황에 대한 응답 규격 표준화

{% raw %}
```javascript
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import {Response} from 'express';

@Catch() // 모든 종류의 에러를 잡겠다는 뜻(HTTP 에러 + RuntimeException 등)
export class GlobalExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(GlobalExceptionFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = '알 수 없는 오류가 발생했습니다';
        let code = 'UNKNOWN_ERROR';

        // 1. HTTP 에러 발생 시
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            message = typeof exceptionResponse === 'string'
                ? exceptionResponse
                : (exceptionResponse as any).message || exception.message;
            code = (exceptionResponse as any).code || 'HTTP_ERROR';
        // 2. 일반 에러 발생 시
        } else if (exception instanceof Error) {
            message = exception.message;
        }

        if (status >= 500) {
            this.logger.error(`[${code}] ${message}`, (exception as Error)?.stack);
        } else {
            this.logger.warn(`[${code}] ${message}`);
        }

        // 에러 로그를 DB에 저장할 경우 여기에 insert 추가

        // 클라이언트에게 보여줄 응답 규격
        response.status(status).json({
            success: false,
            msg: message,
            code,
        });
    }
}
```
{% endraw %}


**Oracle의 :bindVar 방식 사용으로 객체 키 누락 혹은 undefined 시 바인딩 실패로 쿼리 에러 발생**

- BadRequestException으로 사전 검증하여 필수값 누락 시 DB 쿼리 전에 400 에러 반환
- 필수값 확인 로직은 Pipe 에서 공통으로 처리
- undefined 필드는 쿼리에 포함되지 않고 null 은 명시적으로 SQL NULL로 처리

{% raw %}
```javascript
import {PipeTransform, Injectable, BadRequestException} from '@nestjs/common';

@Injectable()
export class RequiredFieldsPipe implements PipeTransform {
    constructor(private readonly requiredFields: string[]) {}

    transform(value: any) {
        const missing = this.requiredFields.filter(
            (field) => value[field] === undefined || value[field] === null || value[field] === '',
        );
        if (missing.length > 0) {
            throw new BadRequestException(`필수 파라미터 누락: ${missing.join(', ')}`);
        }
        return value;
    }
}
```
{% endraw %}


{% raw %}
```javascript
import {Controller, Post, Body} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {UnsubscribeService, UnsubscribeParams} from './unsubscribe.service';
import {RequiredFieldsPipe} from '../../common/pipes/validation.pipe';

@ApiTags('Unsubscribe')
@Controller('unsubscribe')
export class UnsubscribeController {
    constructor(private readonly unsubscribeService: UnsubscribeService) {}

    @Post()
    @ApiOperation({summary: '수신거부 등록'})
    async insertUnsubscribe(
        // 여기에 적용
        @Body(new RequiredFieldsPipe(['rptRandno', 'unsubscribeTc', 'reason']))
        body: UnsubscribeParams,
    ) {
        const result = await this.unsubscribeService.insertUnsubscribeWithRandno(body);
        return {success: true, msg: '수신거부 등록 성공', data: result};
    }
}
```
{% endraw %}


{% raw %}
```javascript
import { Injectable, Inject } from "@nestjs/common";
import { Kysely } from "kysely";
import { Database } from "../../database/types";
import { DATABASE_TOKEN } from "../../database/database.provider";
import { getOffset } from "../../shared/utils/pagination";
import { PageParams } from "../../common/types/common";

export interface RptTaskFilter extends PageParams {
  rptTaskNo?: number;
  rptScheNo?: number;
  maMonth?: string;
  seq?: number;
  rptTc?: string;
  scheTc?: string;
  creScheDt?: string;
  creStatus?: string;
  sendScheDt?: string;
  sendStatus?: string;
  regDt?: string;
  regDtFrom?: string;
  regDtTo?: string;
  regUserId?: string;
  chgDtFrom?: string;
  chgDtTo?: string;
}

@Injectable()
export class ReportRepository {
  constructor(@Inject(DATABASE_TOKEN) private readonly db: Kysely<Database>) {}

  async selectRptTaskList(filter: RptTaskFilter) {
    const { limit, offset } = getOffset(filter);

    let query = this.db.selectFrom("hccc.rpt_task").selectAll();

    if (filter.rptTaskNo)
      query = query.where("rpt_task_no", "=", filter.rptTaskNo);
    if (filter.rptScheNo)
      query = query.where("rpt_sche_no", "=", filter.rptScheNo);
    if (filter.maMonth) query = query.where("ma_month", "=", filter.maMonth);
    if (filter.seq) query = query.where("seq", "=", filter.seq);
    if (filter.rptTc) query = query.where("rpt_tc", "=", filter.rptTc);
    if (filter.scheTc) query = query.where("sche_tc", "=", filter.scheTc);
    if (filter.creScheDt)
      query = query.where("cre_sche_dt", "=", filter.creScheDt);
    if (filter.creStatus)
      query = query.where("cre_status", "=", filter.creStatus);
    if (filter.sendScheDt)
      query = query.where("send_sche_dt", "=", filter.sendScheDt);
    if (filter.sendStatus)
      query = query.where("send_status", "=", filter.sendStatus);
    if (filter.regUserId)
      query = query.where("reg_user_id", "=", filter.regUserId);
    if (filter.regDt) query = query.where("reg_dt", "like", `${filter.regDt}%`);
    if (filter.regDtFrom) query = query.where("reg_dt", ">=", filter.regDtFrom);
    if (filter.regDtTo) query = query.where("reg_dt", "<=", filter.regDtTo);
    if (filter.chgDtFrom) query = query.where("chg_dt", ">=", filter.chgDtFrom);
    if (filter.chgDtTo) query = query.where("chg_dt", "<=", filter.chgDtTo);

    const countQuery = query
      .clearSelect()
      .select(this.db.fn.countAll().as("count"));
    const [{ count }] = await countQuery.execute();
    const totalCount = Number(count);

    const data = await query
      .orderBy("rpt_task_no", "desc")
      .limit(limit)
      .offset(offset)
      .execute();

    return { data, totalCount };
  }
}
```
{% endraw %}

