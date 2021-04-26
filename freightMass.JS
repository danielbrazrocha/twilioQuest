function calculateMass(arr) {
    let res =arr.reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue.length
    }, 0)

    return res
}
