'use strict';
/* eslint no-console: 0 */
const fs = require('fs');
const os = require('os');

// load all at once or read line by line; ignore pound sign start and comments, convert integer
// const text = fs.readFileSync('./inputfile', 'utf8');
// const commands = text.split(os.EOL);
const commands = fs.readFileSync('./inputfile', 'utf8').split(os.EOL);
// const process = require('process'); // <~~~ just making linter happy
// const file = process.argv[2];
// const commands = fs.readFileSync(file, 'utf8').split(os.EOL);
const binaryCmds = [];
commands.forEach((x) => {
  binaryCmds.push(x.slice(0, 8));
});
binaryCmds.pop();

// console.log(binaryCmds);

const MAR = ['placeholder'];
let programCounter = 0;

// create interval with setInterval
// use console logs to observer what happens
// loop to establish condition for execution? per binaryCmds.length via programCounter?
for (let i = 0; i < binaryCmds.length; i++) {
  setTimeout(() => {
    console.log(`Program Counter before: ${programCounter}`);
    console.log(`Memory Address Register: ${MAR}`);
    console.log(`Executing binary command: ${binaryCmds[i]}`);
    programCounter++;
    console.log(`Program Counter after: ${programCounter}\n`);
  }, i * 500 );
}


// with each cycle execute core: 4 steps
// read data from file (as pointed to by Program Counter - 0 equals line 0)
// copy what is in PC into MAR (memory address register - ignoring delay)

// copy data pointed to by PC into the instruction register

//  execute

// initializing zero's out all the registers, so the instruction register is "erased"


// save next is the number 4 and it is storing 8
