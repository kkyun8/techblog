# Laravel

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
