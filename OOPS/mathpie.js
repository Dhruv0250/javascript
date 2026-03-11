// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

// const descriptor=Object.getOwnPropertyDescriptors(Math,"PI")
// console.log(descriptor)


const chai={
    name:'ginger chai',
    price:225,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable:false
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
