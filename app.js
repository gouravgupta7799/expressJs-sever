let express = require("express");
let app = express();

app.use((req, res, next) => {
  console.log("hello, this is middleware fisrt")
  next()
})

// app.use((req, res, next) => {
//   console.log("this is middleware secound")
//   res.send("<h1>hello</h1>")
//   next()
// })
app.use((req, res, next) => {
  console.log("this is middleware secound")
  res.send({ "key1": 2 })
})

app.listen(4000);
