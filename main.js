const cracker = require('./cracker');
const readline = require('readline');

let hash;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please provide your hash: ', (input) => {
    hash = input;
    rl.close();
    cracker(hash);
})