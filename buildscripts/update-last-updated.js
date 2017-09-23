// NOTE: this will not run with raw node call from directory, because makefile is a directory up and node executes in the directory it's called from.


const fs = require("fs");
const moment = require('moment');

var now = moment().format("MMMM D, YYYY");

var pathToJSON = "src/assets/json/basic.json";

// uncomment next line to run directly from buildscripts directory
//var pathToJSON = "../src/assets/json/basic.json";

var basic = JSON.parse(fs.readFileSync(pathToJSON, "utf8"));

basic.core.revdate = now;

var outJSON = JSON.stringify(basic, null, 2);

fs.writeFile(pathToJSON, outJSON, function(err){console.log(err ? err : "success!");});
