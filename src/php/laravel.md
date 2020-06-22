# Laravel

### 公式ページ

<https://readouble.com/laravel/7.x/ja/session.html>

### Migrate

ロールバック後、migrate + seed

```bash
php artisan migrate:refresh --seed
```

全テーブル削除後、migrate + seed

```bash
php artisan migrate:fresh --seed
```

### Eloquent

### SQL

1 レコード first

```php
$user = DB::table('users')->where('name', 'John')->first();
```

1 データー value

```php
$email = DB::table('users')->where('name', 'John')->value('email');
```

配列にする

```php
$users = DB::table('users')
                ->where('votes', '<>', 100)
                ->get();
```

#### DBrow

Laravel 公式サイトをみると、生 sql を作成せず、ほどんどの sql 表現できる。

しかし、複雑な SQL が必要場合、DBrow メソッドを利用する
