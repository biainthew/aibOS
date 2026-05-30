---
layout: post
title: "프레임워크 비교 2. Fastify + pg-promise"
date: 2026-04-06
categories: [general]
tags: [Node.js]
excerpt_separator: ""
---



## **1. Fastify 기본 개념**


Fastify 의 가장 큰 특징은 JSON 스키마를 활용한 데이터 검증과 직렬화 방식입니다.


### **Fastify 주요 구성요소**


| **구성 요소**         | **역할 및 특징**                                               |
| ----------------- | --------------------------------------------------------- |
| **Plugin**        | 모든 기능(DB 연결, 라우트 등)을 묶는 단위로 캡슐화를 통해 모듈 간 간섭을 방지합니다        |
| **Route**         | URL 경로와 핸들러를 매핑하고 JSON Schema를 직접 정의하여 검증과 결합이 가능합니다.     |
| **Decorator**     | Fastify 인스턴스에 사용자 정의 함수나 객체(DB 객체 등)를 추가하여 전역에서 사용 가능합니다. |
| **Hook**          | 요청 처리 Lifecycle 사이사이에 개입하여 로직을 실행합니다.                     |
| **Serialization** | JSON 데이터를 문자열로 변환할 때 미리 정의된 스키마를 사용하여 성능을 극대화합니다.         |


### **NestJS 와의 차이**

- NestJS는 엄격한 클래스 기반 DI를 요구하지만 Fastify는 함수형 스타일과 플러그인 기반의 자유로운 구조를 지향합니다.
- 별도의 설정 없이도 초고성능 로거인 Pino가 내장되어 있어 대량의 로그 발생 시에도 서버 성능 저하가 적습니다.
- NestJS는 Class-validator를 주로 쓰지만 Fastify는 Ajv(JSON Schema)를 엔진으로 사용하여 런타임 검증 속도가 훨씬 빠릅니다.
- NestJS의 `@UseInterceptors()` 같은 AOP 데코레이터는 없지만 Hook 으로 동일한 역할을 합니다.

| **NestJS AOP**  | **Fastify Hook**            | **역할**         |
| --------------- | --------------------------- | -------------- |
| Interceptor     | onRequest / onResponse      | 요청/응답 가로채기, 로깅 |
| Guard           | onRequest / preHandler      | 인증/인가 체크       |
| Pipe            | preValidation / JSON Schema | 파라미터 검증/변환     |
| ExceptionFilter | setErrorHandler             | 에러 공통 처리       |


## **2. pg-promise 기본 개념**


pg-promise 는 Node.js 환경에서 PostgreSQL 전용으로 설계된 프로미스 기반 SQL 쿼리 라이브러리 입니다.


### **pg-promise 주요 구성요소**


| **구성 요소**                | **역할 및 특징**                                           |
| ------------------------ | ----------------------------------------------------- |
| **Initialization (pgp)** | 라이브러리 로드 및 옵션(로깅, 에러 핸들링 등)을 설정하는 초기화 객체입니다           |
| **Database Object (db)** | 실제 쿼리를 수행하는 인스턴스로 모든 쿼리 메서드를 포함합니다                    |
| **Query File (sql)**     | SQL 쿼리를 외부 `.sql` 파일로 분리하여 관리하고 이를 캐싱하여 성능을 높이는 기능입니다 |
| **Formatting Helpers**   | 객체나 배열을 SQL 형식(INSERT/UPDATE 등)으로 자동 변환해주는 유틸리티입니다    |


### **작동 프로세스**

- 내부적으로 Connection Pool 을 내장하고 있어 개발자가 수동으로 관리를 할 필요가 없습니다.
- SQL 문자열 내에 `${variable}` 또는 `$(variable)` 형태의 변수를 삽입하면 라이브러리가 이를 안전하게 이스케이프하여 SQL 인젝션을 방지하고 실행합니다.
- `db.tx()` 메서드를 통해 트랜잭션을 정의하면 내부 로직 성공 시 `COMMIT` 에러 발생 시 `ROLLBACK`을 프레임워크 레벨에서 자동으로 수행합니다.
- 쿼리 결과의 개수에 따라 `one`, `many`, `none`, `any`, `oneOrNone` 등의 메서드를 명시적으로 사용하여 예상치 못한 데이터 결과로 인한 런타임 에러를 사전에 방지합니다.

