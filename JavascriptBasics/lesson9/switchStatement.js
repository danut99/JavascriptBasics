//JavaScript Switch Statement

/* Syntax
switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}

*/

// program using switch statement
let name = 'Danut';
switch (name) {

    case 'Denis':
        fullName = `${name} Bodea `;
        break;
    case 'Danut':
        fullName = `${name} Boca `;
        break;
    default:
        name = 'not found';
        break;
}
console.log(` ${fullName}`);