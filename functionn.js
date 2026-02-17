function saymyname(){
    console.log("my name is Dhruv")
}
//saymyname()

// function addtwonumbers(num1, num2){
//    console.log( num1+num2)

function addtwonumbers(num1, num2){
// const result=num1+num2

return num1+num2
}

 const result=addtwonumbers(3,5)
 //console.log("result",result)

function loginusermessage(username="sam"){
    if(!username){
        console.log("please enter a username")
    }
  
    return `${username} just logged in `
}
 const message =loginusermessage()
 //console.log(message)

function calculatecartprice(...num1){//rest and spread operator
return num1
}

//console.log(calculatecartprice(200,400,500,1000))

const user={
    username:"dhruv",
    price:999
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is  ${anyobject.price
}`)
}
// handleobject(user)
handleobject({
    username:"saim",
    price:1999
})

const mynewarray=[200,400,500,1000] 

function returnsecondvalue(getarray){
    return(getarray[3])
}
console.log(returnsecondvalue(mynewarray))
