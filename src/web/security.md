# Security

Web アプリケーションで確認するべきのセキュリティ-について記入する。

＊現在はフレームワークでセキュリティー設定が基本設定になってることが多い。


## CSRF、XSRF（クロスサイトリクエストフォージェリ）

＊説明
https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%88%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%AA

#### 攻撃者がリクエストURLをイジって（特にURLにパラメーター情報が表示されるGETリクエスト）、不正作業を起こすこと。

現在はJWTなどのtoken認証でフロントエンドとバックエンドの通信を行うのがメインになってるし、フレームワーク（例；Lalavel）でcsrf token対策（バックエンドで発行したtokenがリクエストに存在しないなら動作しない）が存在することがあり、開発者が直接対策機能を実装することはない。

＊LavavelのCSRF対策
https://readouble.com/laravel/7.x/ja/csrf.html


## Origin（オリジン）そして、CORS（オリジン間リソース共有、Cross-Origin Resource Sharing）

＊Origin説明
https://developer.mozilla.org/ja/docs/Glossary/Origin

#### WEBコンテンツのURLが全て一致すること。

例えば、ローカル環境でlocalhost:3000を使うなら、localhost:3000/~がオリジンになる。
現在Webフレームワークにはオリジン制限（CORS）設定されてることがあり。

*CORS説明
https://developer.mozilla.org/ja/docs/Glossary/CORS

#### CORS (オリジン間リソース共有、 Cross-Origin Resource Sharing) は、 HTTP ヘッダーの転送で構成されるシステムであり、ブラウザーがオリジンをまたいだリクエストのレスポンスに、フロントエンドの JavaScript コードがアクセスすることをブロックするかどうかを決めるもの。

フロントでCORSを回避する方法は、URL proxyを利用。

## Feature-Policy WEBサイトにアクセス制限

*説明
https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Feature-Policy

Feature-Policyヘッダーで

## クリックジャッキング

＊説明
https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0

Webサイトにリンクやボタンなどの要素を隠蔽・偽装してクリックを誘うこと。（特にログインなどのユーザー情報）

対策方法は外部からiframeを設定できないようにすること。（HTTPヘッダー：X-Frame-Options DENY）

＊https://nulab.com/ja/blog/typetalk/measure-clickjacking/

## Referrer-Policy

サイトでリンクをクリックするとサイトの最後の位置のURLをreferrer headerで受け取る、このURLでtokenや利用者情報のようなデーターが含まれる可能性があるため、URL情報を他のサイトに露出する

"Referrer-Policy": "no-referrer"

## XSS (Cross-Site-Scripting)

＊説明~~？？？？？？~~
https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0

XSSはWebアプリケーション（javascript、phpなど）で動的をHTMLを作成することを利用して、
攻撃者がスクリプトを作成し、作成したスクリプトがWEB上で動作して被害を起こすこと。

### X-XSS-Protection

https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/X-XSS-Protection

攻撃コード入力を検知・無効化するためにはヘッダー設定する。上記のリンク参考。

＊現在はブラウザ基本設定になってることが多い。

### DOM-based XSS

DOM-based XSSは，ブラウザ上で動作するJavaScript上のコードに問題があるために発生します。

＊特に問題が発生するinnerHTML

### Persistent XSS

### Non-Persistent XSS

## SQL Injection

~~WEBセキュリティーの永遠の敵~~

画面の入力フォームや、リクエストにSQL文を入力して、レスポンスにデーターやユーザー情報を取得する方法。

WEBセキュリティーで一番警戒するべきの攻撃。



## セキュリティーヘッダースキャン

サイトのHTTPセキュリティーを検証できるサイト。

https://securityheaders.com/

## CSP Content-Security-Policy

＊CSPをサポートしてないブラウザもあり。

*説明
https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Content-Security-Policy


#### 参考
https://speakerdeck.com/hasegawayosuke/korekarafalsehurontoendosekiyuritei

https://gihyo.jp/dev/serial/01/javascript-security/0002

https://yohanpro.com/posts/front-end-security

https://m.mkexdev.net/427

http://www.byakuya-shobo.co.jp/hj/moh/sqlinjectioncheatsheet.html#InlineSamples