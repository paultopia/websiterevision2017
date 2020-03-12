
// shamelessly stolen from the top-voted answer to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// helper function for stupid hack below
function divisible(j, arrlen){
    if (j == 0){
        return false
    }
    return j % arrlen === 0 
}

function mushInLittleArray(arrs, size){
    var correctSize = arrs[arrs.length - 1].length == size;
    if (correctSize) {
        return arrs;
    }
    var last = arrs.pop();
    var len = last.length;
    var j = 0;
    var div = false;
    var arrlen = arrs.length;
    for (var i = 0; i < len; i++) {
        div = divisible(j, arrlen);
        // this is to deal with pathological case where leftover group is larger than number of other groups.  it feels really stupid, basically if i is divisible by number of groups it means we ran out of groups, so reset to start.
        if (div) {
            j = 0;
        }
        arrs[j].push(last[i]);
        j++;
    }
    return arrs;
}

// also shamelessly stolen and tweaked from top-voted answer to https://stackoverflow.com/questions/11345296/partitioning-in-javascript
// I don't like javascript, ok? 
function splitArray(arr, size, smallLast) {
    var out = [];
    for (var i = 0; i < arr.length; i += size) {
        out[out.length] = arr.slice(i, i + size);
    }
    if (smallLast) {
        return out;
    }
    return mushInLittleArray(out, size);
}

function clearNode(domNode) {
    while(domNode.firstChild){
        domNode.removeChild(domNode.firstChild)
    }
}

function displayOutput(groups){
    var output = document.getElementById("output");
    clearNode(output)
    var graf = null;
    var text = null;
    for (var i = 0; i < groups.length; i++) {
        graf = document.createElement("p");
        text = document.createTextNode(groups[i].join(", "));
        graf.appendChild(text);
        output.appendChild(graf)
    }
}

function randomizeStudents(){
    var students = document.getElementById("students").value.split("\n");
    var numStuds = document.getElementById("numStuds").value;
    var overflowResponse = document.getElementById("overflow").value;
    var overflow = true;
    if (overflowResponse === "larger") {
        overflow = false;
    }
    var shuffled = shuffleArray(students);
    var split = splitArray(shuffled, parseInt(numStuds), overflow);
    displayOutput(split)
}

function addEventListener(){
    document.getElementById("gobutton").addEventListener("click", randomizeStudents);
}

window.onload = addEventListener;
