// Read Command List >> Into Array
const fs = require('fs');
const os = require('os');

const instructions = fs.readFileSync('inputFile', 'utf8').split(os.EOL);
const bins = [];
instructions.forEach((item)=> { bins.push(item.slice(0, 8))});

// STATE CHANGES For State Machine
// BINARY_OR_DECIMAL
const binaryOrDecimal = 'binary';
// SET 
// const stateSet = false;
// // SAVE
// const stateSave = false;
// // MULTIPLY
// const stateMultiply = false;

// REGISTRIES
// INITIALIZE PROGRAM COUNTER: 0
// const programCounter = 0;
// MEMORY_ADDRESS_REGISTER
const memoryAddressRegister = [];
// ACTIVE_REGISTER
const activeRegister = [];
// MULTIPLY_REGISTER
const multiplyRegister = [];

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
// SET 
// SAVE
// MULTIPLY
// PRINT 
const print = () => {
  // print the register value
  console.log(memoryAddressRegister[activeRegister[0]]);
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
    lines.forEach((line) => {
      // prep variable
      const inputBinary = line.split('#')[0].trim();
      console.log('binary: ' + inputBinary);
      const inputDecimal = Number('0b' + inputBinary);
      console.log('decimal: ' + inputDecimal);

      if(!isNaN(inputDecimal)) {
        // cpu.process(inputDecimal);
        // switch (inputDecimal) {
        //   case INIT ( if ...):
        //     console.log(`THIS IS PAYLOAD >>>>>>` + [...posts]);
        //     return 
        //   case SET:
        //     return 
        //   case SAVE:
        //     return 
        //   case MULTIPLY:
        //     return 
        //   case PRINT:
        //   return 
        //   default:
        //     return console.log('you fucking numbnuts');
        // }
        console.log('you fucking numbnuts');
        done();
      }
    });
  }
});

function done() {
  process.exit();
}