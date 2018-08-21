// var i = 0;
// var interval = setInterval(function(){
//     ++i;
//     console.log(i);
//     if(i === 5){
//         clearInterval(interval);
//     }
// }, 1000);

//Wtire a function count from a to b;
//Return a promise
var readlineSync = require('readline-sync');

function countInterval(){
    var numberA = readlineSync.questionInt('Count from a: ');
    var numberB = readlineSync.questionInt('To b: ');

    return new Promise((resolve, reject)=>{
        console.log(numberA);
        var interval = setInterval(function(){
            ++numberA
            console.log(numberA);
            if(numberA === numberB){
                clearInterval(interval);
                resolve('Done');
            }
        }, 1000);
    });
}


countInterval().then((result)=>{
    console.log(result);
});