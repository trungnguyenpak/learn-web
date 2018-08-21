var fs = require('fs');
var readlineSync = require('readline-sync');


function Student(name, age){
    this.name = name;
    this.age = age;
}
//--read file
var studentString = fs.readFileSync('./students.txt', {encoding: 'utf8'});
// console.log(studentString);
var students = [];
var jsonData = JSON.parse(studentString);
console.log(jsonData.length);

for (let i = 0; i < jsonData.length; i++) {
    students.push(jsonData[i]);
//    console.log(jsonData[i].name);
}
console.log(students);
var name = readlineSync.question('Ban ten gi? ');
var age = readlineSync.question('Hi' + name + ' bao nhieu tuoi? ');

var student = new Student(name, age);
students.push(student);


//stringify--convert to JSON string
var fileString = JSON.stringify(students);
// console.log(fileString);

//write to file : students.txt
fs.writeFileSync('./students.txt', fileString);
console.log('Save success');
 



