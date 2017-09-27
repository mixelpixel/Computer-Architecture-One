// Read Command List >> Into Array
const fs = require('fs');
const os = require('os');

const instructions = fs.readFileSync('inputFile', 'utf8').split(os.EOL);
const bins = []; 
instructions.forEach((item)=> { bins.push(item.slice(0, 8))});

console.log(bins);

// STATE CHANGES For State Machine
  // SET 
  // SAVE
  // MULTIPLY

// REGISTRIES
  // INITIALIZE PROGRAM COUNTER: 0
  // MEMORY_ADDRESS_REGISTER
  // ACTIVE_REGISTER
  // MULTIPLY_REGISTER

// FUNCTIONS
  // EXECUTE_CPU_CYCLE
      // Program counter++ advances with each execution of the CPU cycle
  // BINARY_STRING TO DECIMAL CONVERSION: parseInt(string, 2)
  // INIT
  // SET 
  // SAVE
  // MULTIPLY
  // PRINT 