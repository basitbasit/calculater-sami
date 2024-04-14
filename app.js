let src =document.getElementById('src')
buttons = document.querySelectorAll('button')
var string = ""
for(itm of buttons){
itm.addEventListener('click',(e) =>{
   buttonText = e.target.innerText;
   

if (buttonText == "x"){
   string += buttonText
   src.value = string
  }

else if(buttonText == "C"){
   string = ""
   src.value = string
}
else if(buttonText == "="){
   src.value = eval(string) 
}
else{
   string += buttonText
   src.value = string
}
})}

