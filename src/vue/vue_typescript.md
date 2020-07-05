# Vue & Typescript

Laravel を基準でセットアップ

### npm or yarn install

```bash
yarn add -D ts-loader typescript vue-property-decorator
```

### tsconfig.json & webpack.mix.js

プロジェクト配下に tsconfig.json 作成

#### tsconfig.json

include は開発環境に合わせてセット

```javascript
{
    "compilerOptions": {
        "outDir": "./public/",
        "sourceMap": true,
        "strict": true,
        "noImplicitReturns": true,
        "noImplicitAny": true,
        "module": "es2015",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "moduleResolution": "node",
        "target": "es5",
        "lib": ["es2016", "dom"]
    },
    "include": ["resources/js/**/*"]
}
```

#### webpack.mix.js

＊mix.js の app.js を app.ts にすること

```javascript
const mix = require("laravel-mix");

mix.js("resources/js/app.ts", "public/js").version();

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ],
  },
});
```

### vue.shims.d.ts 作成

ts と vue を連結するため作成

#### /resources/jsvue.shims.d.ts

```javascript
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```

### /resources/js/\*.js -> ts に変換

js ファイルを ts に変更して、コンパイルして問題ないなら OK、コンパイルエラーが発生したらエラー確認
