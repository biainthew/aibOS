---
layout: post
title: "Server side rendering "
date: 2023-02-09
categories: [general]
tags: [React]
excerpt_separator: ""
---



### 🎂 웹팩 설정 커스터마이징 🎂


{% raw %}
```javascript
git add .
git commit -m "Commit before eject"
npm run eject
```
{% endraw %}


### 🎂 엔트리 만들기 🎂

- `entry` : 웹팩에서 프로젝트를 불러올 때 가장 먼저 불러오는 파일 ex) index.js
- 서버 사이드 렌더링을 할 때는 서버를 위한 엔트리 파일을 따로 생성해야 함

{% raw %}
```javascript
import ReactDomServer from "react-dom/server";

const html = ReactDomServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);
```
{% endraw %}


◽ `ReactDOMServer` 의 `renderToString` : 서버에서 리액트 컴포넌트 렌더링 할 때 사용 / 이 함수에 JSX 를 넣어서 호출하면 렌더링 결과를 문자열로 반환


### 🎂 웹팩 환경설정 🎂


{% raw %}
```javascript
ssrIndexJs: resolveApp('src/index.server.js'),// 서버 사이드 렌더링 엔트리
  ssrBuild: resolveApp('dist'), // 웹팩 처리 후 저장 경로
```
{% endraw %}


{% raw %}
```javascript
const paths = require("./paths");

module.exports = {
  mode: "productions", //최적화 옵션들 활성화
  entry: paths.ssrIndexJs, //엔트리 경로
  target: "node", //node 환경에서 실행될 것
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: "server.js", //파일 이름
    chunkFilename: "js/[name].chunk.js", //청크 파일 이름
    publicPath: paths.publicUrlOrPath, //정적 파일이 제공될 경로
  },
};
```
{% endraw %}


◽ 기본 설정 완료 / 로더 설정 / 로더는 파일을 불러올 때 확장자에 맞게 필요한 처리를 해줌


