let path = require('path');
let express = require("express");
const router = express.Router();

let controller = require('../controller/controller.js');

router.get("/", controller.contectUsFile);
router.post('/', controller.contectUs);

module.exports = router;
