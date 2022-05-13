//JavaScript Arrays

//Create an Array

/* Syntax
    const array_name = ["val1", "val2"];
*/


// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

//Access Elements of an Array
const myArray = ['1', '2', '3'];

// first element
console.log(myArray[0]);  // "1"

// last element
console.log(myArray[2]); // "3"

//Add an Element to an Array
//you cand use push() and unshift() to add elements to an array.

//push 
let list = ['shop', 'eat'];
// add an element at the end
list.push('exercise');
console.log(list); //  ['shop', 'eat', 'exercise']

//unshift() 
let list2 = ['shop', 'eat'];
//add an element at the start
list2.unshift('exercise'); 
console.log(list2); // ['exercise', 'shop', 'eat']

//add elements or change the elements by accessing the index value.
//add
let list3 = [ 'shop', 'eat'];
// this will add the new element 'exercise' at the 2 index
list3[2] = 'exercise';
console.log(list3); // ['shop', 'eat', 'exercise']
//edit
let list4 = [ 'shop', 'eat'];
// this will add the new element 'exercise' at the 2 index
list4[1] = 'exercise';
console.log(list4); // ['shop', 'exercise']

//remove elements
//pop()
let dailyActivities = ['work', 'eat', 'sleep'];
// remove the last element
dailyActivities.pop();
console.log(dailyActivities);['work', 'eat']

//shift()
let dailyActivities2 = ['work', 'eat', 'sleep'];
// remove the first element
dailyActivities2.shift();
console.log(dailyActivities2); // ['eat', 'sleep']

//Array length
const dailyActivities3 = ['work', 'eat', 'sleep'];
console.log(dailyActivities3.length); // 3