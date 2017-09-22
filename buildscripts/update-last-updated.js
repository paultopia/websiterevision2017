const fs = require("fs");
const moment = require('moment');

var now = moment().format("MMMM D, YYYY");

var pathToJSON = "../src/assets/json/basic.json";

var basic = JSON.parse(fs.readFileSync(pathToJSON, "utf8"));

basic.core.revdate = now;

var outJSON = JSON.stringify(basic, null, 2);

fs.writeFile(pathToJSON, outJSON, function(err){console.log(err ? err : "success!");});
