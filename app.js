let express = require("express");
let app = express();
let adminRoutes = require('./routes/admin.js');
let shopRoutes = require('./routes/shop.js');
let contactUs = require('./routes/contactUs.js');
let success = require('./routes/success.js')
let path = require('path');
let controller = require('./controller/controller.js');


let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);
app.use("/contactUs", contactUs);
app.use('/success', success);

app.use(controller.errorPage);
app.listen(4000);
