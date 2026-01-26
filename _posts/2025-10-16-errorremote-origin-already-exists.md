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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8fe0a7f9-120c-81d3-b4d8-0003f7c0f162/21eee581-367f-4d57-bdce-a8384eef6f5a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LEXTL5N%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T085525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCs6LhgoRNs%2FrRs%2BG4JL9tinIRMteeADxa7A2oEON05WQIhAKYH21KajGl0rKFDLljUETpG8%2BjFdIHizP2AxvsyIawrKv8DCDkQABoMNjM3NDIzMTgzODA1IgwHMkEL39UDiXd1ga4q3AMHu8b5DuJsfKktnEU11BXg0%2FuhTbOHSCHs4kt5CpJHO7ZZBuaM6JeqxAHlVBInGSLzOyVJ79H5an7BB1o6BMXKBFU2HVEty%2BL3X%2BCUkJa%2Fw3p3YeQ9WYuQkXKPlln%2Bw2bQUBoonoUspXIIqOgubOdy92USQBJWfNd8nRWPoRv59VJY8kQQ9SIRB2pWYY5iZ0U5XItQW42SqD6iZy6ao9U4vnyvrGNM3OtFEDjDTUoL6WH3muNj4AYvN2hct2KlNRTpN0M4QfQ3JCUWWGwDLVyRpUTKVlHc1D2inY8tNEap6FstmROeLu%2Bw4JCPnYtnVkP9aQwwF%2FB%2FOc0byyNYtRLQgO5Idk31kY1IgwGb1ig1LOXKtDdp1wF%2FmygqCVMj00FKVEw1kkPCvOqBtkuHlRZBn0Ks%2BKDtgQneyd5V7ETHLb1p3dCfLL7OkI7oQ1ZbEERBQnE3w9D0j7PaJtPCBiORroDVjVJiCIVv%2ByALPInU5tefIHulnpZ7yeU00gkj5%2FML8ILlR6jtg%2FDeQT28R3zsZxW8Kmja%2BPQ67Te6HZuu24sLw3ylYVxr7kITer40hB7pOi5ZSXvqtO7cq5EakfrQTRfLVhZTiM4qJapc7ArsjLjdrkwp2N1WLCEGJTCJt9zLBjqkAYM0NL2BDmWlg84xrFv8ibeCMYPIou%2BGOBYPvcoGhFeSRQhpGroaUp3r%2F%2Boi4UDxjGaCifUf3zPw2VuwuVx8SeN1q8tzCuvzbww0raGvtBFLnf76iz1%2Bz3gn2k469B%2BwF1RvDpR7Duz8ilSlXMDkFzb7KAS0zmHXdAOVHISbPVFP1i6MzimkBIaRpMFjNdTjFrXTxiIBjHQxxPaXsqQqYD1m%2BS1b&X-Amz-Signature=df1735d7eadb8efb5d0b3c7387be5f40ce04b277ca1d88278103cac6e200761f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


기존에 연결되어 있는 레포가 다시 새로운 레포에 소스 코드를 올리려고 하면 발생되는 에러


👇🏻 해결 방법


```css
git remote remove origin
git remote add origin 새로 연결할 깃 주소
git remote -v
git push origin master
```


remove 하고 새로운 깃 주소를 연결해주면 됨

