//generate a random color;

const RandomColor=function(){
const hex="0123456789abcdef";
const color="#"
for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
}
return color;
}

let intervalid;

let StartChangingColor=function(){
 if (!intervalid) {
     intervalid=setInterval(changecolor,1000)
 }
  
let changecolor=function(){
  document.body.style.backgroundColor=RandomColor()
}

}

let StopChangingColor=function(){
clearInterval(intervalid)
intervalid=null

}

document.getElementById("start").addEventListener("click",StartChangingColor)
 document.getElementById("stop").addEventListener("click",StopChangingColor)