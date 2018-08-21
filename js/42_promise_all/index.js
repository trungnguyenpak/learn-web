var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, (err, data)=>{
            err != null ? reject(err) : resolve(data); 
        });
    });
}

// readFilePromise('./song1.txt')
//     .then((song1)=>{
//         console.log(song1);
//         return readFilePromise('./song2.txt');
//     })
//     .then((song2)=>{
//         console.log(song2);
//         return readFilePromise('./song3.txt');
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

Promise.all([
    readFilePromise('song1.txt'),
    readFilePromise('song2.txt'),
    readFilePromise('song3.txt')
]).then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
});