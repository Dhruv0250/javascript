let RandomNumber=parseInt(Math.random()*100+1)


 const submit=document.querySelector("#subt")
 const userInput=document.querySelector("#guessField")
 const guessSlot=document.querySelector(".guesses")
 const remaining=document.querySelector(".lastResult")
 const lowOrHi=document.querySelector(".lowOrHi")
 const startOver=document.querySelector(".resultParas")


 let prevGuess=[]

 let NumGuess=1

 let playGame=true

 submit.addEventListener("click",function(e){
e.preventDefault()
const Guess=parseInt(userInput.value)
Validate(Guess)
 })

 function Validate(guess){
    if (isNaN(guess)) {
        alert("please enter the valid number")
    }
    else if (guess>100) {
        alert("please enter the number less than 100")
    }
    else if (guess<1) {
        alert("please enter the number greater than 0")
    }
    else {
        prevGuess.push(guess)
        if (NumGuess===11) {
           displayGuess(guess)
           displayMessage("game over")
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 }

 function checkGuess(guess){
  if (guess===RandomNumber) {
    displayMessage("congratulation you guessed it right")
  }
  else if (guess<RandomNumber) {
    displayMessage("your guess is too low")
  }
  else if(guess>RandomNumber){
    displayMessage("your guess is too high")
  }
 }

 function displayGuess(guess){
 userInput.value=""
guessSlot.innerHTML+=`${Guess} `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
 }

 function displayMessage(Message){
lowOrHi.innerHTML=`${Message}`
 }

 function endGame(guess){
userInput.value=""
userInput.setAttribute("disabled","")
submit.setAttribute("disabled",'')
playGame=false
startGame()
 }

 function startGame(){
    const newbutton=document.querySelector('#newGame')
   newbutton.addEventListener("click",function(){
let RandomNumber=parseInt(Math.random()*100+1)
     prevGuess=[]
     NumGuess=1
    guessSlot.innerHTML=""
    NumGuess=1
    remaining.innerHTML=`${11-NumGuess}`
    lowOrHi.innerHTML=''
    userInput.removeAttribute('disabled')
    submit.removeAttribute('disabled')
    playGame=true
    })
 }