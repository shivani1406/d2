const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
rl.question('What do you listen to while doing that? ', (answer) => {
rl.question('Whats an activity you like doing? ', (answer) => {
rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
});
});
});
