---
layout: post
title: "[Error]Remote origin already exists"
date: 2023-01-31
categories: [general]
tags: [Work]
---


[: 참고 문서](https://coding-factory.tistory.com/619)


🦁 자꾸 오류가 떠서 레포를 삭제하고 다시 올리려고 했는데 발생한 에러


👇🏻 오류 코드


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVE4FEG6%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T011554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxVUv5Ho%2Bh%2BxU90c2werlOyaMU8501dfAu1EqBZoVqTAiEA%2FeU%2FeF4iTsPD68976CZvC5y8Ecw4abrSeAApfY6YwJgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtJTV9zTRXPCT%2F9AyrcAyPuyIGxkjZsV%2FEq84MCoX6oRhOOZwJ%2F8rCUn0dEm38BACGP%2FzSdhTgmX7IEEj0CyXeSaqGiCdMXQe5dg8ulQoKbYI6Ef00pBTrbfX5U1pGqE6VW3LesplH7RhL4W%2FZF%2FPuJgritpPrcYbsfrliWXDjjLZXtjq71CnpYmA%2B58YfEH6GsaKxutmlp%2Fz03hiBeLfXlCihZRdUYPgv86k5Il6Rl6RQOR42SlJCUFJklhuP01LKZIf%2BkjM8XMtaSsMkraM6QxykLPJLplZrgu5BSQc0dwHC4g2LzTgHroYO1rJ28ZqPO8gyRazowG6fsijbbdCKzJjTjrqBZlQH2dUmCUynb1HVekc8F7S5xW%2BN0oaEty1Jz4EOaU6hcqYc1pzdUIBvlrihvmO48M9JEj4%2FuoQAhWHctJJ%2BhP3yUcnGGY9nipzuBmXsMxvh65zyv2XNX2Aq0pp7tV%2BFVJ6heopPvH84xBleGn8KOwt8zf%2BRZvitEckx5EIJ3Wc7wPreDa8wskCx7Arln47W%2FsQUNRbNsAGNOXBemI6bbr7mM9yjPF52iZb%2FfB4yAgW0wqf%2FckM%2F%2BDmcWwuzSPsXXdAwtLI3%2BiAqCdkW5luWdczt62RxNYBZtWMr7LaTDYl9ZzBWWMKDDhssGOqUBgG%2FAxsxLUOk9DeimfnVnbHi0FjNhMJh0T7CAIyZeTjb5G%2FGQ0ajCpJ%2FjGHtZetYcHbiP7%2Fkf8Ep%2FQjGtLQb7KRxXOWeDUVjLs581KKqnHnVJ9mZrttuePAWpxgPxilikGmjSvF30jqR0Cd0YaOcqO4b%2FAx8xR30vH%2F8xqPzzFTMB7BA3wmjY4Y3fNdQbp9C5ZkS%2Fzh4hNPmxE0eoVrWfP3Qtg1AC&X-Amz-Signature=731a772dc8adef0b4802653cedb461092242b46ab6641ec96b031c420b29059d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨

