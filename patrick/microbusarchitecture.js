'use-strict';
/* eslint no-console: 0 */

// STATE CHANGES
let binaryOrDecimal = 'binary' || 'decimal';
let stateSet = false;
let stateSave = false;
let stateMultiply = false;
let multiplyTwice = false;

// REGISTERS
// INITIALIZE PROGRAM COUNTER: 0
// let programCounter = 0;
// MEMORY_ADDRESS_REGISTER
let memoryAddressRegister = [null, null, null, null];
// ACTIVE_REGISTER
let activeRegister = 0;
// MULTIPLY_REGISTER
const multiplyRegister = [NaN, NaN];

// FUNCTIONS
const init = () => {
  memoryAddressRegister = [0, 0, 0, 0];
};
const set = () => {
  stateSet = true;
  binaryOrDecimal = 'decimal';
};
const save = () => {
  stateSave = true;
  binaryOrDecimal = 'decimal';
};
const multiply = () => {
  stateMultiply = true;
  binaryOrDecimal = 'decimal';
};
const print = () => {
  console.log('Stevie + Patrick are awesome!!! >>>', memoryAddressRegister[activeRegister]);
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
    lines.pop();
    lines.forEach((line) => {
      // prep variable
      const inputBinary = line.split('#')[0].trim();
      // console.log('binary string: ' + inputBinary);
      const inputDecimal = Number('0b' + inputBinary);
      // console.log('converted decimal: ' + inputDecimal);
      if (stateSet && binaryOrDecimal === 'decimal') {
        // console.log(`Input Value: `, inputDecimal);
        activeRegister = inputDecimal;
        stateSet = false;
        // console.log(`Active Register: `, activeRegister);
        binaryOrDecimal = 'binary';
      }
      else if (stateSave && binaryOrDecimal === 'decimal') {
        memoryAddressRegister[activeRegister] = inputDecimal;
        stateSave = false;
        binaryOrDecimal = 'binary';
        // console.log(`Integer: `,memoryAddressRegister[activeRegister]);
        // console.log(`MAR: `,memoryAddressRegister);
      }
      else if (stateMultiply && binaryOrDecimal === 'decimal') {
        if (multiplyTwice) {
          multiplyRegister[1] = memoryAddressRegister[inputDecimal];
          memoryAddressRegister[activeRegister] = (multiplyRegister[0] * multiplyRegister[1]);
          // console.log('SECOND: ', multiplyRegister);
          stateMultiply = false;
          binaryOrDecimal = 'binary';
          // console.log(`MAR: `,memoryAddressRegister);
        }
        multiplyRegister[0] = memoryAddressRegister[inputDecimal];
        // console.log('FIRST: ', multiplyRegister);
        multiplyTwice = true;
      }
      else if(!isNaN(inputDecimal)) {
        // cpu.process(inputDecimal); // <~~~~~~~~~~~~~~~~~~~~~~ MIND === BLOWN
        switch (inputDecimal) {
        case 1:
          // console.log(memoryAddressRegister);
          init();
          // console.log(memoryAddressRegister);
          break;
        case 2:
          set();
          break;
        case 4:
          save();
          break;
        case 5:
          multiply();
          break;
        case 6:
          print();
          break;
        default:
          console.log('you fucking numbnuts');
        }
      }
      // programCounter++;
      // console.log('PC: ', programCounter);
    });
  }
});

function done() {
  process.exit();
}
