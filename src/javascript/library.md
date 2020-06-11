# library

## Axios

### Form Submit

```javascript
const form_name = new FormData();
form_name.append("name", this.name);
form_name.append("information", this.information);

const response = await axios
  .post("/create", form_name, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
  .then((response) => {
    console.log(response);
  });
```
