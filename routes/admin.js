let path = require('path');
let express = require('express');
let router = express.Router();
let rootdir = require('../rootFile/path');

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootdir,"views","add-products.html"))
})

router.post("/add-product", (req, res, next) => {
  console.log(req.body)
  res.redirect('/shop')
});


module.exports = router