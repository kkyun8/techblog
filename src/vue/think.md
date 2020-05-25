# Vue フロント設計に考えること

### 親子関係、Prop ハンドリング

TODO

### Vuexに設定する物は

優先順位としては共通で扱う物が一番

例：ユーザー情報、認証API、エラーメッセージなど

### VuexのmapGettersにただのstateをリターンするのは避けた方がいいでは

mapStateとmapGetterを混用しないようにする

#### API処理は必ずVuexを使うべきか

必ずStoreにいれる必要はないので、全体構成を考えて設計することが重要。

無理やりStoreにAPI処理を入れ、むしろ無駄な動きが起きることもあり。

### Mixin

公式 URL
<https://jp.vuejs.org/v2/guide/mixins.html>

Javascript の Mixin を Vue で使いやすくした物、

#### 活用

共通で使う Vue Instance を作成して置いて、Mixin する形でフロントを構成すると
グロバルミックスインで使うことができる。

TODO
