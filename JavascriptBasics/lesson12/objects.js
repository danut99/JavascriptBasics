// Javascript Objects

/* Syntax
    const object_name = {
        key1: value1,
        key2: value2
    }

*/

// object creation
const person = { 
    name: 'Danut',
    age: 23
};
console.log(typeof person); // object

//or 
const person2 = { name: 'Denis', age: 22 };


//Accessing Object Properties

//You can access the value of a property by using its key.

//1. Using dot Notation
// syntax:  objectName.key
const person3 = { 
    name: 'Danut',
    age: 23
};
// accessing property
console.log(person3.name); // Danut


//2. Using bracket Notation
// syntax:  objectName["propertyName"]
const person4 = { 
    name: 'Denis', 
    age: 22, 
};

// accessing property
console.log(person4["age"]); // 22