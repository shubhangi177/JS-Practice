//primative
// 7 types - string, Number, Boolean, null, undefined, Symbol, BigInt

//number 
const score = 12
const wicket = 12.5

let userEmail; // default value is undefined

const id1 =Symbol('122')
const id2 =Symbol('122')

console.log(id1 == id2); // Output: false(bcoz return value is different)

const bigNumber = 3783467867346764n

//  Reference(Non primitive)
//  Array, Objects, Functions
//  Return Type: Object
const colour =["pink", "violet"]
let myObj = {
    name : "shub",
    age: 33,
}

const myFunction = function(){
    console.log("helloo");
}

console.log(typeof myFunction);// Return type Object Function

//++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let teamName = "Dhol"
let coachName = teamName
coachName = "Soul"
console.log(teamName);
console.log(coachName);

let userOne = {
    email:"123@gmail.com",
    upi: "user@111"
}

let userTwo = userOne

userTwo.email = "shub@google.com"

console.log(userOne.email);
