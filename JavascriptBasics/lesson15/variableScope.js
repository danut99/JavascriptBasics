//JavaScript Variable Scope

// In JavaScript, a variable has two types of scope:
    // Global Scope
    // Local Scope

//Global Scope 

// program to print a text 
let a = "Javascript";
function say () {
    console.log(a);
}
say(); // Javascript


//The value of a global variable can be changed inside a function

let name = "Denis";
function changeName () {
    name = "Danut"
}
console.log(name); // Denis
changeName();
console.log(name); // Danut

//Local Scope 

let x = 2;
function sum() {
    let y = 3;
    console.log(x + y); // 5
}
sum();
console.log(x + y); // error: y is not defined
