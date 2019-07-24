import { get } from "./utils.js";



function compositor(pubitem, funcs){
	return funcs.map(function(func){
		return func(pubitem);
	}).join(",\n") + "\nER  - \n";
}



function typeMaker(pubitem){
	var refType = {"law review": "JOUR", "peer review": "JOUR", 
		"chapter": "CHAP", "book": "BOOK"}[pubitem.type];
	return "\nTY  - " + refType;
}

function authorMaker(pubitem){
 const moi = "Gowder,Paul"
 // COAUTHOR
}

function articleRis(pubitem){
  const baseLineFuncs = [typeMaker]
  const lineFuncs = pubitem.issue ? baseLineFuncs.concat([issueMaker]) : baseLineFuncs
  return compositor(pubitem, lineFuncs)
}

function chapterRis(pubitem){
  const lineFuncs = [typeMaker]
  return compositor(pubitem, lineFuncs)
}

function bookRis(pubitem){
  const lineFuncs = [typeMaker]
  return compositor(pubitem, lineFuncs)
}

function makeRis(pubs){
	return pubs.map(function(pubitem){
      return get({"law review": articleRis,
      	"peer review": articleRis,
      	"chapter": chapterRis,
      	"book": bookRis}, pubitem.type, _=>null)(pubitem);
	}).filter(elem=>elem).join("\n");
}

export default makeRis;
pubitem

/*

function articleBT(pubitem){
// if there's no issue number I don't want to have to handle a blank line or null value upstream
	return pubitem.issue ?
		compositor(pubitem, [nameMaker, authorMaker, basicB("title"), 
			basicB("journal"), basicB("volume"), numberMaker, 
			pagesMaker, basicB("year")]) :
		compositor(pubitem, [nameMaker, authorMaker, basicB("title"), 
			basicB("journal"), basicB("volume"), pagesMaker, basicB("year")]);
}

function chapterBT(pubitem){
	return compositor(pubitem, [nameMaker, authorMaker, basicB("title"),
		                          editorMaker, collectionTitleMaker, pagesMaker,
                              basicB("address"), basicB("publisher"),
                              basicB("year")]);
}

function bookBT(pubitem){
	  return compositor(pubitem, [nameMaker, authorMaker, basicB("title"),
                                basicB("address"), basicB("publisher"),
                                basicB("year")]);
}

function compositor(pubitem, funcs){
	return funcs.map(function(func){
		return func(pubitem);
	}).join(",\n") + "\n}";
}

function basicB(entry){
    //	return function(pubitem){return entry + "={" + pubitem[entry] + "}";};
    return pubitem => entry + "={" + pubitem[entry] + "}";
}

	var nom1 = pubitem.coauthor ? pubitem.coauthor.split(" ")[1]
		.toLowerCase() + "gowder" : "gowder"; 
	var nom2 = pubitem.title.split(" ").map(function(word){return word[0];})
		.join("").toLowerCase();

*/