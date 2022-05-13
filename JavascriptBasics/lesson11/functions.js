//Functions

/* Syntax
    function myFunction () {
        // function body   
    }
*/

// declaring a function named sayHello()
function sayHello () {
    console.log("Hello");  
}

// function call
sayHello();

//Function Parameters

function sayHi (name) {
    console.log(`Hi ${name}`);  
}
let name = "Danut";
sayHi(name);

//Function Return


// program to add two numbers
// declaring a function
function sum(a, b) {
    return a + b;
}
const result = sum(3,4);
// display the result
console.log("The sum is " + result);