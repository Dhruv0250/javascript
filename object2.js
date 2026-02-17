const tinderuser=new Object()//singleton object

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false


//console.log(tinderuser)
const reagularuser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"dhruv",
            lastname:"sharma"
        }
    }
}
//console.log(reagularuser.fullname.userfullname.firstname)

const obj1={1: "a",2:"b"}
const obj2={3: "a",4:"b"}
const obj3={...obj1,...obj2}
//const obj3= Object.assign({},obj1,obj2) //merging two objects
//console.log(obj3)
//object destructuring
const users={
    Id :"1",
    email:"d@gmail.com"
}

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

//console.log(tinderuser.hasOwnProperty("isloggedin"))//to check if property exists in object 

const course ={
    coursename: "js in hindi",
    price:999,
    courseinstructor:"hitesh"
}

const{courseinstructor}=course

//console.log(courseinstructor)

// {
//     "name":"dhruv",

// }

