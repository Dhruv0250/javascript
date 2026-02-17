const user={
    username:"Dhruv",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} welcome to  website`);
        console.log(this)
        
    }

}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()


console.log(this);

function Chaie() {
    let username="Dhruv"
    console.log(this.username)
}

// Chaie()
//this keyword does not work in functions like this


// const chai=function(){
//  let username="Dhruv"
//     console.log(this.username)
// }


const chai=()=>{
    let username = "Dhruv"
    console.log(this)
}
//chai()

// const  addtwo=(num1, num2)=>{
//     return num1+num2
// }

// const  addtwo=(num1, num2)=> num1+num2
// const  addtwo=(num1, num2)=> (num1+num2)
const  addtwo=(num1, num2)=> ({username:"Dhruv"})

//implicit return

console.log(addtwo(3,4))

const myarray=[1,3,4,5,6]


