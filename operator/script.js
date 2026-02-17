// let num= prompt("enter the number")

// if (num %  5 === 0) {
//    alert("num is a multiple of 5")
// } else {
//     alert(" it is not divisible")
// }

// for (let i = 0; i <= 5; i++) {
//     console.log("dhruv")
    
// }

// console.log("loop has ended")

// for (let i = 1; i < 100; i++) {
//     if (i%2===0) {
//         console.log("i=", i)
//     }
// }

// let gamenum="25"

// let usernum=prompt("guess the game number")

// while (usernum!== gamenum) {
//  usernum=prompt("you entered the wrong number guess again")
// }

// alert("congrates you guess the right number")

// let obj="pen"
// let objprice="10"

// let output=`the price of the ${obj} is ${objprice} rupess`
// console.log(output)
//this is called the template literal

//escape characters
// let a="dhruv\nsharma"

// console.log(a)
//this is for text to display in next line


// let b= "Dhruv sharma"
// console.log(b.toUpperCase())

// let marks=[85 , 97 ,44 ,37 , 76,60]
// let sum=0

// for (const value of marks) {
//  sum+=value

// }
// let avg=sum/marks.length
// let average=`the average markss of the class is ${avg}`
// console.log(average)


let companies=["bloomberg" , "microsoft" , "uber" , "google" , "IBM" , "netflix"]


companies.splice(2,1,"ola")


 companies.shift(0)


companies.push("amazon")
console.log(companies);
