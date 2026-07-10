interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function isLegal(user: User){
    if(user.age > 18) return true;
    return false;
}

function greet(user: User){
    console.log("Hi there, " + user.firstName)
}

isLegal({
    firstName: "karthick",
    lastName: "raja",
    age: 20
})