## **3. 실제 구현 내용**


### **프로젝트 구조**


{% raw %}
```plaintext
src/
├── app.ts                        # Fastify 인스턴스 생성 + 플러그인 등록
├── server.ts                     # 서버 시작 (listen)
├── config/
│   └── env.ts                    # dotenv 로드, 환경변수 타입 정의
├── plugins/
│   ├── database.ts               # pg-promise 인스턴스 생성 + Fastify 데코레이터 등록
│   └── error-handler.ts          # setErrorHandler 공통 에러 처리
├── modules/
│   ├── report/
│   │   ├── report.route.ts       # GET /report/task 라우트 + Typebox 스키마
│   │   ├── report.service.ts     # 비즈니스 로직
│   │   └── report.repository.ts  # Raw SQL + pg-promise 이름 기반 바인딩
│   └── unsubscribe/
│       ├── unsubscribe.route.ts  # POST /unsubscribe 라우트 + Typebox 스키마
│       ├── unsubscribe.service.ts
│       └── unsubscribe.repository.ts
├── database/
│   ├── types.ts                  # 테이블 타입 정의 (인터페이스, pg-promise 결과 매핑용)
│   ├── schemas.ts                # Typebox VO 스키마 (테이블당 1개, Pick/Partial로 API별 재사용)
│   └── sql/                      # SQL 파일 분리 (선택)
└── shared/
    ├── types/
    │   └── common.ts             # 공통 타입 (PageParams, ApiResponse 등)
    └── utils/
        └── pagination.ts         # 페이징 유틸
```
{% endraw %}


### **기존 코드 문제 해결**


**Winston 기반 수동 로깅 핸들링**

- app.ts 에서 logger: true 옵션 설정 시 pino 로거가 요청/응답을 자동 로깅
- NestJS에서 `LoggingInterceptor` 클래스로 직접 구현한 것을 Fastify는 `logger: true` 한 줄로 내장 처리

{% raw %}
```javascript
import Fastify from 'fastify';

export async function buildApp() {
  const fastify = Fastify({
    // 여기서 로거 설정
    logger: true,
  });

  return fastify;
}
```
{% endraw %}


{% raw %}
```javascript
{
    "level": 30,
    "time": 1712019600000,
    "pid": 1234,
    "reqId": "req-1",
    "req": {
        "method": "GET",
        "url": "/report/task"
    },
    "msg": "incoming request"
}
{
    "level": 30,
    "time": 1712019600050,
    "pid": 1234,
    "reqId": "req-1",
    "res": {
        "statusCode": 200
    },
    "responseTime": 50.123,
    "msg": "request completed"
}
```
{% endraw %}

- 로그 텍스트 파일로 저장 옵션 설정으로 가능

{% raw %}
```javascript
const fastify = Fastify({                                                                                                                                                                   
  logger: {                                                                                                                                                                                 
    level: 'info',                                                                                                                                                                          
    transport: {
      targets: [ 
        // 콘솔
        {
          target: 'pino-pretty',
          options: { destination: 1 }
        },
        // 파일
        {
          target: 'pino/file',
          options: { destination: './logs/app.log' }
        }, 
      ],
    },
  },
});
```
{% endraw %}

- pino-roll 패키지 사용 시 날짜별 파일 생성 가능

{% raw %}
```javascript
// logs/app.2026-04-02.log 형태로 일별 파일 생성
{ target: 'pino-roll',
  options: {
      file: './logs/app',
      frequency: 'daily',
      dateFormat: 'yyyy-MM-dd'
    }
}
```
{% endraw %}


