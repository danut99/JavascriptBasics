// String Concatenation

//The + Operator
const string = 'Hello' + ' ' + 'World';
console.log(string);

//You can also use +=, where a += b is a shorthand for a = a + b.
let string1 = 'Hello';
string1 += ' ';
string1 += 'Danut';
console.log(string1);

//String#concat()

//Syntax of concat() ->     str.concat(str1, ..., strN)

let firstName = "Boca";
let lastName = "Danut";

// concatenating two strings
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // Hello, World!


// Template Literals

const name = 'Danut';
console.log(`Hello ${name}!`); // Hello Danut!