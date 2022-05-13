// For Loop

//JavaScript for loop

/* Syntax
for (initialExpression; condition; updateExpression) {
    // for loop body
}

*/

// program to display text 5 times
const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`Hello`);
}

/*
n=5
Iteration	Variable	Condition: i <= n	                Action
1st	        i = 1       	true	            Hello is printed. i is increased to 2.
2nd	        i = 2           true                Hello is printed. i is increased to 3.
3rd	        i = 3       	true	            Hello is printed. i is increased to 4.
4nd	        i = 4           true                Hello is printed. i is increased to 5.
6nd	        i = 5           true                Hello is printed. i is increased to 6.
4nd	        i = 6           false               The loop is terminated.

*/


// program to display the sum of natural numbers
let sum = 0;
const numbers = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= numbers; i++) {
    sum += i;  // sum = sum + i
}
console.log('sum:', sum);

//JavaScript forEach()

/* Syntax
    array.forEach(function(currentValue, index, arr))

*/

let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

//You can use the arrow function with the forEach() method to write a program

const students2 = ['John', 'Sara', 'Jack'];
students2.forEach(element => {
  console.log(element);
});