var readlineSync = require('readline-sync');

var languages = [];
var language = readlineSync.question("Which is your mother language? ");
languages.push(language);
console.log(language);