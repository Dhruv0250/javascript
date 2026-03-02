// const promise1=new Promise(function(resolve,reject){
//     //do db call
//     //do an async task
//     setTimeout(function(){
//         console.log('async task is completed')
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('async task 2')
//     resolve()
// },1000)
// }).then(function(){
//     console.log('resolved')
// })


// const Promise3=new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"dhruv",email:"dhruv@.com"})
//     },1000)
// })

// Promise3.then(function(user){
// console.log(user)
// })

// promise4=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true;
//         if (!error) {
//             resolve({username:"dhruv",password:"123"})
//         }
//         else {
//             reject('ERROR something went wrong')
//         }
//     }, 1000);
// })

// promise4
// .then((user)=>{
// console.log(user)
// return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("the promise is either resolved or rejected"))


// const Promisefive=new Promise(function(resolve,reject){
//  setTimeout(() => {
//         let error=false;
//         if (!error) {
//             resolve({username:"dhruv",password:"123"})
//         }
//         else {
//             reject('Error js went  wrong')
//         }
//     }, 1000);
// })

// async function consumePromise5(){
//    try{ const response =await Promisefive
//     console.log(response)}
//     catch{
//         console.log(error)
//     }
// }


async function getallusers() {
const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=response.json()
    console.log(data)
}

getallusers()

