const fs = require('fs');

function karthickReadFile(){
    return new promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

//callback function
function onDone(data){
    console.log(data);
}

karthickReadFile().then(onDone);