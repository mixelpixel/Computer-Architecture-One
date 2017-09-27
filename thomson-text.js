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
      console.log('decimal' + inputDecimal);
      console.log('binary' + inputBinary);
      if(!isNaN(inputDecimal)) {
        cpu.process(inputDecimal);
      }
    });
  }
});

function done() {
  process.exit();
}