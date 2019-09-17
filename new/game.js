let button1 = document.querySelectorAll(".right");
let score = 0;
let otherbuttons = document.querySelectorAll(".Wrong");
let answer = " ";
let lastButton = document.querySelectorAll(".last");

console.log(otherbuttons);
console.log(button1);

for (let i = 0; i < otherbuttons.length; i++){
    otherbuttons[i].addEventListener("click", wrong);
    otherbuttons[i].addEventListener("click", disableClick);
}


for (let j = 0; j < button1.length; j++){
    button1[j].addEventListener("click", correct, disableClick);
}
for (let h = 0; h < lastButton.length; h++){
    lastButton[h].addEventListener("click", final)
}

function final(){
    setTimeout(function(){ 
        if(score >= 15){
            alert("You're score is " + score + "/20 you're a movie hero.")
        }
        else if(score >= 10){
            alert("You're score is " + score + "/20 you need some work.")
        }
        else{
            alert("You're score is " + score + "/20 have you even seen a movie?")
        }
     }, 500);
}

function correct() {
    score +=1;
    alert("Nice Job! Your score is " + score)

}

function wrong (){
    alert("sorry. Nice try though");
}

function disableClick (){
    otherbuttons.disabled = true;
    button1.disabled = true;
    console.log("did it work?")
}

//figure out how to make it so there is no repeat answer. 

//set it up so that the right answer highlights green or if you have time add a picture. 

//figure out how to only trigger the check score when all buttons are clicked. 

//create a modul for the final score. 