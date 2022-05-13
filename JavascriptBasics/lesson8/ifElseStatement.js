//JavaScript if...else Statement

//JavaScript if Statement
/* Syntax
    if (condition) {
        // the body of if
    }
*/

// check if the number is greater than 10

const number = 20;

// check if number is greater than 0
if (number > 10) {
  console.log("The number is greater than 10");
}


//JavaScript if...else statement

/* Syntax
    if (condition) {
        // block of code if condition is true
    } else {
    // block of code if condition is false
    }
*/

// check if the number is positive or negative/zero

const x = -2;

// check if number is greater than 0
if (x > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

//JavaScript if...else if statement
/* Syntax
    if (condition1) {
        // code block 1
    } else if (condition2){
        // code block 2
    } else {
        // code block 3
    }
*/


// check if the y is positive, negative or zero
const y = 0;
// check if y is greater than 0
if (y > 0) {
    console.log("y is positive");
}
// check if y is 0
else if (y == 0) {
  console.log("y is 0");
}
// if y is less than 0
else {
    console.log("y is negative");
}
