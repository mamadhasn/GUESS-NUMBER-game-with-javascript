const submit=document.getElementById("submit")
let negetive_scover=1
let posiotive_scover=1
submit.addEventListener("click",e=>{
  const generatnumber=Math.floor(Math.random()*10)
  const mynumber=document.getElementById("mynumber").value

  const error=document.getElementById("mynumber")
  error.value=""



  if( negetive_scover>7){
     alert("you lose")

}


 if(mynumber>=0 && mynumber<=9){
     if(generatnumber==mynumber){
document.getElementById("textcompar").innerHTML=` your number is <span id="rote">${mynumber}</span> and mine is <span id="rote"> ${generatnumber} :)<span>`

const positive=document.getElementById("positive") 
     positive.innerHTML=posiotive_scover
     return posiotive_scover=posiotive_scover+1   
     console.log(mynumber);  
  }else if(generatnumber!=mynumber){     
document.getElementById("textcompar").innerHTML=` your number is <span id="numone">${mynumber}</span> and mine is <span id="numonesecond"> ${generatnumber}:(</span>`
const negetive=document.getElementById("negetive") 
     negetive.innerHTML=negetive_scover
     return negetive_scover=negetive_scover+1


    
  }
 }else{
     alert("please enter number between 1 to 9")
 }

//     const mynumber=document.getElementById("mynumber")
console.log(mynumber);
})


const retry=document.getElementById("retry")
retry.addEventListener("click",e=>{

     const positive=document.getElementById("positive")
     const negetive=document.getElementById("negetive")
     const textcompar=document.getElementById("textcompar") 

     positive.innerHTML="+"
     negetive.innerHTML="-"
     textcompar.innerHTML=""

})