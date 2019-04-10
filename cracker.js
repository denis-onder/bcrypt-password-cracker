const fs = require('fs');
const bcrypt = require('bcrypt');

module.exports = function (hash) {
    fs.readFile('./passwords.json', 'utf8', (err, data) => {
        console.log('Reading file...');
        if (err) {
            throw err;
        } else {
            console.log('Working...');
            let passwords = JSON.parse(data);
            for (let i = 0; i < passwords.length; i++) {
                bcrypt.compare(passwords[i], hash, (err, match) => {
                    if (err) {
                        throw err;
                    } else {
                        if (match) {
                            console.log(`Match found: ${passwords[i]}`);
                        }
                    }
                })
            }
        };
    });
}