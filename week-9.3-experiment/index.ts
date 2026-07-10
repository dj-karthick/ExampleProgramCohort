// function identify<T>(arg: T): T{
//     return arg
// }

// let outPut = identify<string>("Karthick");

// outPut.toUpperCase(); // We are able to solve the other problem also using Generics

function getFirstElement<T>(arr: T[]){
    return arr[0]
}

const el = getFirstElement<string>(["karthick", "raja", 1, 2]);
console.log(el.toUpperCase());