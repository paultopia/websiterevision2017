const fs = require("fs");
const yaml = require('js-yaml');

var pathToJSONS = "../src/assets/json/";
var pathToYAMLS = "../src/assets/yaml/";

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


