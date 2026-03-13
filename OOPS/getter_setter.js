class User {
    constructor (email,password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
     this._email=value
    }


    // get password(){
    //     return this._password.toUpperCase()
    // }
    get password(){
       return `${this._password} this is the password`
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}

const Dhruv = new User("d@gmail.com","abc")
// console.log(Dhruv.password)
console.log(Dhruv.email)


