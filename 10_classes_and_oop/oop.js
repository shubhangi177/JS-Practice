const user = {
    username: "Shub",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this)



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this // by default this is used
}

const userOne = new User("Shubh",222, true)
const userTwo = new User("light",111, false)
console.log(userOne.constructor);
//console.log(userTwo);

