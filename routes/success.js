let controller = require('../controller/controller.js');
let express = require("express");
const router = express.Router();

router.get("/", controller.successFile);

module.exports = router;
