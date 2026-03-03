function multiplyby5(num){
    return num*5
}


multiplyby5.power = 2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)


function createUser(username,score){
    this.username=username,
    this.score=score

}

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}

const userone=new  createUser("chai",25)
const usertwo=new createUser("coffee",40)

userone.printme()
usertwo.printme()
