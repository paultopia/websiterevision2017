const italicizer (text) => `*${text}*`;
const quoter (text) => `"${text}"`;

function chicago(p){
	var text = "";
	var markdown = "";
	const author = p.coauthor? p.coauthor.split(" ").reverse().join(", ") + ", and Paul Gowder." : "Gowder, Paul";
	const numbers = p.volume ? `${p.volume}${p.issue ? `.${p.issue}` : ""} (${p.year})	:${p.firstpage}-${p.lastpage}` : "";
	switch (p.type) {
	case "peer review":
		text = `${author}. ${quoter(`${p.title}.`)} ${p.journal} ${numbers}.`
		markdown = `${author}. ${quoter(`${p.title}.`)} ${italicizer(p.journal)} ${numbers}.`
		break;
	case "law review":
		text = `${author}. ${quoter(`${p.title}.`)} ${p.journal} ${numbers}.`
		markdown = `${author}. ${quoter(`${p.title}.`)} ${italicizer(p.journal)} ${numbers}.`
		break;
	case "book":
		text = `${author}. ${p.title}. ${p.address}: ${p.publisher}, ${p.year}.`;
		markdown = `${author}. ${italicizer(p.title)}. ${p.address}: ${p.publisher}, ${p.year}.`;
		break;
	case "chapter":
		text = `${author}. ${quoter(`${p.title}.`)} In ${p.book}, ed. ${p.editor}, ${p.firstpage}-${p.lastpage}. ${p.address}: ${p.publisher}, ${p.year}.`;
		markdown = `${author}. ${quoter(`${p.title}.`)} In ${italicizer(p.book)}, ed. ${p.editor}, ${p.firstpage}-${p.lastpage}. ${p.address}: ${p.publisher}, ${p.year}.`;
		break;
	default:
		console.log("no citation for this type")
	}
	return {text, markdown}
}


function bluebook (p){
	var text = "";
	var markdown = "";
	return {text, markdown}
	}

const styleMapper = {chicago, bluebook}


const formatCite = (pub, citeStyle, textFormat) => styleMapper[citeStyle](pub)[textFormat]
// so citeStyle is, e.g., "bluebook" "chicago", textFormat is "text" or "markdown"

module.exports.cite = formatcite;
