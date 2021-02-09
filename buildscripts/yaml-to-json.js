// NOTE: this will not run with raw node call from directory, because makefile is a directory up and node executes in the directory it's called from.

const fs = require("fs");
const yaml = require('js-yaml');

var pathToJSONS = "src/assets/json/";
var pathToYAMLS = "src/assets/yaml/";


// uncomment next two lines to run directly from buildscripts directory
// var pathToJSONS = "../src/assets/json/";
// var pathToYAMLS = "../src/assets/yaml/";

var yamlfiles = fs.readdirSync(pathToYAMLS).filter(x => x.slice(-5, x.length) == ".yaml");

function makeJSON(yamlfilename){
    var yamldata = yaml.safeLoad(fs.readFileSync(pathToYAMLS + yamlfilename, "utf8"));
    var jsonstring = JSON.stringify(yamldata, null, 2);
    return jsonstring;
}

for (yamlfilename of yamlfiles){
    var outfile = pathToJSONS + yamlfilename.slice(0, -5) + ".json";
    var jsonstring = makeJSON(yamlfilename);
    fs.writeFile(outfile, jsonstring, function(err){console.log(err ? err : "");});
}

console.log("yaml converted to json")
