 class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
encryptedPassword(){
    return `${this.password}abc`
}
changeUsername(){
    return `${this.username.toUpperCase()}`
}

 }

 const chai =new User("Dhruv","ds00@gmail.com","123");

 console.log(chai.encryptedPassword())
 console.log(chai.changeUsername())