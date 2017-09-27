// Read Command List >> Into Array
const fs = require('fs');
const os = require('os');

const instructions = fs.readFileSync('inputFile', 'utf8').split(os.EOL);
const bins = [];
instructions.forEach((item)=> { bins.push(item.slice(0, 8))});

// STATE CHANGES For State Machine
// BINARY_OR_DECIMAL
let binaryOrDecimal = 'binary' || 'decimal';
// SET 
let stateSet = false;
// // SAVE
let stateSave = false;
// // MULTIPLY
let stateMultiply = false;
let multiplyTwice = false;

// REGISTRIES
// INITIALIZE PROGRAM COUNTER: 0
let programCounter = 0;
// MEMORY_ADDRESS_REGISTER
let memoryAddressRegister = [null, null, null, null];
// ACTIVE_REGISTER
let activeRegister = 0;
// MULTIPLY_REGISTER
const multiplyRegister = [NaN, NaN];

// FUNCTIONS
// EXECUTE_CPU_CYCLE
    // Program counter++ advances with each execution of the CPU cycle
// const CPU = () => {
//   for (let i = 0; i < bins.length; i++) {
//     setTimeout(() => { console.log(bins[i])}, i * 1000);
//   }
// };
// CPU();
// BINARY_STRING TO DECIMAL CONVERSION: parseInt(string, 2)

// INIT
const init = () => {
  memoryAddressRegister = [0, 0, 0, 0];
};
// SET 
const set = () => {
  stateSet = true;
  binaryOrDecimal = 'decimal';
};
// SAVE
const save = () => {
  stateSave = true;
  binaryOrDecimal = 'decimal';
};
// MULTIPLY
const multiply = () => {
  stateMultiply = true;
  binaryOrDecimal = 'decimal';
};
// PRINT 
const print = () => {
  // print the register value
  console.log('Stevie + Patrick are awesome!!! >>>', memoryAddressRegister[activeRegister]);
  done();
};

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
      console.log('binary string: ' + inputBinary);
      const inputDecimal = Number('0b' + inputBinary);
      console.log('converted decimal: ' + inputDecimal);
      if (stateSet && binaryOrDecimal === 'decimal') { 
        console.log(`Input Value: `, inputDecimal);
        activeRegister = inputDecimal;
        stateSet = false;
        console.log(`Active Register: `, activeRegister);
        binaryOrDecimal = 'binary';
      }
      else if (stateSave && binaryOrDecimal === 'decimal') { 
        memoryAddressRegister[activeRegister] = inputDecimal;
        stateSave = false;
        binaryOrDecimal = 'binary';
        console.log(`Integer: `,memoryAddressRegister[activeRegister]);
        console.log(`MAR: `,memoryAddressRegister);
      }
      else if (stateMultiply && binaryOrDecimal === 'decimal') { 
        if (multiplyTwice) {
          multiplyRegister[1] = memoryAddressRegister[inputDecimal];
          memoryAddressRegister[activeRegister] = (multiplyRegister[0] * multiplyRegister[1]);
          console.log('SECOND: ', multiplyRegister);
          stateMultiply = false;
          binaryOrDecimal = 'binary';
          console.log(`MAR: `,memoryAddressRegister);
        }
        multiplyRegister[0] = memoryAddressRegister[inputDecimal];
        console.log('FIRST: ', multiplyRegister);
        multiplyTwice = true;
      }
      else if(!isNaN(inputDecimal)) {
        // if (inputDecimal === 00000001) { init()};
        // console.log(memoryAddressRegister);
        // cpu.process(inputDecimal);
        switch (inputDecimal) {
          case 1:
            console.log(memoryAddressRegister);
             init();
             console.log(memoryAddressRegister);
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
            return console.log('you fucking numbnuts');
        }
        // console.log('you fucking numbnuts');
        // done();
      }
      programCounter++;
      console.log('PC: ', programCounter);
    });
  }
});

function done() {
  process.exit();
}