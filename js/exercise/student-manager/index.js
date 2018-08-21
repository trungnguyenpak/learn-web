
var readlineSync = require('readline-sync');
var fs = require('fs');

const file_name = './data.json';
var students = [];

function showSaveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync(file_name, content);
}

function loadData() {
    var fileContent = fs.readFileSync(file_name, { encoding: 'utf8' });
    students = JSON.parse(fileContent);;
}


function showMenu() {
    console.log('1. Show all students');
    console.log('2. Add new student');
    console.log('3. Save & exit');
    console.log('----------------------')
}

function main() {
    loadData();
    do {
        showMenu();
        var option = readlineSync.question('> ');
        switch (option) {
            case '1':
                showAllStudents();
                break;
            case '2':
                showAddNewStudent();
                break;
            case '3':
                showSaveAndExit();
                break;
            default:
                console.log('Wrong option');
                break;
        }
    } while (option !== '3');
}

function showAllStudents() {
    if (students.length == 0) {
        return console.log('Hien tai chua co sv nao');
    }

    students.forEach(element => {
        console.log(element.name, element.age);        
    });
    console.log('------------------');
}

function showAddNewStudent() {
    var name = readlineSync.question('What is your name? ');
    var age = readlineSync.questionInt('How old are you? ');
    var student = {
        'name': name,
        'age': age,
    }

    students.push(student);
    console.log('Added');
    console.log('------------------');
}
main();