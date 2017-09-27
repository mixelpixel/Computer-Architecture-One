import fs

# using fs, load the file I have called inputfile - DONE √

# ignore comments as you read the file - DONE √

# let program_counter = 0; - DONE √

# create an interval with `setInterval` - DONE √

# you choose interval - DONE √

# call function executeCore

# Read data from your file that is pointed to by PC
# PC 0 = line 0

# Implement a delay timeout with interrupt from MAR/DMA to notify CPU when memory is ready

# Copy the data pointed to by the PC into the IR

# IR commands:
- Initialize: set all four registers to 0
- SET: prepare to specify which register
- register 0 is set
- SAVE
- ...


> Because just parsing the input text is not your assignment, I share this with you so that you can do what I do:
```
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
      const inputDecimal = Number('0b' + inputBinary);
      //console.log('decimal' + inputDecimal);
      //console.log('binary' + inputBinary);
      if(!isNaN(inputDecimal)) {
        cpu.process(inputDecimal);
      }
    });
  }
});

function done() {
  process.exit();
}
```

> Your goal is to: put your CPU into a particular STATE based on which command it gets. in the next command, if your CPU is in that state, save the command.
