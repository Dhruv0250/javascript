//date is save in js in the form of object

//date

//  const mydate = new Date();
//  console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())

const newdate = new Date("2023-01-23");
console.log(newdate.toLocaleString())

let timestamp=Date.now()

console.log(timestamp)
console.log(newdate.getTime())

console.log(newdate.toLocaleString("default",{
    weekdays: "long"
}))