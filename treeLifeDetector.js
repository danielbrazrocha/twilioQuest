// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
const numValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
if  (numValue == 0) {
    console.log("alive")
} else {
    console.log('other')
}

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
//console.log(result);