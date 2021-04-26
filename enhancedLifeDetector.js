// The line of code below reads in the value of the argument passed in after
// the name of your script
const arg1Enter = process.argv[2];
// const arg2Enter = process.argv[3];

// This line of code converts the argument to a numeric value
const arg1 = Number(arg1Enter);

// This line of code converts the argument to a numeric value
// const arg2 = Number(arg2Enter);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
if  (arg1 == 0) {
    console.log("alive")
} 
if  (arg1 == 1) {
    console.log("flowering")
} 
if  (arg1 == 2) {
    console.log("shedding")
} 
if  (arg1 >= 3) {
    console.log("other")
} 
// else {
//     console.log('other')
// }

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
//console.log(result);