"use strict";

const fs = require('fs');
const os = require('os');

const MAR = [];
const text = fs.readFileSync('./inputfile', 'utf8'); // load all at once or read line by line; ignore pound sign start and comments, convert integer
const commands = text.split(os.EOL)

console.log(commands);

// let programCounter = 0

// create interval with setInterval
// use console logs to observer what happens

// with each cycle execute core: 4 steps
// read data from file (as pointed to by Program Counter - 0 equals line 0)
// copy what is in PC into MAR (memory address register - ignoring delay)

// copy data pointed to by PC into the instruction register

//  execute

// initializing zero's out all the registers, so the instruction register is "erased"


// save next is the number 4 and it is storing 8



// const fs = require('fs')
// const readline = require('readline')
//
// fs.readFile('./input.txt', 'utf8', (err, txt) => {
//   if (err) console.log(err)
//   // console.log(txt)
//   const instream = fs.createReadStream('input.txt')
//   const rl = readline.createInterface(instream)
//   rl.on('line', (line) => {
//     console.log(line + '!!');
//   })
// })
