function scan(arr) {
    let res = []
    arr.forEach( (element, idx) => {
        if (element == "contraband") {
        res.push(idx)
        }
    });
    return res
}