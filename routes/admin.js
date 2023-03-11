
let express = require('express');
let router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`<html>
  <body>
  <form action="/admin/add-product" method="POST">
  <input type="text" name="title">
  <input type="text" name="product-size">
  <button type="submit">click</button>
  </form>
  </body>
  </html>`);
})

router.post("/add-product", (req, res, next) => {
  console.log(req.body)
  res.redirect('/shop')
});


module.exports = router