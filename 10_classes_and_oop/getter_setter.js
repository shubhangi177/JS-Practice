class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    //getter lagaya hai to setter bhi lagana hai
    set email(value){
        this._email = value
    }
    //only sets value
    get password(){
        return `${this._password}Shubh`
    }
    set password(value){
        this._password = value
    }
}

const shubh = new User("shu@gmail.com","123")
console.log(shubh.password);
console.log(shubh.email)
