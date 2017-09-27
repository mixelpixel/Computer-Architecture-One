'use-strict';
/* eslint no-console: 0 */

// STATE CHANGES For State Machine
// BINARY_OR_DECIMAL
let binaryOrDecimal = 'binary' || 'decimal'; // <~~~ defaults to binary, see: https://stackoverflow.com/q/2100758/5225057
// // SET
// const stateSet = false;
// // SAVE
// const stateSave = false;
// MULTIPLY
const stateMultiply = false;

// REGISTRIES
// // INITIALIZE PROGRAM COUNTER: 0
// const programCounter = 0;
// MEMORY_ADDRESS_REGISTER
let memoryAddressRegister = [null, null, null, null];
// ACTIVE_REGISTER
const activeRegister = [];
// MULTIPLY_REGISTER
const multiplyRegister = [];

// FUNCTIONS
// INIT
const init = () => {
  binaryOrDecimal = 'binary';
  memoryAddressRegister = [0, 0, 0, 0];
};
// SET
const set = () => {
  binaryOrDecimal = 'binary';
  // SET the MAR index in activeRegister
  binaryOrDecimal = 'decimal';
};
// SAVE
const save = () => {
  binaryOrDecimal = 'binary';
  // SAVE the decimal value at MAR index per activeRegister
  binaryOrDecimal = 'decimal';
};
// MULTIPLY
const multiply = () => {
  // MULTIPLY into the activeRegster the values at the next two MAR indexes
  // programCounter +2 to set back to binary.
};
// PRINT
const print = () => {
  // print the activeRegister value
  console.log('whatever we want');
  //console.log(memoryAddressRegister[activeRegister[0]]);
  done();
};

const process = require('process'); // <~~~ Not needed - just making linter happy
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {
  if (text === 'quit\n') {
    done();
  }
  if(text.indexOf('\n')) {
    const lines = text.split('\n');
    lines.forEach((line) => {
      // prep variable
      const inputBinary = line.split('#')[0].trim();
      console.log('binary string: ' + inputBinary);
      const inputDecimal = Number('0b' + inputBinary);
      console.log('converted to decimal: ' + inputDecimal);
      // console.log(process.argv);
      console.log(process.stdin.on);

      if(!isNaN(inputDecimal)) {
        // cpu.process(inputDecimal); // <~~~~ MIND === BLOWN
        switch (inputDecimal) {
        case 1:
          console.log(memoryAddressRegister);
          init();
          console.log(memoryAddressRegister);
          break;
        case 2:
          set();
          console.log(binaryOrDecimal);
          break;
        case 4:
          save();
          console.log(binaryOrDecimal);
          break;
        case 5:
          multiply();
          console.log(binaryOrDecimal);
          break;
        case 6:
          print(); // <~~~ invokes done()
          break;
        default:
          // If multiply, binaryOrDecimal = decimal x2
          binaryOrDecimal = 'binary';
          return console.log('you fucking numbnuts');
        }
      }
    });
  }
});

function done() {
  process.exit();
}
