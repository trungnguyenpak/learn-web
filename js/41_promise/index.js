//Promise
// var fs = require('promise-fs');
// const file_name_path = './song1.txt';
// fs.readFile(file_name_path, {encoding:'utf8'})
//     .then(onSuccess).catch(onFail);


// function onSuccess(data){
//     console.log(data);
// }

// function onFail(err){
//     console.log(err);
// }
var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding:'utf8'}, function(err, data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

readFilePromise('./song1.txt')
    .then((song1) => {
        console.log(song1);
    }).catch((err) => {
        console.log(err);
    });