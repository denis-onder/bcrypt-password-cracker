const fs = require("fs");
const bcrypt = require("bcrypt");

module.exports = hash => {
  if (hash === "") {
    console.log("Invalid hash -> Empty string");
    return;
  }
  fs.readFile("./passwords.json", "utf8", (err, data) => {
    console.log("Reading file...");
    if (err) throw err;
    console.log("Working...");
    const passwords = JSON.parse(data);
    for (let i = 0; i < passwords.length; i++) {
      bcrypt.compare(passwords[i], hash, (err, match) => {
        if (err) throw err;
        if (match) {
          console.log(`Match found: ${passwords[i]}`);
        }
      });
    }
  });
};
