# Server

TODO:

### Proxy & Reverse Proxy

基本 Proxy プロキシと言うのは、forward proxy のことを示す。

プロキシサーバーとリバースプロキシサーバーの違いは、
受けたリクエストの伝達先が外部のサーバー(forword)の場合プロキシ。
内部のサーバー(reverse)の場合リバースプロキシ。

# Nginx

### Nginx とは？

トラフィックが多いウェブのため、Event-Driven の非同期 WebServerSoftWare。オープンソース

### Apache と比較した特徴

1.非同期 EventDriven 方式(Apache は Thead 方式)

2.Apache は１つのスレッドが１つのクライアントなので１：１の構成になり、メモリ、CPU の負荷がかかる。Nginx は Apache の問題を解決するために多数のリクエストを無理なく処理可能
3.Apache より少ないリソースでもっと早く動作。 4.小さいスレッドでクライアントのリクエストを処理できる

＊EventDriven とは？
スレッド方式は１つの Connecting に１つの Core、Thread を使うか、
EventDriven は「複数の Connection をまとめて、EventHandler で非同期方式で最初処理される物からロジックが動くこと。」なので、多数のクライアントが接続しても、サーバーが安定に動く。

### 基本的な書き方例

default.conf

```bash
worker_processes  5;  ## Default: 1

http {
  log_format   main '$remote_addr - $remote_user [$time_local]  $status '
    '"$request" $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log   logs/access.log  main;

  server { # php/fastcgi
    listen       80;
    server_name  domain1.com www.domain1.com;
    access_log   logs/domain1.access.log  main;
    root         html;

    location ~ \.php$ {
      fastcgi_pass   127.0.0.1:1025;
    }
  }
}
```

### \* Nginx のログ出力設定はサーバーの/etc/logrotate.d から設定

### Nginx の proxy_pass、upstream

Nginx プロキシを行うためには、proxy_pass を使う。

```bash
location /test/ {
  proxy_pass URL;
}
```

ここで注意点がある。

以下の二つ proxy_pass の設定の違いは URL の最後に「/」があるかないか、によってマッピングされる URL の差がある。

もし example.com/name/foo にリクエストを受けたら、

```bash
location /name/ {
    # /nameが削除されたhttp://127.0.0.1/fooへ
    proxy_pass http://127.0.0.1/;
}

location /name/ {
    # そのままhttp://127.0.0.1/name/fooへ
    proxy_pass http://127.0.0.1;
}
```

以上のような動きになる。

さらに backup サーバーを運用するためには upstream に該当サーバーを設定する

```bash
upstream backend {
    server web1.example.com:80;
    server web2.example.com:80;
    server web3.example.com:80;
}

server {
    listen       0.0.0.0:80;
    server_name  localhost;

    location / {
        proxy_pass http://backend;
    }
}
```

### Nginx の gRPC-Gateway Proxy

＊参照
http://mogile.web.fc2.com/nginx/http/ngx_http_grpc_module.html#grpc_read_timeout

Nginx に grpc proxy をサポートする機能があるので、簡単にプロキシサーバーを作成できる。

```bash
server {
    listen 9000 http2;

    location / {
        grpc_pass 127.0.0.1:8000;
        grpc_pass 127.0.0.1:9000 backup;
    }
}
```
