let button1 = document.querySelector(".right");
let score = 0;
let otherbuttons = document.querySelectorAll(".wrong");

for (let i = 0; i < otherbuttons.length; i++){
    otherbuttons[i].addEventListener("click", wrong);
    console.log(otherbuttons[i]);
}




button1.addEventListener("click", correct);

function correct() {
    score +=1;
    alert("Nice Job! Your score is " + score + ". keep going.")
}

function wrong (){
    alert("sorry. The correct answer is Jaws");
}
