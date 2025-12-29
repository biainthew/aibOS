---
layout: post
title: "코딩애플JS Part1-13 apply call 함수"
date: 2023-07-03
categories: [general]
tags: [Javascript/Jquery]
---


### 3. array 를 파라미터 형태로 집어넣고 싶을 때


### apply & call 함수


: 둘의 유일한 차이점은 파라미터를 array 로 한꺼번에 집어넣을 수 있냐 없냐


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLMX3S3%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T012004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUtIxLim%2Bb3FtQoWg8oL%2BFUMLrjorX3pB%2BPHonSC4I4AIhAMWUqq4pe%2FqgmEj%2BA23ag98jikUdRFQN7Sx1WNO6qc%2BjKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MmG6xqmC2goaj7sq3AOvKuVP3D0WVQcBhntAIglnAQQx8cmLPFBFUMBLs44XJnVFKkuSF4IQQkPdxWoZHL7vqtzcduqoAQHdD%2Bd8H%2B3dGd7gGcFS74wa6b9p%2BQDzzWJBUvAs210MWRUH0CRpcWC%2FysxtIeyRIpIWHTz7KR0t%2BzEjchJjPTwTCeX7sMEwMJEdmxCZ9kuFTabg1egqVNBti8vAS6wiZx0zmH5qCFeNYczlO83RDW5qR5DOiNuT%2Bhy%2BvngTS%2BCPKeRwtAcmvzQl5yfmhLPiUJ5T85JT9ahv4Xwy729jWwGm7%2FvWSSSdeURETPPE7%2F8V7kXf0la45CY1XODZwu9amSawgF%2F%2B6W2dPX%2BnGJQRd4k5ftT0gMTv3P2VPfGu5dZpjVf1ZSnaGlRC2dPhEXJQQSBp4LBGtNX%2FRXFMhs3C19IEddk7276LZgLSNMPeN7D5BRNTO%2F%2FS1MLtG5bpthAIAdpe4ptAGjzjjMdd83A7juWpxl2wU%2BzxlnM9gZvF%2F6kba98fu95hpYmXn%2FiH%2FNtuwgTVgus%2B1Ci%2BOdc8RcoYWpuoiU3GCrJVtiQkAoVB48Adt28QPgvPGaj44iZ8dAyykf9X0G%2B8RSIrXXrAlxHIkbXAa7lnhzT2AwJ8%2ByNuLp8XeeXX7jDOpMfKBjqkAWJHG34UGVVo6ChgUhTL6N7EqNZSWqbqTZYMmXQYqn9nrNnltVWEwLT%2FUDQSAzzVYx1ujUJyKFz%2F6AnVjUZAL%2FXX2125mVzwbyXI5VHYsl8fj%2BZfJeQVT7UpeEJIDYUF9nCK5H8USeI%2FTSBfVyBbgEQ0jI9JMiTjg8XhoC%2BuS1FcaLN2RYwum%2FXh99AMlEBPvYkFEsLAOgOW3m3jPGBeCO80bjXS&X-Amz-Signature=9dc91ef3144d4ba0dd5c45527c4248948c67cf0d13d8ff99201e2262bfaafce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

