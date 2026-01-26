---
layout: post
title: "RequestParam & PathVariable"
date: 2025-03-21
categories: [general]
tags: [Java]
---


| RequestParam                                        | PathVariable                              |
| --------------------------------------------------- | ----------------------------------------- |
| 쿼리 문자열                                              | 경로 변수                                     |
| /pages/opinion/draft?opinofeNo=d1c11c91-cf93-48bc-a | /pages/opinion/draft/d1c11c91-cf93-48bc-a |
| 페이지를 로드 할 때 특정 소견서 번호를 전달해 주는 경우                    | 소견서 번호를 URL 경로에 포함시켜 해당 소견서 페이지를 로드할 때 사용 |
| 추가적인 데이터를 전달                                        | 값을 경로의 일부로 전달                             |
| url에 반드시 표시해야 하는건 아님                                | url에 반드시 표시해야 함                           |

