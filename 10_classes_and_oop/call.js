function SetUsername(username){
    //complex Db calls
    this.username = username
    console.log('called');
    
}

function createuser(username, email, password){
    SetUsername.call(this,username)// passing 'this' will pass the execution context of createuser
    this.email = email
    this.password = password
}

const user1 = new createuser('shub', 'hshs@google.com', 2324)
console.log(user1);
