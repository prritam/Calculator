const userInput = document.getElementById("userInput");
var expre ='';

function press(num){
    expre+=num;
    userInput.value =expre;
}
function equal(){
    userInput.value = eval(expre);
    expre =' ';
    
}
function erase(){
    expre ='';
    userInput.value = expre;
}

