class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const shub = new User("shub")
console.log(shub.createId());
const shubhangi = new Teacher("shubhangi","shu@gmail.com")
console.log(shubhangi.createId());
