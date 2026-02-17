// for loop


// for (let index = 0; index <= 10; index++) {
   
// const element=index
// if (element===5) {
//     console.log("five is best number")
// }
// console.log(element)

// }
for (let i = 0; i < 10; i++) {
 // console.log(`outer loop value is ${i}`);
  for (let j = 0; j < 10; j++) {
  //  console.log(`inner loop value is ${j} and outer loop value is ${i}`)
    //console.log(i+'*'+j+'='+i*j)
    
  }
    
}

let myarray=["batman","flash","superman"]
console.log(myarray.length)
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}
//keywords-break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i===5) {
//         console.log('detected five')
//         break;
//     }
//     console.log(i)

// }
for (let i = 0; i <= 20; i++) {
    if (i===5) {
        console.log('detected five')
        continue;
    }
    console.log(i)

}

