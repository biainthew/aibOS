---
layout: post
title: "React inline style variables"
date: 2023-02-06
categories: [general]
tags: [React]
excerpt_separator: ""
---



{% raw %}

* [참고 문서](https://takeknowledge.tistory.com/37)


🦁 변수에 색상 코드가 담겨있어서 그걸 스타일로 주고싶었음


👇🏻 해결 방법


```javascript
return (
        <div className='list-wrap'>
            {photo.map((item, index)=>{
                const title = item.url.slice(-6)
                const divstyle = {
                    background: `#${title}`
                }
                return(
                    <div className='list' key={index}>
                        <span className='list-img'><img src={item.thumbnailUrl} alt={item.title}/></span>
                        <p className='list-title' style={divstyle}>#{title}</p>
                    </div>
                )
            } 
            )}
        </div>
```


인라인 스타일로 {{}} 안에 백틱 넣고 바로 변수를 넣으니까 안 돼서 검색해보니 따로 하래서 스타일 만들어주고 넣었더니 성공



{% endraw %}
