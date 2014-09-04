var cowsay = require('cowsay'),
	greet = require('./src/js/greet.js');

console.log(cowsay.say({
    text : greet("to Node!"),
    e : "T T",
    T : ""
}));