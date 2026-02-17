//for of


const arr=[1,2,3,4,5]
for (const array of arr) {
    // console.log(array)
}

const greeting="hello world!"
// for (const greet of greeting) {
//     console.log(greet)
//

//maps

const map=new Map()
map.set('IN','india')
map.set('USA','united states of america')
map.set("Fr","france")
// console.log(map)

for (const [key,value] of map) {
    console.log(key,value)
}
const myobject={
    'game1':"nfs",
    "game2":"spiderman"
}

for (const [key,value] of myobject) {
    console.log(key)
}