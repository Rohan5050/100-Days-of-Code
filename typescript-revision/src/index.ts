
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
    age: number,
    address: {
        city: string,
        country: string,
        pincode: number
    }
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
    age: 23,
    address: {
        city: "New Delhi",
        country: "India",
        pincode: 110060
    }
}

console.log(isvaild(demouser))
console.log(demouser.firstName)
console.log(demouser.address)


interface People {
    name: string,
    age: number,

    greet(): string

    greet2: () => string
}


let person: People = {
    name: "Rohan",
    age: 23,
    greet: () => {
        return "hi"
    },
    greet2: () => {
        return person.name
    }
}

let greeting = person.greet();

console.log(person.greet)
console.log(person.greet2)
console.log(greeting)

class Employee implements People {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(): string {
        return "hi" + this.name
    }

    greet2 = (): string => {
        return "hi" + this.name
    }

}

console.log(person.greet())
console.log(person.greet2())


// Types with Union and Intersection

interface Admin {
    name: string,
    permissions: string
}

interface Users {
    name: string,
    age: number
}

type UsersAndAdmin = Users & Admin; // Intersection


const humans: UsersAndAdmin = {
    name: "Rohan",
    permissions: "Access allowed",
    age: 23 // Does not give error under scope
}

interface Admin {
    name: string,
    permissions: string
}

interface Users {
    name: string,
    age: number
}

type UsersOrAdmin = Users | Admin; // Union

function greets(user: UsersOrAdmin) {
    console.log(user.name)
}


const human: UsersOrAdmin = {
    name: "Rohan",
    permissions: "Access allowed",
    age: 23
}

console.log(human.name)
// console.log(human.age)  (will give error due to out of scope in Union 
// As TypeScript only lets us access properties that exist in every member of a union, and age is missing from Admin) 


// Arrays in Ts

interface Peoples {
    firstName: string;
    lastName: string;
    age: number;
}

function filterpeople(people: Peoples[]) {
    return people.filter(x => x.age >= 18)
}

console.log(filterpeople([{
    firstName: "Rohan",
    lastName: "Vohra",
    age: 23

},
{
    firstName: "Rajeev",
    lastName: "Mehta",
    age: 15
},
{
    firstName: "Yash",
    lastName: "Kalra",
    age: 17
}]))


// sample code to find sum of age of two users

interface demoUsers {
    name: string,
    age: number
}


function sumofage(user1: demoUsers, user2: demoUsers) {
    return user1.age + user2.age;
}

const result = sumofage({
    name: "Rohan",
    age: 23,
},
    {
        name: "Rohit",
        age: 20
    })

console.log(result);


// Advance Typescript ( Pick, Partial, Readonly,  )

// Sample code to understand about typescript api

// Pick and Partial

interface demoUser {
    id: string,
    name: string,
    age: number,
    email: string,
    createdAt: string
}

/* Instead of redefining the arguements we will use Pick
interface updateUserprops {
    name: string,
    age: number,
    email: string
}*/

type updateUserprops = Pick<demoUser, "name" | "age" | "email">

type updateUserpropsOptional = Partial<updateUserprops>

function updateUser(updatedUserprops: updateUserpropsOptional) {
    console.log("Updated user details");
}

updateUser({
    name: "Rohan",
    age: 23,

})

// Readonly

interface config {
    readonly endpoint: string,
    readonly apikey: string
}

const config: Readonly<config> = {
    endpoint: "https://api/test",
    apikey: "apnvfnfvn"
}

//config.endpoint = "https:/api/test2" // Shows error Cannot assign to 'endpoint' because it is a read-only property

// Records and Maps

// ugly way of mantaining objects
interface AllUser {
    id: string;
    name: string;
}

type persons = { [key: string]: AllUser };

const user: persons = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// better way of mantaining objects by Records

interface AllUser {
    id: string;
    name: string;
}

type AllUsers = Record<string, AllUser>;

const users: AllUsers = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

// Maps ( Recommended way of managing objects)

interface allUser {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, allUser>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

// Exclude keyword in typescript

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK




/*
   Note :
   1) To Assign type to an Object we use Interfaces

   2) Interfaces can be implemented as classes

   3) types cannot be implemented as classes

   4) Union and Intersection are part of types

*/