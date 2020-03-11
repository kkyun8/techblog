# Event

Event はブラウザで発生する処理、事故を意味する。

## Event Loop

ブラウザは single-thread で event-driven 式で動作する。

なので、ブラウザは一つのテストしか処理できない。しかしブラウザをみると多数のタスクが一緒に動くように見える。

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

### UI Event

### Keyboard Event

### Mouse Event

### Focus Event

### Form Event

### Clipboard Event

## Event Hander, Event Model

Event が発生した場合、動くロジックを Event Hander という。

Event Hander を登録する方法はいくつかあるか、DOM Level 2 の標準イベントモーデルをおすすめい

### DOM Level 2
