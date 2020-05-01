# Array

javascript の Array（配列）Method は

・参考
<https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array>

## よく使うメソッド

### Push

配列の最後に値を追加

### Pop

配列の最後値を削除

```javascript
let arr = [a, b, c];
arr.pop();
console.log(arr); // [a, b]
```

### Reduce

配列の計算によく使う。accumulator、蓄積

```javascript
array.reduce((accumulator, currentValue, index, element) => {
  return result;
}, initialValue);

let array1 = [1, 2, 3];
const value = array1.reduce((a, b) => a + b);
console.log(array1); // 6
```

### Sort

ソート、Number と String のロジックが違うことに注意

```javascript
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Array [1, 100000, 21, 30, 4]

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => {
  return a - b;
});
console.log(array2);
//Array [1, 4, 21, 30, 100000]
```

### ForEach

メソッドは与えられた関数を、配列の各要素に対して一度ずつ実行。

＊for 文に似てるか違いがあるので注意

以下は配列の中のデーターを統一する処理

```javascript
const array1 = [
  { a: 1, b: 1 },
  { a: 2, b: 2 },
  { a: 3, b: 3 },
];
array1.forEach((element) => {
  element.b = 9;
});
//> Array [Object { a: 1, b: 9 }, Object { a: 2, b: 9 }, Object { a: 3, b: 9 }]
```

### Map

配列の各 function を実装（計算）した結果で、新しい配列をリターンする。

```javascript
const array1 = [1, 2, 3, 4];
const array2 = array1.map((a) => a * 2);
console.log(array2);
//> Array [2, 4, 6, 8]
```

### Filter

関数の結果が True になるものだけ取得する。

```javascript
const array1 = [1, 2, 3, 4];
const array2 = array1.filter((a) => a % 2 === 0);
console.log(array2);
//> Array [2, 4]
```

### Some

配列の全ての要素に対して条件を確認し、結果に True が存在する場合、処理を止めて、true をリターン
＊配列に要素がない場合、false になる

```javascript
var array = ["a", "b", "c"];
const result = array.some((e) => e === "b");
//result = true
```

### 活用

配列の中で特定の条件をまたすものをリターン
array の中で id が一致する要素だけ、unique にセットされる
＊一致しない場合、初期値のみリターン

```javascript
const unique = array.reduce((prev, now) => {
  if (!prev.some((e) => e.id === now.id)) {
    prev.push(now);
  }
  return prev;
}, []);
//}, []);←は初期値
```

重複除外

```javascript
let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]
```

## for in、for of、forEach の比較

### for in for of 比較

for in： Object の全てに対して for
for of： Symbol.iterator の専用

```javascript
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var value of iterable) {
  console.log(value); // 3, 5, 7
}
```

＊prototype なら Object.entries()を使う

### ForEach の特徴

forEach： Array ＊return 値を受け取れない

```javascript
array.forEach((e) => {
  return;
});
// undefined
```

＊途中に止める処理が必要なら、forEach はおすすめしない

### 速度比較

以下の URL をみると、意外に普通の for loop、while 文が一番早い…

<https://jsben.ch/BQhED>
