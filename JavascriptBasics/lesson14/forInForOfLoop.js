//JavaScript for...in loop

/* Syntax
    for (key in object) {
        // body of for...in
    }
*/

const person = { 
    name: 'Danut',
    age: 23
};
// using for...in
for ( let key in person ) {

    // display the properties
    console.log(`${key} => ${person[key]}`);
}


//JavaScript for...of loop

/* Syntax
    for (variable of iterable) {
    // body of for...of
    }
*/
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}
