// functionality for pub tagging (WIP)

const getAllTags = pubs => pubs.map(p => p.tags).reduce((acc, cur) => acc.concat(curr), [])

const hasTag = tag => pub => pub.tags.includes(tag)

const filterForTag = (pubs, tag) => pubs.filter(hasTag(tag))

// I can't figure out a showy functional idiom for this one: 
function filterForMultipleTags(pubs, tags){
    var outPubs = pubs.slice()
    for (var tag of tags){
        outPubs = filterForTag(outpubs, tag)
    }
    return outPubs
}
