# Event

Event はブラウザで発生する処理、事故を意味する。

## Event Loop

ブラウザは single-thread で event-driven 式で動作する。

なので、ブラウザは一つのタスクしか処理できない。しかしブラウザをみると多数のタスクが一緒に動くように見える。

多数のタスクを処理するため、Event Loop が必要。

その他の Javascript Engine↓

#### Call Stact

追加予定
<br><br>

#### Heap

追加予定
<br><br>

#### Event Queue(Task Queue)

追加予定
<br><br>

## Event の種類

詳しくは以下を参照<br>
<https://developer.mozilla.org/en-US/docs/Web/Events>

#### UI Event

#### Keyboard Event

#### Mouse Event

#### Focus Event

#### Form Event

#### Clipboard Event

## Event Hander, Event Model

Event が発生した場合、動くロジックを Event Hander という。

Event Hander を登録する方法はいくつかあるか、DOM Level 2 の標準イベントモーデルをおすすめい

### DOM Level 2

W3C が設計したイベントハンドリングモデル

#### addEventListener で EventListener を登録、

#### removeEventLustener で EventListener 削除

#### dispatchEvent で EventListener に Event を送信

#### イベント基本動作を防ぐ preventDefault

#### イベントバブリング Event Bubbling を防ぐ stopPropagation

選択した物の Event のみ動作させる

イベントバブリング例

```html
<!DOCTYPE >
<html onclick="onClick(this);">
  <head>
    <title>Event Bubbling</title>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  </head>
  <body onclick="onClick(this);">
    <main onclick="onClick(this);">
      <button onclick="onClick(this);">Click me!</button>
    </main>
    <script>
      function onClick(element, e) {
        e = window.event || e;
        console.log(element.nodeName);
      }
    </script>
  </body>
</html>
```

button -> main -> body -> html が出力される
イベントが発生したところから上位の要素に伝達される

#### イベントバブリングと反対方向に動くベントキャプチャ Event Capture

capture: true を宣言すれば動く

```javascript
var divs = document.querySelectorAll("div");
divs.forEach(function(div) {
  div.addEventListener("click", logEvent, {
    capture: true // default= false
  });
});
```
