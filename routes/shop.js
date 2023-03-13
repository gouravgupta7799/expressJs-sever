let path = require('path');
let express = require("express");
const router = express.Router();
let controller = require('../controller/controller.js');

router.get("/", controller.shopFile);

module.exports = router;
