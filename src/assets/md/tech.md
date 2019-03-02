In recent years, I've found myself moving increasingly into a data science/coding/tech orientation. It actually all started around late 2014/early 2015 when, in the process of writing my book, the [Rule of Law in the Real World](http://rulelaw.net/), I found myself in need of computationally intensive simulation---which I wrote in R, just because it's the language I learned in grad school (!!! not a good choice for something where performance matters). I fell a little in love, and have written thousands of lines of increasingly competent code since then.  

I spent six weeks (far too short) in the Summer 2, 2017 batch at [The Recurse Center](https://www.recurse.com/), a kind of (free!) writers retreat for programmers with the mission of making attendees "dramatically better at coding."  I highly recommend it---it was a wonderful experience, and I learned a ton.

Of course, I have [a Github](https://github.com/paultopia/); I also have [an experimental tech blog](http://paultopia.github.io).

I am also currently (as of Spring 2019) teaching a stats course for law students which starts with basic Python coding and, moving into the stats part, replaces the standard method of stats pedagogy via long proofs and equations with intuitive explanations, data visualization, and clear explanations. The lessons aren't all complete yet, but you can mostly follow along with the course at [sociologicalgobbledygook.com](https://sociologicalgobbledygook.com/).

Here's a collection of interests.

## Useful Stuff I've Made 

- [Plottyprint](https://github.com/paultopia/plottyprint) --- a small Python library to generate zero-effort black and white data visualizations for print use, without [chart junk](https://infovis-wiki.net/wiki/Chart_Junk). 

- [Dirtyclean](https://github.com/paultopia/dirtyclean), a Python micro-library to quickly clean strings for textmining, mostly devoted to getting rid of things like unicode punctuation).

- A collection of CLI apps to do small useful things to PDFs, including a java thing to [merge a folder of PDFs](https://github.com/paultopia/mergepdfs), which somehow got like 40+ github stars, but has an annoying JVM dependency and occasionally gets the order wrong.  So I [rewrote it in Swift](https://github.com/paultopia/pdfmerge), and Mac users should use that. I have another [thingey to add page numbers to PDFs](https://github.com/paultopia/batesstamp). 

- [Minitrue](https://github.com/paultopia/minitrue), a slightly paranoid monitoring tool that I wrote for the Trump inauguration which takes and tweets out hashes of public web documents and then monitors them to see if they change, just in case Trump decides to cook the government books. 

## Problems that interest me/Other Stuff I'm Working On

- NLP, especially on legal text. I think that there's a lot of hidden structure in legal texts that should make automated reading a lot more prevalent than it currently is. Also, very few lawyers also have formal stats training (thanks Stanford political science!) and coding knowledge, so this is kind of low-hanging fruit for me. I have several live non-public research projects along these lines, public stuff mostly consists in tools in various states of completion. For example... 

    - I have a working and usable but not feature complete [wrapper for the courtlistener api](https://github.com/paultopia/lawpy) to download cases, trying to get around to adding more legal APIs to it.
    
    - a Clojure [text-mining utility library](https://github.com/paultopia/tzara) that does things like tokenization but is in the middle of a delayed refactor (and hence is currently not working)... I may abandon it. 
    
    - I've started, but mostly put on the back-burner, [a chrome extension to extract data from web pages and do basic stats/visualizations](https://github.com/paultopia/browser-stats). Maybe I'll get back to this soon.

- Teaching tech and data to non-tech people (in addition to my Spring 2019 class, [Introduction to Quantitative and Computational Legal Reasoning](http://sociologicalgobbledygook.com/), A.K.A. Sociological Gobbledygook).

    - In the entire 2014-5 academic year I taught an experimental class called the Policy Lab, in which I gathered a group of law students and guest speakers from industry and the academy (including from really fancy places like IBM and big law firms) to examine the impact of internet-mediated cross-jurisdictional practice, machine learning, computational contracts, and other disruptive legal technologies on access to justice. 
    
    - In the course of doing so, I tried to teach some basic coding to a group of law students, you can see some not-clean notebooks I had them work through [here](https://github.com/paultopia/code-data-lawstudents/blob/master/hack-law.ipynb), and even showed them a basic kind of data science workflow with some key concepts [here](https://github.com/paultopia/code-data-lawstudents/blob/master/crunch-law.ipynb). 
        
    - I've tried to explain probability to law students, e.g. with a [micro-simulation of the Monty Hall problem](http://paul-gowder.com/montyhall/). 
    
- Afflicting the comfortable and comforting the afflicted. 
    
    - I'm also working on several game-theory informed proposals to build tools to solve public commitment problems in order to shift power between mass and elite. My article "[Transformative Legal Technology and the Rule of Law](https://utpjournals.press/doi/abs/10.3138/utlj.2017-0047)" in the University of Toronto Law Journal contains a sketch of an idea I have for a nonprofit platform to allow consumers to negotiate in the aggregate to demand changes to form contracts from the likes of cable companies, phone companies, etc.; if there's sufficient interest I may build it.


## Technologies of choice.

- Data crunching: Python, R when there's a fancy algorithm that isn't in Python yet.

- Datavis: ggplot, Seaborn, Bokeh, plotly.  You can see some of my favorite flashy visualizations on the [book site](http://rulelaw.net/).

- General programming: Python, Clojure/Script. I'm picking up Swift and may switch it to my daily driver soon.

- Editors: Spacemacs, vim for quick terminal edits, the magical iPython Notebook for quick-iteration working through problems and displaying [quick and dirty analyses](http://rulelaw.net/aba/).

- Web: Flask for the back-end, Reagent or raw JS for the front, Heroku for serving.  I'm mostly over CSS frameworks (except for Skeleton) thanks to the magic of Flexbox.

- Database: Postgres.

- Writing: Markdown + Pandoc all the things.

(And it really makes me anxious that the capitalization norms for all these names are different.)

## Secondary technologies

- I have way too much fun learning languages, so I've learned enough Java to be dangerous, and am [very slowly working my way through the Cryptopals challenges](https://github.com/paultopia/nounnounnoun) in it. But despite my functional programmer's disposition, I actually enjoy writing Java. The compiler is so friendly and helpful!

- I use Javascript a lot too, though I can't claim any particular wizardliness in it; this website is in [JS with Vue](https://github.com/paultopia/websiterevision2017). Which is total overkill for what's basically a static site (I even broke out a flux-style state management library!), but was interesting as a learning project.

- I've tried Haskell, honestly didn't really like it though (too much fighting the compiler).  I did manage to get a couple [very simple machine learning algorithms](https://github.com/paultopia/haskeml) implemented in it before getting tired.  I think I'll try Go next!
