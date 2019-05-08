const latex = require('node-latex');
const fs = require('fs');
const Mustache = require('mustache');
const awards = require('../src/assets/json/awards.json');
const basic = require('../src/assets/json/basic.json');
const courses = require('../src/assets/json/courses.json');
const misc = require('../src/assets/json/misc.json');
const presentations = require('../src/assets/json/presentations.json');
const publications = require('../src/assets/json/publications.json');
const service = require('../src/assets/json/service.json');
const forthcoming = require('../src/assets/json/forthcoming.json');
const refereeing = require('../src/assets/json/refereeing.json');


const customTags = [ '<<', '>>' ];
Mustache.tags = customTags;

// Custom escaping code for LaTeX special chatacters.

var matches = new Map([["\\", "textbackslash"],
                       ["~","textasciitilde"],
	                     ["^","textasciicircum"]]);

function latexEscaper(text){
		return text.replace(/[\\~\^%&$#_{}]/g,
				                match => "\\" + (matches.get(match) || match));}

Mustache.escape = latexEscaper;

// clean up pubs

function yearsThenEntity(a, b){
    if(a.years > b.years) return -1;
    if(a.years < b.years) return 1;
    if(a.entity < b.entity) return -1;
    return 1;
}

function yearsThenRole(a, b){
    if(a.years > b.years) return -1;
    if(a.years < b.years) return 1;
    if(a.role < b.role) return -1;
    return 1;
}

function chronThenTitle(a, b){
    if(parseInt(a.year) > parseInt(b.year)) return -1;
    if(parseInt(a.year) < parseInt(b.year)) return 1;
    if(a.title < b.title) return -1;
    return 1;
}

function termsThenSchoolthenTitle(a, b){
    if(a.terms > b.terms) return -1;
    if(a.terms < b.terms) return 1;
    if(a.school > b.school) return -1;
    if(a.school < b.school) return 1;
    if(a.title < b.title) return -1;
    return 1;
}


function citeMaker(art){
    return art.issue ? art.volume + "(" + art.issue + "):" + art.firstpage + "-" + art.lastpage : art.volume + ":" + art.firstpage + "-" + art.lastpage;
}

function citeAdder(art){
    var a = JSON.parse(JSON.stringify(art));
    a.cite = citeMaker(a);
    return a;
}

// clean up presentations

const invited = presentations.invited.sort(chronThenTitle);
const conferences = presentations.conferences.sort(chronThenTitle);
const campus = presentations.campus.sort(chronThenTitle);


const leadteaching = courses.lead.sort(termsThenSchoolthenTitle);
const taships = courses.ta.sort(termsThenSchoolthenTitle);

const userv = service.filter(s => s.type === "university").sort(yearsThenEntity);
const dserv = service.filter(s => s.type === "disciplinary").sort(yearsThenRole);
const cserv = service.filter(s => s.type === "community").sort(yearsThenRole);

const books = publications.filter(p => p.type === "book").sort(chronThenTitle);
const peerreview = publications.filter(p => p.type === "peer review").sort(chronThenTitle).map(citeAdder);
const lawreview = publications.filter(p => p.type === "law review").sort(chronThenTitle).map(citeAdder);
const chapters = publications.filter(p => p.type === "chapter").sort(chronThenTitle);
const miscpubs = publications.filter(p => p.type === "misc").sort(chronThenTitle);
const refing = refereeing.sort();

const opts = {cmd: 'xelatex',
	            inputs: './cvtex',
              fonts: './cvtex'};

/*
  // CURRENT STUFF

const templatedata = {awards, basic, leadteaching, taships, misc, invited, conferences, campus, userv, dserv, cserv, books, peerreview, lawreview, chapters, miscpubs, forthcoming, refing};

const template = fs.readFileSync("./cvtex/private/experimental.tex", "utf8");

const input = Mustache.render(template, templatedata);

fs.writeFileSync("./cvtex/private/current_experimental_cv.tex", input)

const output = fs.createWriteStream('./cvtex/private/experimentalcv.pdf');


latex(input).pipe(output);

*/


// **** EXPERIMENT WITH BETTER FORMATTING OF SERVICE ****
const R = require('ramda');

// stuff at end is to make sure every element of refering is even-numbered.
const refing2 = R.splitEvery(2, refereeing.sort()).map(elem => elem.length == 1 ? R.append("", elem) : elem);

const td2 = {awards, basic, leadteaching, taships, misc, invited, conferences, campus, userv, dserv, cserv, books, peerreview, lawreview, chapters, miscpubs, forthcoming, refing2};

const t2 = fs.readFileSync("./cvtex/multicolumn_experiment.tex", "utf8");

const i2 = Mustache.render(t2, td2);

fs.writeFileSync("./cvtex//tex_for_multicol_experiment.tex", i2)


const o2 = fs.createWriteStream('./cvtex/multicol_experiment.pdf');

latex(i2).pipe(o2);


// *************
