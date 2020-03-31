# Closure

### クロージャとは

Closure は関数系プログラミン（Scala、Haskell など）でよく使う物だ。
ただ Javascript だけ使う概念ではないので、理解しておく。

MDN Link
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures>

### Lexical Scoping

クロージャを理解するためには、Javascript のレキシカルスコープ（スコープ）の理解が必要。

スコープは簡単にいうと変数の有効範囲のことをいう。

宣言した変数を JS のどこまで参照できるのか、理解するとクロージャの理解に役に立つ。

## なぜクロージャを知るべきなのか

closure を使う理由を一言でいうと

#### 情報隠し、カプセル化

Java の private みたいな、外部から接近ができないようにする物は private を使う。

これを Javascript の場合、クロージャを活用して実現する。
