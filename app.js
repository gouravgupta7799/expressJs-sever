let express = require("express");
let app = express();
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.use("/add-product",(req, res, next) => {
  // console.log("this is middleware secound");
  res.send(`<html>
  <body>
  <form action="/product" method="POST">
  <input type="text" name="title">
  <input type="text" name="product-size">
  <button type="submit">click</button>
  </form>
  </body>
  </html>`);
})

app.use("/product", (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
});

app.use("/",(req, res, next) => {
  // console.log("hello, this is middleware fisrt");
  res.send("<h1>hello, this is middleware first</h1>");
})

app.listen(4000);