`try-catch` **블록이 서비스 곳곳에 중복 작성되어 있으며 에러 발생 시 응답 포맷이 일관되지 않음**

- 서비스에서는 `try-catch` 없이 에러를 throw만 하면 `setErrorHandler`가 공통 포맷으로 응답

{% raw %}
```javascript
// 서비스 — try-catch 없음, 에러는 throw만
export async function insertUnsubscribeWithRandno(db, params) {
  const taskDtl = await selectRptTaskDtlByRandno(db, params.rptRandno);
  if (!taskDtl) {
    const error: any = new Error('해당 리포트 발송 데이터가 없습니다');
    error.statusCode = 404;
    throw error;  // setErrorHandler가 잡음
  }
  // ... 비즈니스 로직 (DB 에러도 자동으로 setErrorHandler가 잡음)
}
```
{% endraw %}


{% raw %}
```javascript
// plugins/error-handler.ts — 모든 에러를 한 곳에서 공통 처리
fastify.setErrorHandler((error, request, reply) => {
  const status = error.statusCode || 500;
  const message = error.message || '알 수 없는 오류가 발생했습니다';
  const code = error.code || 'UNKNOWN_ERROR';

  if (status >= 500) {
    request.log.error({ err: error }, `[${code}] ${message}`);
  } else {
    request.log.warn(`[${code}] ${message}`);
  }

  // 모든 에러가 동일한 포맷으로 응답
  reply.status(status).send({ success: false, msg: message, code });
});
```
{% endraw %}

- NestJS처럼 `@Catch(HttpException)`, `@Catch(QueryFailedError)` 같이 에러 타입별로 분리하는 건 안 되고 `setErrorHandler` 하나에서 `if/else`로 분기하는 구조

**Oracle의 :bindVar 방식 사용으로 객체 키 누락 혹은 undefined 시 바인딩 실패로 쿼리 에러 발생**

- VO

{% raw %}
```javascript
export const RptUnsubscribeSchema = Type.Object({
  unsubscribeNo: Type.Number(),
  year: Type.Optional(Type.String()),
  intgPrj: Type.Optional(Type.String()),
  dealLine: Type.Optional(Type.String()),
  clientNo: Type.Optional(Type.String()),
  clientTno: Type.Optional(Type.String()),
  clientEmail: Type.Optional(Type.String()),
  unsubscribeTc: Type.Optional(Type.String()),
  changeMsg: Type.Optional(Type.String()),
  reason: Type.Optional(Type.String()),
  aggrementDt: Type.Optional(Type.String()),
  unsubscribeDt: Type.Optional(Type.String()),
  rptRandno: Type.Optional(Type.String()),
  regDt: Type.Optional(Type.String()),
  regUserId: Type.Optional(Type.String()),
  regSysTc: Type.Optional(Type.String()),
  chgDt: Type.Optional(Type.String()),
  chgUserId: Type.Optional(Type.String()),
  chgSysTc: Type.Optional(Type.String()),
  delYn: Type.Optional(Type.String()),
});
```
{% endraw %}

- 컨트롤러

{% raw %}
```javascript
// Type.Required 로 NOTNULL 이 아니지만 필수값인 필드 정의
const UnsubscribeBody = Type.Required(
  Type.Pick(RptUnsubscribeSchema, [
    "rptRandno",
    "year",
    "unsubscribeTc",
    "reason",
  ]),
);
type UnsubscribeBody = Static<typeof UnsubscribeBody>;

export default async function unsubscribeRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: UnsubscribeBody }>(
    "/unsubscribe",
    // 스웨거 문서 자동 생성을 위한 코드
    {
      schema: {
        description: "수신거부 등록",
        tags: ["Unsubscribe"],
        body: UnsubscribeBody,
      },
    },
    async (request) => {
      const result = await insertUnsubscribeWithRandno(request.body);
      return { success: true, msg: "수신거부 등록 성공", data: result };
    },
  );
}
```
{% endraw %}

- 쿼리

