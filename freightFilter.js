function scanAndFilter(arr, str) {
    let res = []
    arr.forEach( (element, idx) => {
        if (element != str) {
        res.push(element)
        }
    });
    return res
}