# Frontend

## 考えてみよ

### SPA(Single Page Application) vs SSR (Server Side Rendering)

TODO:
<https://medium.com/aha-official/%EC%95%84%ED%95%98-%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-spa%EC%99%80-ssr%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nuxt-js-cafdc3ac2053>

### WebPack

웹팩은 의존성을 분석에 모듈을 번들 "통합" 시켜준다

### Babel

바벨은 최신　자바스크립트를 구형 웹브라우저에서도 사용할수 있게 코드를 "변환"시킨다

## 今までの Jest

jest + sonarqube インストール

tsconfig に jest 設定

cannot find module babel-core が出るので babel-core インストール

babel バージョンエラーが出るので修正

import エラーが出るので、babel.config.js に@bable/preset-env 設定
