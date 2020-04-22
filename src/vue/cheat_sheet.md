# cheat sheet

## Prop

### 親子関係

追加予定 TODO

★ 親から子にオブジェクト、メソットを私たい時には
親には子（コンポーネント）に宣言しないといけない
子には上記に宣言した物を Prop に追加する

★ 子の prop を直接修正するのはできない、

★ メソットを実装するのは this.\$emit を使う。

## Javascript Event

#### コンポーネントから keydown イベント →→→ addEventListener を実装したい場合

```javascript
  created() {
    document.addEventListener("keydown", this.methodName);
  },
  // 必ずremove、をセット
  beforeDestroy () {
    document.removeEventListener("keydown", this.methodName);
  }
```