[: 웹팩 쓰는 이유](https://velog.io/@kim-jaemin420/%EC%9B%B9%ED%8C%A9%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80-%EC%9B%B9%ED%8C%A9%EC%9D%B4-%ED%95%98%EB%8A%94-%EC%9D%BC%EA%B3%BC-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0)


{% raw %}
```javascript
const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  mode: "productions", //최적화 옵션들 활성화
  entry: paths.ssrIndexJs, //엔트리 경로
  target: "node", //node 환경에서 실행될 것
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: "server.js", //파일 이름
    chunkFilename: "js/[name].chunk.js", //청크 파일 이름
    publicPath: paths.publicUrlOrPath, //정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          //자바스크립트를 위한 처리
          //기존 webpack.config.js 를 참고하여 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [
                [
                  require.resolve("babel-preset-react-app"),
                  {
                    runtime: "automatic",
                  },
                ],
              ],
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                      },
                    },
                  },
                ],
              ],
              casheDirectory: true,
              cacheCompression: true,
              compact: false,
            },
          },
          //css 를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 생성하지 않음
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
          //Css Module 을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          //sass 를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          //sass + css module 을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          //url-loader 를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("resolve-url-loader"),
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              limit: 10000, //원래는 9.76kb 가 넘어가면 파일로 저장하는데 emitFile 값이 false 일 땐 경로만 준비하고 파일은 저장하지 않음
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          //위에서 설정된 확장자를 제외한 파일들은 file-loader 를 사용
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: "static/media/[name].[hash:8],[ext]",
            },
          },
        ],
      },
    ],
  },
};
```
{% endraw %}


◽ css 나 이미지 파일을 로더에서 별도로 설정하여 처리하지만 따로 결과물에 포함되지 않도록 구현


{% raw %}
```javascript
resolve:{
    modules:['node_modules']
  }
```
{% endraw %}


◽ 맨 밑에 추가해줌 → 코드에서 node_modules 내부의 라이브러리를 불러올 수 있게


◽ 이렇게 하면 react, react-dom/server 같은 라이브러리를 import 구문으로 불러오면 node-modules 에서 찾아서 사용, 라이브러리를 불러오면 빌드할 때 결과물 파일 안에 해당 라이브러리 관련 코드가 함께 번들링


◽ 브라우저에서 사용할 때는 결과물 파일에 리액트 라이브러리와 우리의 어플리케이션에 관한 코드가 공존해야 하지만 서버에서는 node_modules 를 통해 바로 불러와서 사용가능하기 때문에 그렇지 않아도 됨


◽ So 서버를 위해 번들링 할 때는 node_modules 에서 불러오는 것을 제외하고 번들링 하는 것이 좋음 → webpack-node-externals 라는 라이브러리를 사용해야 함


{% raw %}
```javascript
npm add webpack-node-externals
```
{% endraw %}


◽ 하고 설정에 적용


{% raw %}
```javascript
const nodeExternals = require("webpack-node-externals");
const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const webpack = require("webpack");
const getClientEnvironment = require("./env");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: "production", //최적화 옵션들 활성화
  entry: paths.ssrIndexJs, //엔트리 경로
  target: "node", //node 환경에서 실행될 것
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: "server.js", //파일 이름
    chunkFilename: "js/[name].chunk.js", //청크 파일 이름
    publicPath: paths.publicUrlOrPath, //정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          //자바스크립트를 위한 처리
          //기존 webpack.config.js 를 참고하여 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [
                [
                  require.resolve("babel-preset-react-app"),
                  {
                    runtime: "automatic",
                  },
                ],
              ],
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,
              compact: false,
            },
          },
          //css 를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 생성하지 않음
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
          //Css Module 을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          //sass 를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          //sass + css module 을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                  modules: {
                    exportOnlyLocals: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          //url-loader 를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("resolve-url-loader"),
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              limit: 10000, //원래는 9.76kb 가 넘어가면 파일로 저장하는데 emitFile 값이 false 일 땐 경로만 준비하고 파일은 저장하지 않음
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          //위에서 설정된 확장자를 제외한 파일들은 file-loader 를 사용
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: "static/media/[name].[hash:8],[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
  },
  externals: [
    nodeExternals({
      allowlist: [/@babel/],
    }),
  ],
  plugins: [new webpack.DefinePlugin(env.stringified)],
};
```
{% endraw %}


◽ 환경변수를 주입하면 프로젝트 내에서 process.env.NODE_ENV 값을 참조하여 현재 개발 환경인지 아닌지를 알 수 있음


### 🎂 빌드 스크립트 작성하기 🎂


{% raw %}
```javascript
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

process.on("unhandledRejection", (err) => {
  throw err;
});

require("../config/env");
const fs = require("fs-extra");
const webpack = require("webpack");
const config = require("../config/webpack.config.server");
const paths = require("../config/paths");

function build() {
  console.log("Creating server build...");
  fs.emptyDirSync(paths.ssrBuild);
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(stats.toString());
    });
  });
}
build();
```
{% endraw %}


◽ 서버에서 사용할 빌드 파일을 만드는 스크립트


{% raw %}
```javascript
node scripts/build.server.js
node dist/server.js
//<div>Hello Server Side Rendering!</div>

//빌드가 잘 되는 지 확인

"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "start:server" : "node dist/server.js",
    "build:server" : "node scripts/build.server.js"
  },
//package.json 에 명령어 추가
```
{% endraw %}


### 🎂 서버 코드 작성하기 🎂


{% raw %}
```javascript
npm add express
```
{% endraw %}


{% raw %}
```javascript
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(root); // 클라이언트에게 결과물을 응답합니다.
};

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```
{% endraw %}


일단 이거 안됨 → [https://algoroot.tistory.com/44](https://algoroot.tistory.com/44) 해결함


◽ 리액트 라우터 안에 들어있는 `StaticRouter` 컴포넌트가 사용됨 → 주로 서버사이드 렌더링 용도로 넣어줌 / props 로 넣어 주는 `location` 값에 따라 라우팅해줌 


◽ `StaticRouter` 안에 `context` 라는 props 도 넣어줌 → 이 값을 사용하여 나중에 렌더링한 컴포넌트에 따라 HTTP 상태코드를 설정해 줄 수 있음


![Untitled.png](/aibOS/public/images/posts/28e0a7f9-983a7fbab84e.png)


### 🎂 정적 파일 제공하기 🎂


{% raw %}
```javascript
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

import path from "path";


const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(root); // 클라이언트에게 결과물을 응답합니다.
};

const serve = express.static(path.resolve("./build"), {
  index: false, // '/' 경로에서 index 를 보여주지 않도록 설정
});
app.use(serve); // 순서 중요 serverRender 전에 위치해야함


app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```
{% endraw %}


◽ Express 에 내장되어 있는 static 미들웨어를 사용하여 서버를 통해 build 에 있는 js, css 정적 파일들에 접근할 수 있도록 해줌


{% raw %}
```javascript
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";

import fs from "fs";



//asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);
function createPage(root) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <link rel="shortcut icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link rel="stylesheet" href="${manifest.files["main.css"]}">
  </head>
  <body>
      <noscript>You need to enable JavaScript to run this app</noscript>
      <div id="root">${root}</div>
      <script src="${manifest.files["main.js"]}"></script>
  </body>
  </html>
  `;
}


const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(
createPage(root)
); // 결과물을 응답합니다.
};
const serve = express.static(path.resolve("./build"), {
  index: false, // '/' 경로에서 index 를 보여주지 않도록 설정
});
app.use(serve); // 순서 중요 serverRender 전에 위치해야함

app.use(serverRender);

//5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```
{% endraw %}


◽ 이제 페이지에 들어가면 css 적용됨 / 서버 사이드 렌더링을 구현하면 첫 번째 렌더링은 서버를 통해 하지만 그 이후에는 브라우저에서 처리함 → 링크를 눌러 이동할 때 네트워크 요청이 추가로 발생하지 않아야 함

