import bbabbrv from './assets/json/bbtables.json';

const italicizer (text) => `<i>${text}</i>`;
const quoter (text) => `"${text}"`;
const smallcapser (text) => `<span style="font-variant:small-caps;">${text}</span>`;


function bbjournal(journal) {
    return journal.split(/([!-#%-\x2A,-\/:;\x3F@\d\s])/)
        .map((word) => bbabbrv[word] || word)
        .join("");
}



function chicago(p){
	var text = "";
	var html = "";
	const author = p.coauthor? p.coauthor.split(" ").reverse().join(", ") + ", and Paul Gowder." : "Gowder, Paul";
	const numbers = p.volume ? `${p.volume}${p.issue ? `.${p.issue}` : ""} (${p.year})	:${p.firstpage}-${p.lastpage}` : "";
	switch (p.type) {
	case "peer review":
		text = `${author}. ${quoter(`${p.title}.`)} ${p.journal} ${numbers}.`
		html = `${author}. ${quoter(`${p.title}.`)} ${italicizer(p.journal)} ${numbers}.`
		break;
	case "law review":
		text = `${author}. ${quoter(`${p.title}.`)} ${p.journal} ${numbers}.`
		html = `${author}. ${quoter(`${p.title}.`)} ${italicizer(p.journal)} ${numbers}.`
		break;
	case "book":
		text = `${author}. ${p.title}. ${p.address}: ${p.publisher}, ${p.year}.`;
		html = `${author}. ${italicizer(p.title)}. ${p.address}: ${p.publisher}, ${p.year}.`;
		break;
	case "chapter":
		text = `${author}. ${quoter(`${p.title}.`)} In ${p.book}, ed. ${p.editor}, ${p.firstpage}-${p.lastpage}. ${p.address}: ${p.publisher}, ${p.year}.`;
		html = `${author}. ${quoter(`${p.title}.`)} In ${italicizer(p.book)}, ed. ${p.editor}, ${p.firstpage}-${p.lastpage}. ${p.address}: ${p.publisher}, ${p.year}.`;
		break;
	default:
		console.log("no citation for this type")
	}
	return {text, html}
}


function bluebook (p){
	var text = "";
	var html = "";
	return {text, html}
	}

const styleMapper = {chicago, bluebook}


const formatCite = (pub, citeStyle, textFormat) => styleMapper[citeStyle](pub)[textFormat]
// so citeStyle is, e.g., "bluebook" "chicago", textFormat is "text" or "html"

module.exports.cite = formatcite;
