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


![codingapple.com_course-status__%283%29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/f9979927-e3b0-47bd-bd93-128a5ca8477e/codingapple.com_course-status__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUCQPIQ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T011416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDbAz7rtfxTm9nuznnqQBHTFPhCfYjbYhp3vDgNh7KnvwIgYgFuRfMnBNQzJIceoKpXiXTd9UPd7Ul2ohGS5vPBo4sq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEUgb5sCzoPqqY0P2CrcAyIQJ1gdG%2FqW5dmh%2BhPD1DRyR4fWqJXVy8VqhE0aO434xRqMNfBBOLceVWNQWpvbb4EGfZUY9BhHfxEIyR7H2B7mz4hgC6JHhM1s1AQScQERvINWjs3ju4n%2FMEm3AjPKafB6pD9dJYFkj%2F9VIVlhPMJgOvs3Z9Q21uPkRTY%2FQSXflUtUxowECd9CvI5KGQq61PhoWjYIPsLghWVs6hc3HhehcZge5cQ7I8pMUYBVO6cnsDWvCpzwoSGkImPWbVV4E0ewSGBolUlwlTYqG2Umz5QhsR4nIMBhNUfjX0ZVYC9jD4gHYdS64zQ2Q6c6xQ7tG3jHz%2BReexfPr%2FhLOSlN5X%2FJA7gfdSkoHvouQ0Ft3pxag0UOXc0Fz8YQnXesVEhzbunKhPLP8FseQndbBjpWdIrzw%2FN%2Fv8%2F070hAuka%2Fy8BWQk2LSEMu6FQb%2BUR%2F6SlwYqup58b6bQM1ZgvKYEte%2FHZAKRxmtkj0b82XVqKn%2BwdMoAynIQqZXH9aUfnV89Ndhy83tbXOz%2FfkMwlDY%2BR5Ghp%2ByggTydiygI52RkxBawx6ZNS3IC5OU8UzQBrpo6seWhfo3iAEmPYlEenit1u2vHQ%2FnPX98XwlfiTMlPHBg54s%2FE8fyFoAO0WnqAI7MLfHp8oGOqUBNWy%2Fhmr9botFdpl9rCMXBJ6wpCvROFFe%2B14N95WuO6LIooo1%2FQIYSOMPovAjtRiwIaBoGmqjReaI4H%2FkdYCAQfUmLdOa3jKB2ZrtcrDTg6EDr0728axJ9Go12wcSwwFkDeSedCRttLNpTZKBK6oUSdtbS6x04RjfsexA7B7ZvjagksjlKEA8vzpo3JXyvf4LZTvd%2BH3mBSfYMcpgssv%2Fpld4H6QJ&X-Amz-Signature=d5c24cf0ad3f31d30e172914f67b6fb9298f090c50323b1189363e6ceb24bc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

