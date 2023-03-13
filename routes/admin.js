let path = require('path');
let express = require('express');
let router = express.Router();

let controller = require('../controller/controller.js');

router.get("/add-product", controller.add_productFile);
router.post("/add-product",controller.add_product);


module.exports = router