{% raw %}
```javascript
export async function selectRptTaskList(
  filter: Record<string, any> & PageParams,
) {
  const { limit, offset } = getOffset(filter);
  const params = { ...filter, limit, offset };

  const query = `
    SELECT *
    FROM hccc.rpt_task
    WHERE 1=1
      ${filter.rptTaskNo ? 'AND rpt_task_no = $(rptTaskNo)' : ''}
      ${filter.rptScheNo ? 'AND rpt_sche_no = $(rptScheNo)' : ''}
      ${filter.maMonth ? 'AND ma_month = $(maMonth)' : ''}
      ${filter.seq ? 'AND seq = $(seq)' : ''}
      ${filter.rptTc ? 'AND rpt_tc = $(rptTc)' : ''}
      ${filter.scheTc ? 'AND sche_tc = $(scheTc)' : ''}
      ${filter.creScheDt ? 'AND cre_sche_dt = $(creScheDt)' : ''}
      ${filter.creStatus ? 'AND cre_status = $(creStatus)' : ''}
      ${filter.sendScheDt ? 'AND send_sche_dt = $(sendScheDt)' : ''}
      ${filter.sendStatus ? 'AND send_status = $(sendStatus)' : ''}
      ${filter.regUserId ? 'AND reg_user_id = $(regUserId)' : ''}
      ${filter.regDt ? "AND reg_dt LIKE $(regDt) || '%'" : ''}
      ${filter.regDtFrom ? 'AND reg_dt >= $(regDtFrom)' : ''}
      ${filter.regDtTo ? 'AND reg_dt <= $(regDtTo)' : ''}
      ${filter.chgDtFrom ? 'AND chg_dt >= $(chgDtFrom)' : ''}
      ${filter.chgDtTo ? 'AND chg_dt <= $(chgDtTo)' : ''}
    ORDER BY rpt_task_no DESC
  `;

  return pagedQuery<RptTask>(query, params, filter.page, filter.size);
}
```
{% endraw %}

- 오라클로 유지하는 테이블 쿼리 예시

{% raw %}
```javascript
// 1. 쿼리와 바인딩 객체 초기화
let query = `SELECT * FROM table WHERE 1=1`;
const binds = {};

// 2. 조건이 있을 때만 쿼리에도 넣고 바인딩 객체에도 넣음
if (params.chgDtTo) {
  query += ` AND CHG_DT <= :chgDtTo`;
  binds.chgDtTo = params.chgDtTo;
}

// 3. 실행
const result = await connection.execute(query, binds);
```
{% endraw %}


## **4. 결론**

- 기존에 존재하던 문제들 모두 해결 가능
- 쿼리빌더나 ORM 과 달리 SQL 자체를 재작성 할 필요가 없으며 기존 구조를 유지하며 문법만 치환해서 적용 가능
- NestJS 에서 클래스 형식으로 구현했던 로깅, 검증, 에러처리를 함수, 옵션 등으로 간편하게 설정 가능
- TypeBox의 JSON Schema 빌더에 대한 개념 필요

| **함수명**                    | **설명**                | **TypeScript 대응**     |
| -------------------------- | --------------------- | --------------------- |
| `Type.Pick(T, [keys])`     | 스키마에서 **특정 키만 선택**    | `Pick<T, 'k'>`        |
| `Type.Omit(T, [keys])`     | 스키마에서 **특정 키만 제외**    | `Omit<T, 'k'>`        |
| `Type.Required(T)`         | 모든 속성을 **필수**로 변경     | `Required<T>`         |
| `Type.Partial(T)`          | 모든 속성을 **선택 사항**으로 변경 | `Partial<T>`          |
| `Type.Union([A, B])`       | 여러 타입 중 하나 (OR)       | `A | B`               |
| `Type.Intersect([A, B])`   | 여러 타입의 합집합 (AND)      | `A & B`               |
| `Type.Extends(A, B, T, U)` | 조건부 타입                | `A extends B ? T : U` |

- 오라클 유지하는 테이블들에는 pg-promise 라이브러리 적용 불가
