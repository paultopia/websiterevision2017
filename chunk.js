function chunkArray(arr){
    var out = []
    var temp = {"first": null, "second": null}
    const len = arr.length
    arr.forEach((value, index) => {
        if (!temp.second && !temp.first) {
            temp.first = value
        } else if (!temp.second && temp.first) {
            temp.second = value
        }

        if (temp.second || index === len - 1) {
            out.push(Object.assign({}, temp))
            temp = {"first": null, "second": null}
        }
    })
    return out
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7]))
