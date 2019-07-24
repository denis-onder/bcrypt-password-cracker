const cracker = require("./cracker");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please provide your hash: ", input => {
  rl.close();
  cracker(input);
});
