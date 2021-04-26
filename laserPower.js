function calculatePower(arr) {
    const totalPower = arr
    .map(element => element * 2)
    .reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    }, 0);

    return totalPower
}