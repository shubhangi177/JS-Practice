let myName = "shubh  "
let mychannel = "sail "
console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubhu = function(){
    console.log("shubhu is present in all objects");
    
}
Array.prototype.greetShubh = function(){
    console.log(`Shubhu says hello`);
}
heroPower.shubhu()
myHeros.shubhu()
//heroPower.greetShubh() //does not work

// inheritance
const User = {
    name:"Shub",
    watchTime:33
}

const Youtube = {
    uploadVideo: true
}

const YtStudio = {
    isFunctional: false
}

const support ={
    solveQueries: "Team Assigned",
    supportAvailable: true,
    __proto__: YtStudio // used to inherit properties of the other object
}
Youtube.__proto__ = User

// modern syntax
Object.setPrototypeOf(support, Youtube)

let user2 = "ChaiAurCode   "
String.prototype.truelength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}
user2.truelength()
"shubhangi".truelength()
"lapitopi".truelength()