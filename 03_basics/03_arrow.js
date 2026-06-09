const user = {
    username : "shubh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);//empty{} but in browser it refers to window(global object)

// function chai(){
//     let username = "shubh"
//     console.log(this.username);//undefined
    
// }
// chai()

// const chai = function(){
//     let username ="shubh"
//     console.log(this.username);//undefined
// }
// chai()

const chai = () =>{
    let username ="shubh"
    console.log(this.username);//undefined
}
//chai()

// const addtwo = (num1, num2) =>{
//     return num1+num2;
// }
//console.log(addtwo(1,2));

//const addtwo = (num1, num2) => num1+num2; // implicit return
//const addtwo = (num1, num2) => (num1+num2); // implicit return
const addtwo = (nums1, num2) =>({username:"hitesh"})
console.log(addtwo(1,2))
