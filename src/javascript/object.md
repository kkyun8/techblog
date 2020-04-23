# Object

### Object 宣言例

```javascript
const object = {
  id: 1,
  name: "name",
  array: [],
  object: {
    test: "test"
  }
};
```

```javascript
const object = new Object();

object.id = 1;
object.name = "name";
object.array = [];
object.test = new Object();
object.test.a = 1;
object.test.b = "b";
```

### Object の key と value 取得

```javascript
for (const [key, value] of Object.entries(object)) {
  //key value
}
```
