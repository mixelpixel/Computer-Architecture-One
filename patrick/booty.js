const process = require('process'); // <~~~ just making linter happy
const argValueTwo = process.argv[2];
const argValueThree = process.argv[3];

console.log(process.argv);

/* eslint no-console: 0 */
console.log(argValueTwo+ '\n');
console.log(argValueThree+ '\n');
