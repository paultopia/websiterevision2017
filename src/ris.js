import {get} from "./utils.js";

const jsonRisMapping = {"abstract": "AB",
    "address": "CY",
    "book": "T2",
    "editor": "ED",
    "firstpage": "SP",
    "issue": "IS",
    "journal": "JF",
    "lastpage": "EP",
    "publink": "UR",
    "publisher": "PB",
    "title": "TI",
    "volume": "VL",
    "year": "PY"};

function compositor (pubitem, funcs) {

    return `${funcs.map((func) => func(pubitem)).join(",\n")}\nER  - \n`;

}

function basicR (entry) {

    return (pubitem) => `${jsonRisMapping[entry]}  - ${pubitem[entry]}`;

}

function typeMaker (pubitem) {

    const refType = {"law review": "JOUR",
        "peer review": "JOUR",
        "chapter": "CHAP",
        "book": "BOOK"}[pubitem.type];

    return `\nTY  - ${refType}`;

}

function authorFlip (author) {

    // Won't work with jr etc.
    var alist = author.split(" ")
    const lastname = alist.pop();

    return `AU  - ${lastname},${alist.join(",")}`;

}

function authorMaker (pubitem) {

    const moi = "AU  - Gowder,Paul";

    return pubitem.coauthor ? `${authorFlip(pubitem.coauthor)}\n${moi}` : moi;

}

function yearMaker (pubitem) {

    return `PY  - ${pubitem.year}///`;

}

const funcUp = (fields) => [
    typeMaker,
    authorMaker,
    yearMaker
].concat(fields.map(basicR));

function articleRis (pubitem) {

    const fields = [
            "title",
            "journal",
            "volume",
            "firstpage",
            "lastpage"
        ],
        baseLineFuncs = funcUp(fields),
        lineFuncs = pubitem.issue ? baseLineFuncs.concat([basicR("issue")]) : baseLineFuncs;

    return compositor(pubitem, lineFuncs);

}

function chapterRis (pubitem) {

    const fields = [
        "title",
        "editor",
        "book",
        "firstpage",
        "lastpage",
        "publisher",
        "address"
    ];

    return compositor(pubitem, funcUp(fields));

}

function bookRis (pubitem) {

    const fields = [
        "title",
        "address",
        "publisher"
    ];

    return compositor(pubitem, funcUp(fields));

}

function makeRis (pubs) {

    return pubs.map((pubitem) => get({"law review": articleRis,
      	"peer review": articleRis,
      	"chapter": chapterRis,
      	"book": bookRis}, pubitem.type, (_) => null)(pubitem)).filter((elem) => elem).
        join("\n");

}

export default makeRis;