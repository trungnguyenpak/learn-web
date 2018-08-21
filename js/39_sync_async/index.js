//Lesson:Sync and Async

var fs = require('fs');


//--------Sync-----------
// console.log('Start');
// var song1 = fs.readFileSync('./song1.txt', {encoding:'utf8'});
// console.log(song1);
// console.log('end'); 

//----------Async------------
console.log('Start');
var song2 = fs.readFile('./song2.txt', {encoding:'utf8'}, (err, data)=>{
    console.log(data);
});

var song1 = fs.readFile('./song1.txt', {encoding:'utf8'}, (err, data)=>{
    console.log(data);
});
console.log('End');