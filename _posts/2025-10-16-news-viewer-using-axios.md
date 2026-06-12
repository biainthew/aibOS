---
layout: post
title: "news viewer using axios"
date: 2023-02-03
categories: [general]
tags: [React]
excerpt_separator: ""
---



{% raw %}
```javascript
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                setData(response.data);
            });
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
};

export default App;
```
{% endraw %}


🌀 axios.get 함수를 사용 / then 을 통해 비동기적으로 결과 확인


{% raw %}
```javascript
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1',
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
};

export default App;
```
{% endraw %}


🌀 async 적용 / try catch 구문 사용


{% raw %}
```javascript
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;
const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div class="thumbnail">
                    <a href="{url}" target="_blank" rel="noopener noreferrer">
                        <img src="{urlToImage}" alt="thumbnail" />
                    </a>
                </div>
            )}
            <div class="contents">
                <h2>
                    <a href="{url}" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
```
{% endraw %}


{% raw %}
```javascript
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async 를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=afc90f89227144c0b768a47b067128e7',
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    //대기중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    //아직 article 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    //articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
```
{% endraw %}


🌀 데이터를 불러와 map 함수를 사용하여 컴포넌트 배열로 변환하기 전에 꼭 !articles 를 조회하여 해당 값이 현재 null 인지 아닌지 검사해야함 / 하지 않으면 아직 데이터가 없을 때 null 에는 map 함수가 없기 때문에 렌더링 과정에서 오류 발생


{% raw %}
```javascript
import styled from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    & + & {
        margin-left: 1rem;
    }
`;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category key={c.name}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
```
{% endraw %}


🌀 categories 배열 안에 name 과 text 가 들어있는 객체들을 넣어주고 / map 돌려서 리턴값반환


{% raw %}
```javascript
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useCallback, useState } from 'react';

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);
    return (
        <>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </>
    );
};

export default App;
```
{% endraw %}


🌀 App 에서 category 의 상태를 useState 로 관리 / category 값을 업데이트하는 onSelcet 함수도 useCallback 으로 만들어줌 / 그 둘을 컴포넌트에 props 로 전달


{% raw %}
```javascript
import styled, 
{ css }
 from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }

${(props) =>
        props.active &&
        css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `}

    & + & {
        margin-left: 1rem;
    }
`;
const Categories = (
{ onSelect, category }
) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}

active={category === c.name}
                    onClick={() => onSelect(c.name)}

                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
```
{% endraw %}


🌀 props 로 전달받은 것들을 적용


{% raw %}
```javascript
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

const NewsList = (
{ category }
) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async 를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {

const query = category === 'all' ? '' : `&category=${category}`;

                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr
${query}
&apiKey=afc90f89227144c0b768a47b067128e7`,
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, 
[category]
);
    //대기중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    //아직 article 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    //articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
```
{% endraw %}


🌀 현재 category 값에 따라 요청할 주소 바뀌게 설정 / category 값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 useEffect 의 의존배열에 category 를 넣어주어야 함


{% raw %}
```javascript
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    const params = useParams();
    //카테고리가 선택되지 않았으면 기본값 all 로 사용
    const category = params.category || 'all';
    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;
```
{% endraw %}


🌀 이번에는 Route 사용


{% raw %}
```javascript
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    );
};

export default App;
```
{% endraw %}


🌀 경로에 category URL 파라미터가 없어도 NewsPage 컴포넌트를 보여줘야 하고 category 가 있어도 NewsPage 를 보여줘야 하기 때문에 Route 컴포넌트 두 번 사용


{% raw %}
```javascript
import styled, { css } from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled
(NavLink)
`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;
const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}

className={({ isAcive }) =>
                        isAcive ? 'active' : undefined
                    }
                    to={c.name === 'all' ? '/' : `${c.name}`}

                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
```
{% endraw %}


🌀 to 값은 /카테고리이름 , 전체보기는 / 로 설정


### ✔️ usePromise 커스텀 hook 만들기


{% raw %}
```javascript
import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return [loading, resolved, error];
}
```
{% endraw %}


🌀 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 이렇게 src 디렉토리에 lib 디렉토리를 만들 후 그 안에 작성 / 이 hook 은 Promise 의 대기중, 완료결과, 실패결과에 대한 상태를 관리 , usePromise 의 의존배열 deps 를 파라미터로 받아옴 / deps 는 usePromise 내부에서 사용한 useEffect 의 의존배열로 설정 ⇒ 경고 발생 ⇒ 특정 줄에서만 ESlint 규칙을 무시하도록 주석 작성


{% raw %}
```javascript
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=afc90f89227144c0b768a47b067128e7`,
        );
    }, [category]);
    //대기중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    //아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    //error 가 발생했을 때
    if (error) {
        return <NewsListBlock>에러발생!</NewsListBlock>;
    }
    //response 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
```
{% endraw %}


🌀 hook 을 사용하면 NewsList 에서 대기 중 상태관리와 useEffect 설정을 직접 하지 않아도 되므로 코드가 훨씬 간결해짐


### 정리


❗useEffect 에 등록하는 함수는 async 로 작성하면 안됨 대신 함수 내부에 async 를 따로 만들어 주어야 함

