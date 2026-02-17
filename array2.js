const marvel_heroes=["thor" , "Ironman", "spiderman"]
const dc_heroes=["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

//  let combine =marvel_heroes.concat(dc_heroes)
// console.log(combine);

const all_new_heroes=[...marvel_heroes,...dc_heroes]  //spread
//console.log(all_new_heroes)

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array= another_array.flat(Infinity)
console.log(usable_another_array);


// console.log(Array.isArray("dhruv"))//to know is it a array
// console.log(Array.from("dhruv"))//to convert in array
// console.log(Array.from({name:"Dhruv"}));// interesting

let scroe1= 100
let score2= 200
let score3= 300

console.log(Array.of (scroe1, score2, score3))