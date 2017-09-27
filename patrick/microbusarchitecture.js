'use strict';
/* eslint no-console: 0 */
const fs = require('fs');
const os = require('os');

// import commands into an array
const commands = fs.readFileSync('./inputfile', 'utf8').split(os.EOL);
// PROCESS.ARGV version
// const process = require('process'); // <~~~ just making linter happy
// const file = process.argv[2];
// const commands = fs.readFileSync(file, 'utf8').split(os.EOL);

const binaryCmds = [];
commands.forEach((item) => {
  binaryCmds.push(item.slice(0, 8));
});
binaryCmds.pop();

// console.log(binaryCmds);
// const unique = new Set(binaryCmds);
// console.log(unique);
// const sorted = Array.from(unique).sort();
// console.log(sorted);
/*
[
  '00000000', - register #0
  '00000001', - INIT initialize, register #1
  '00000010', - SET register, register #3
  '00000100', - SAVE next
  '00000101', - MUL into last
  '00000110', - PRINT_NUMERIC
  '00001000', - 8
  '00001001'  - 9
]
*/

// Initialized with leftover memory bits and pieces from prior use
let MAR = [ 3, 'banana muffin', 'MyLittlePony', 'mango' ];
// MAR [ 0, 0, 0, 0 ]
let IR = [];
let programCounter = 0;
let setState = false;
let decimalValue = null;
let activeRegister = null;
let multiplyRegister = null;

// create interval with setInterval
// use console logs to observer what happens
// loop to establish condition for execution? per binaryCmds.length via programCounter?
for (let i = 0; i < binaryCmds.length; i++) {
  // command: function Dictionary
  const hardware = {
    // INIT
    '00000001': () => MAR = [ 0, 0, 0, 0 ],
    // SET
    '00000010': () => {
      if (setState) {
        // use as binary decimalValue = ???
        setState = false;
      }
      MAR[parseInt(binaryCmds[i + 1], 2)] = 'HOLD';
      setState = true;
    },
    // SAVE
    '00000100': () => {},
    // MULTIPLY
    '00000101': () => {},
    // PRINT
    '00000110': () => {},
    binaryStrToDecimal: () => {},
    // TODO: binary > ascii
    // CONCATENATE strings
  };

  setTimeout(() => {
    console.log(`Program Counter before: ${programCounter}`);
    console.log(`Memory Address Register before: ${MAR}`);
    IR.push(binaryCmds[i]);
    console.log(`Pushing binary command: ${binaryCmds[i]} to IR: ${IR}`);

    if (hardware[binaryCmds[i]] === undefined) {
      console.log('Your MAMA Wears an afro with a chin strap!');
    } else {
      hardware[binaryCmds[i]]();
    }

    console.log(`Memory Address Register after: ${MAR}`);

    programCounter++;
    console.log(`Program Counter after: ${programCounter}`);
    IR.pop();
    console.log(`clearing IR: ${IR}\n`);
  }, i * 200 );
}

// with each cycle execute core: 4 steps
const executeCore = (bin) => {
  /* 4 steps per: https://youtu.be/82F93iymaaU?t=54m57s
  1) read memory (data from inputfile)
  1a) inputfile line number (or array index) pointed to by programCounter (init @ 0)
  2) COPY what is in the inputfile index into the MAR (Memory Address Register)
  3) push into instruction register
  4) execute instruction
  5) programCounter++
  6) repeat until dead

  e.g.
  Initialize IR 1: zero out all the registers (reg 0, 1, 2, 3)
  IR commands: initialize set all 4 regs to zero
  IR 2 - SET next number should wire up specific register for the next command of data.
  now the 00000000 means something different - it means register 0
  SAVE - save next command as a number
  8 gets saved in register 0
  */
};

// read data from file (as pointed to by Program Counter - 0 equals line 0)
// copy what is in PC into MAR (memory address register - ignoring delay)

// copy data pointed to by PC into the instruction register

//  execute

// initializing zero's out all the registers, so the instruction register is "erased"


// save next is the number 4 and it is storing 8
