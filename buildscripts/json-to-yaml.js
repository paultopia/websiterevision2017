const fs = require("fs");
const yaml = require('js-yaml');

var pathToJSONS = "../src/assets/json/";
var pathToYAMLS = "../src/assets/yaml/";

var jsonfiles = fs.readdirSync(pathToJSONS).filter(x => x.slice(-5, x.length) == ".json");

function makeYAML(jsonfilename){
    var jsondata = JSON.parse(fs.readFileSync(pathToJSONS + jsonfilename, "utf8"));
    var yamlstring = yaml.safeDump(jsondata);
    return yamlstring;
}

for (jsonfilename of jsonfiles){
    var outfile = pathToYAMLS + jsonfilename.slice(0, -5) + ".yaml";
    var yamlstring = makeYAML(jsonfilename);
    fs.writeFile(outfile, yamlstring, function(err){console.log(err ? err : "");});
}


