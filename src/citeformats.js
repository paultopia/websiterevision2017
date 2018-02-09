const italicizer = (text) => `<i>${text}</i>`;
const quoter = (text) => `"${text}"`;
const smallcapser = (text) => `<span style="font-variant:small-caps;">${text}</span>`;


function bbjournal(journal, bb) {
    return journal.split(/([!-#%-\x2A,-\/:;\x3F@\d\s])/)
        .map((word) => bb[word] || word)
        .join("");
}



function chicago(p, _){
	  var text = "";
	  var html = "";
	  const author = p.coauthor? p.coauthor.split(" ").reverse().join(", ") + ", and Paul Gowder." : "Gowder, Paul";
	  const numbers = p.volume ? `${p.volume}${p.issue ? `.${p.issue}` : ""} (${p.year})	:${p.firstpage}-${p.lastpage}` : "";
	  switch (p.type) {
	  case "peer review":
        // horrible fallthrough fuckery I may regret this oh god.  I don't want to duplicate journal code though!
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
		    console.log("no citation for this type");
	  }
	  return {text, html};
}


function bluebook (p, bb){
	  var text = "";
	  var html = "";
    const author = p.coauthor ? `${p.coauthor} & Paul Gowder` : "Paul Gowder";
    const journal = p.journal ? bbjournal(p.journal, bb) : "";
    switch (p.type) {
    case "law review":
    case "peer review":
        text = `${author}, ${p.title}, ${p.volume} ${journal} ${p.firstpage} (${p.year}).`;
        html = `${author}, ${italicizer(p.title)}, ${p.volume} ${smallcapser(journal)} ${p.firstpage} (${p.year}).`;
    case "book":
        text = `${author}, ${p.title}, (${p.year}).`;
        html = `${author}, ${italicizer(p.title)}, (${p.year}).`;
    case "chapter":
        text = `${author}, ${`${p.title}`}, in ${p.book} ${p.firstpage}-${p.lastpage} (${p.editor} ed. ${p.year}).`;
        html = `${author}, ${italicizer(`${p.title}`)}, in ${smallcapser(p.book)} ${p.firstpage}-${p.lastpage} (${p.editor} ed. ${p.year}).`;
    }
	  return {text, html};
}

const styleMapper = {chicago, bluebook}


const formatCite = (pub, citeStyle, textFormat, bb) => styleMapper[citeStyle](pub, bb)[textFormat]
// so citeStyle is, e.g., "bluebook" "chicago", textFormat is "text" or "html"
// bb is path to bluebook abbreviations, which gets passed in everywhere just because otherwise if I import it here there are stupid webpack dependency glitches like https://stackoverflow.com/a/35240717/4386239

module.exports.cite = formatCite;
