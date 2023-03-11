let express = require("express");
let app = express();
let adminRoutes = require('./routes/admin.js');
let shopRoutes = require('./routes/shop.js');

let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1> page not foud </h1>')
})
app.listen(4000);
