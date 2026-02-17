let a=300//block scope
var b=400//global scope

if(true){//scope
    let a=10
    const b= 20
   // console.log(a)
}

//console.log(a)


//nested scope

function one(){
    const username="dhruv"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
 two()

}
//one()

if(true){
    const username = "dhruv"
    if(username==="dhruv"){
    const website ="yt"   
    //console.log(username+website) 
}
// console.log(website)
}
//console.log(username)

//interesting
 console.log(addone(5));
function addone(num){
    return num + 1;

}


console.log(addtwo(5))
const addtwo=function (num){
    return num+2
}


