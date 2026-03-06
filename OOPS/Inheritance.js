class user{
    constructor(username){
        this.username=username
    }

    LogMe(){
   console.log(`Username is ${this.username}`)
    }
    
  
    }
      class teacher extends user{
        constructor(username,email,password) {
           super(username)           
            this.email=email,
            this.password=password
        }
}