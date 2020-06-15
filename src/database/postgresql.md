# Postgresql

### Jsonb /Json

一般的のデータ型の扱い方と違いがあるので要チェック。
詳しくは以下を参考
<https://www.postgresql.jp/document/9.4/html/functions-json.html>

<https://www.enterprisedb.com/ja/ja/nosql-technical-information>

```sql
insert into example (jsoncolumn1, jsoncolumn2)
values
('{"name":"test", "message":"こんにちは"}','["a", "b", 1]'),
('{  "author": "Snafkin", "title": "Postgres 入門", "comments": ["1get!", "2get!"] }',
 '["PostgreSQL", "JSON"]'
);
--json_build_object
insert into example (jsoncolumn1)
values (
json_build_object('name', 'test', 'count', 123, 'status', json_build_object('context', 'text', 'number', 1))
)
```

```sql
select * from example where jsoncolumn1 @> '{"name":"test"}'::jsonb;
--テキスト系
select * from example where jsoncolumn1->> 'name' = 'test';
```

```sql
update example
set (jsoncolumn1, jsoncolumn2) = ("{\"title\":\"カスタムSQL\"}"::jsonb, "[\"Hibernate\", \"Custom SQL\"]"::jsonb);
--json追加 json object名が一致してる物は更新される
update example set jsoncolumn1 = jsoncolumn1 || '{"name":"update","md_file":"test.md","address":{"postal_code":"123-1234"}}';
--一部削除
update example set jsoncolumn1 = jsoncolumn1 - 'md_file' where value @> '{"name":"update"}'
update example set jsoncolumn1 = jsoncolumn1 #- '{address,postal_code}' where value @> '{"aaa":"ddd"}
```

#### Json data select

Array

```sql
select JSON_EACH((data->>'array')::JSON) AS value from table;
```

取得例

```sql
select example::TEXT, example::JSON, example::JSON->>'name' -- json中参照
from table;
```

### INHERITS 承継

TODO:

<https://www.postgresql.jp/document/9.1/html/ddl-inherit.html>

### Group By 結合

#### 文字列　結合

```sql
select id string_agg(name, '/') AS name, string_agg(item->>'name', ', ') AS item_name from table group by id
```

```sql
select id string_agg(name, '/') AS name, string_agg(item->>'name', ', ') AS item_name from table group by id
```
