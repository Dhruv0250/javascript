//singleton
//object literals
 const mysym= Symbol("key1")
const js_user={
    name:"dhruv",
    [mysym]:"mykey1",
    age:17,
    location:"haryana",
    email:"ds000453",
    isloggedin:false,
lastloggedindays:["monday", "saturday"]
}

// console.log(js_user[mysym])
// Object.freeze(js_user)//to freeze the change in your object 

js_user.greeting = function(){
console.log("hello js user")
}
js_user.greeting2 = function(){
console.log(`hello js user ${this.name}`)
}
console.log(js_user.greeting2())