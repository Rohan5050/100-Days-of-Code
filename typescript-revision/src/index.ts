
// function to greet user with first name
function greet(name: string) {

    console.log("Hello" + " " + name);
}

greet("Rohan");

// function that calculates the sum of two functions
function sum(num1: number, num2: number): number {
    return num1 + num2
}

console.log(sum(55, 45))


//  Return true or false based on if a user is 18+
function isLegal(age: number) {
    if (age >= 18) {
        return true
    }

    else {
        return false
    }

}


console.log(isLegal(23))


// Create a function that takes another function as input, and runs it after 1 second.
function delayedcall(log: () => void): void {
    setTimeout(log, 1000)

}

function log() {
    console.log("Hi Rohan")
}

delayedcall(log)

// interfaces and types in typescript

interface User {
    firstName: string,
    phoneNumber: number,
    age: number
}

function isvaild(user: User) {
    if (user.age >= 18) {
        return true;

    }

    else {
        return false;
    }
}

const demouser: User = {
    firstName: "Rohan",
    phoneNumber: 807660310,
    age: 23
}

console.log(isvaild(demouser))
