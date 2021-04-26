function scan(arr) {
    let cont = 0
    arr.forEach( (element) => {
        if (element == "contraband") {
        cont++
        }
    });
    return cont
}