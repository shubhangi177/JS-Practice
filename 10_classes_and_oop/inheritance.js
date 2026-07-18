class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username} added a new course`);
        
    }
}

const user1 = new Teacher("Shub", "shub@google.com","1234")
console.log(user1.logMe());
console.log(user1.addCourse());

console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);
