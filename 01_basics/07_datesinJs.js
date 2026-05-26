//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


console.log(typeof myDate); // Object

//let myCreatedDate = new Date(2024, 1, 25,3,55) //month starts from 0
//let myCreatedDate = new Date("2024-01-24") //month starts from 1 in YYYY-MM-DD format
let myCreatedDate = new Date("01-24-2024") //MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(myCreatedDate.getMonth()+1)
console.log(myCreatedDate.toLocaleString('default',{
    weekday : "long",
}))


