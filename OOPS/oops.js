const user={
    username:"dhruv",
    loginCount:8,
    signedIn:true,


    getUserDetails: function(){
        console.log(`username:${this.username}`)
        console.log(this)
    }

}


// console.log(user.username)
//console.log(user.getUserDetails())


// const PromiseOne= new Promise()
// const data=new Date()

function User(username,loginCount,isLoggedIn){
this.username=username
this.loginCount=loginCount
isLoggedIn=isLoggedIn

this.greeting=function(){
    console.log(`welcome ${username}`)
}
//can make our own function or component

// return this;
//implicitly executed without using return 
}

const userOne=new User("Dhruv",8,true)
const userTwo= new User("another",11,false)

console.log(userOne)
