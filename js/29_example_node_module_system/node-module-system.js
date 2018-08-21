var Mouse = require('./mouse');
var Cat = require('./cat');

var jerry = new Mouse('Jerry', 'orange', 0.5);
var mickey = new Mouse('Mickey', 'black', 1);



var tom = new Cat('tom');
tom.eat(jerry);

console.log(tom);