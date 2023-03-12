let path = require('path');
let express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"))
})

router.post('/', (req, res, next) => {
  res.redirect('/success');
})
module.exports = router;
