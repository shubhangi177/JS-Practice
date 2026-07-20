const User = {
    _email: 'hsh@s.com',
    _password: "234",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const shub = Object.create(User)
console.log(shub.email);
