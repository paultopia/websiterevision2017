function copyText(text){
    const copybox = document.createElement('textarea');
    copybox.value = text;
    console.log("copying: " + text);
    copybox.style.display = "none";
    document.body.appendChild(copybox);
    copybox.focus();
    copybox.setSelectionRange(0, copybox.value.length);
    document.execCommand('copy');
    document.body.removeChild(copybox);
}

module.exports.copy = copyText;

// NOT WORKING.  I should just try https://github.com/Inndy/vue-clipboard2 
