
// type Input = number | string;
type Input = number[] | string[];

function firstEl(arr: Input[]){
    return arr[0];
}


const value = firstEl(["karhtick", "raja", 1, 2, 3]); // You dont want to mixed bagup like this
console.log(value.toUpperCase());  // This one is problem here, cant able to use toUpperCase func because of typesafety