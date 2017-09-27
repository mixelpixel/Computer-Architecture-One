// Read Command List >> Into Array
const fs = require('fs');
const os = require('os');

const instructions = fs.readFileSync('inputFile', 'utf8').split(os.EOL);
const bins = []; 
instructions.forEach((item)=> { bins.push(item.slice(0, 8))});

// STATE CHANGES For State Machine
// SET 
const stateSet = false;
// SAVE
const stateSave = false;
// MULTIPLY
const stateMultiply = false;

// REGISTRIES
// INITIALIZE PROGRAM COUNTER: 0
const programCounter = 0;
// MEMORY_ADDRESS_REGISTER
const memoryAddressRegister = [];
// ACTIVE_REGISTER
const activateRegister = [];
// MULTIPLY_REGISTER
const multiplyRegister = [];

// FUNCTIONS
  // EXECUTE_CPU_CYCLE
      // Program counter++ advances with each execution of the CPU cycle
  // BINARY_STRING TO DECIMAL CONVERSION: parseInt(string, 2)
  // INIT
  // SET 
  // SAVE
  // MULTIPLY
  // PRINT 