// let myname="dhruv      "
// let secondname="sharma"

// console.log(myname.length)

// let myheroes=["spiderman","superman"]

// let hereopowers={
//     spiderman:"web",
//     superman:"flight",


//     getspiderpower:function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.dhruv=function(){
//     console.log(`Dhruv is present in all object`)
// }

// Array.prototype.heydhruv=function(){
//     console.log("dhruv says hello")
// }
// // hereopowers.dhruv()
// // myheroes.heydhruv()

// const user={
//     username:"dhruv",
//     email:"dhruv@gmail.com"

// }

// const teacher={
//     makevideo:true
// }

// const teachingstaff={
//     isavailable:true
// }

// const TAsupport={
//     makeassignment:"JS asignments",
//     fulltime:true,
//     __proto__:teachingstaff
// }

// teacher.__proto__=user;

// //modern syntax

// Object.setPrototypeOf(teachingstaff,teacher)


let anotherUsername="dhruvsharma    "

String.prototype.truelength=function(){
    console.log(`${this}`)
  console.log(`true length is:  ${this.trim().length}`)
}

anotherUsername.truelength()
"coffee".truelength()