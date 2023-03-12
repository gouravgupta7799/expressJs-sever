let express = require("express");
let app = express();
let adminRoutes = require('./routes/admin.js');
let shopRoutes = require('./routes/shop.js');
let contactUs = require('./routes/contactUs.js');
let success = require('./routes/success.js')
let path = require('path');


let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);
app.use("/contactUs", contactUs);
app.use('/success', success);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
app.listen(4000);
