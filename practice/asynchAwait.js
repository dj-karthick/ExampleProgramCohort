const fs = require('fs');

function karthickReadFile(){
    return new promise(function(resolve){
        setTimeout(() => {
            resolve("Hi i am karthick.")
        }, 2000);
    })
}

async function main(){
    let value = karthickReadFile();
    console.log(value);
}