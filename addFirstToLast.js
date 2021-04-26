function addFirstToLast(arr) {
    let firstAndLast = '';

    // Only execute this code if the array has items in it
    if (arr.length > 0) {
      // Change the line below! What should it be?
      firstAndLast = arr[0] + arr[arr.length-1];
    }

    return firstAndLast
}