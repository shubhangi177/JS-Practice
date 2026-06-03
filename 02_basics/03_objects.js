//singleton- literals se nahi banega, constructor se banta hai
//Object.create

//object literals 
const mySym = Symbol("key1")
const User = {
    name:"shubh",
    "full name":"shubh pandey",
    [mySym] : "mykey1",
    age:21,
    location:"Hyderabad",
    email: "shubh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(User);
console.log(User.lastLoginDays)
console.log(User["email"])
console.log(User.email)
console.log(User["full name"])
console.log(User[mySym])
// user.mySym looks for a property named "mySym" (not found)
// user[mySym] uses the Symbol stored in mySym as the key
// Symbol properties are accessed with [] because user.mySym searches for "mySym", not the Symbol key.
// Dot notation uses literal property names.
// Bracket notation evaluates the variable and uses its value as the key.

User.email = "shubh@google.com"
//Object.freeze(User.email)
User.email = "pan1@google.com"

User.greeting = function(){
    console.log("hellooo");
}

User.greeting2 = function(){
    console.log(`helloo ,${this.name}`)
}
console.log(User.greeting());
console.log(User.greeting2());
