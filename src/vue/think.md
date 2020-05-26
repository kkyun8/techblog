# Vue フロント設計に考えること

### 親子関係、Prop ハンドリング

TODO

### Vuex

#### Vuex に設定する物は

優先順位としては共通で扱う物が一番

例：ユーザー情報、認証 API、エラーメッセージなど

#### Vuex の mapGetters にただの state をリターンするのは避けた方がいいでは

mapState と mapGetter を混用しないようにする

#### API 処理は必ず Vuex を使うべきか

必ず Store にいれる必要はないので、全体構成を考えて設計することが重要。

無理やり Store に API 処理を入れ、むしろ無駄な動きが起きることもあり。

### Mixin

公式 URL
<https://jp.vuejs.org/v2/guide/mixins.html>

Javascript の Mixin を Vue で使いやすくした物、

#### 活用

共通で使う Vue Instance を作成して置いて、Mixin する形でフロントを構成すると
グロバルミックスインで使うことができる。

TODO
