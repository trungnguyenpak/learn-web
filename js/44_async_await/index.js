var fs = require('fs');

function readFilePromsie(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, {encoding: 'utf8'}, (err, data)=>{
            err != null? reject(err): resolve(data);
        });
    });
}

async function run(){
    var song1 = await readFilePromsie('./song1.txt');
    var song2 = await readFilePromsie('./song2.txt');
    //console.log(song1, song2);
    return (song1, song2);
}

run().then((values)=>{
    console.log(values);
});
