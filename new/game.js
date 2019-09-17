// let button3 = document.querySelector(".right");
let button1 = document.querySelectorAll(".right");
let score = 0;
let otherbuttons = document.querySelectorAll(".Wrong");
// let answer = " ";
// let lastButton = document.querySelectorAll(".last");
// let Q1 = document.querySelector("#Q1");
// let Q2 = document.querySelector("#Q2");
// let Q3 = document.querySelector("#Q3");
// let Q4 = document.querySelector("#Q4");
// let Q5 = document.querySelector("#Q5");
// let Q6 = document.querySelector("#Q6");
// let Q7 = document.querySelector("#Q7");
// let Q8 = document.querySelector("#Q8");
// let Q9 = document.querySelector("#Q9");
// let Q10 = document.querySelector("#Q10");
// let Q11 = document.querySelector("#Q11");
// let Q12 = document.querySelector("#Q12");
// let Q13 = document.querySelector("#Q13");
// let Q14 = document.querySelector("#Q14");
// let Q15 = document.querySelector("#Q15");
// let Q16 = document.querySelector("#Q16");
// let Q17 = document.querySelector("#Q17");
// let Q18 = document.querySelector("#Q18");
// let Q19 = document.querySelector("#Q19");
// let Q20 = document.querySelector("#Q20");

for (let i = 0; i < otherbuttons.length; i++){
    otherbuttons[i].addEventListener("click", wrong);
}
//     // otherbuttons[i].addEventListener("click", disableClick);
// }


for (let j = 0; j < button1.length; j++){
    button1[j].addEventListener("click", correct);
}
// }
// for (let h = 0; h < lastButton.length; h++){
//     lastButton[h].addEventListener("click", final)
// }

// function final(){
//     setTimeout(function(){ 
//         if(score >= 15){
//             alert("You're score is " + score + "/20 you're a movie hero.")
//         }
//         else if(score >= 10){
//             alert("You're score is " + score + "/20 you need some work.")
//         }
//         else{
//             alert("You're score is " + score + "/20 have you even seen a movie?")
//         }
//      }, 500);
// }

function correct() {
    score +=1;
    alert("Nice Job! Your score is " + score);
}

function wrong (){
    alert("sorry. Nice try though");
}

// function disableClick (){


    
// }

//figure out how to make it so there is no repeat answer. 

//set it up so that the right answer highlights green or if you have time add a picture. 

//figure out how to only trigger the check score when all buttons are clicked. 

//create a modul for the final score. 

let Q1 = document.querySelector("#one");
let Q2 = document.querySelector("#two");
let Q3 = document.querySelector("#three");
let Q4 = document.querySelector("#four");
let Q5 = document.querySelector("#five");
let Q6 = document.querySelector("#six");
let Q7 = document.querySelector("#seven");
let Q8 = document.querySelector("#eight");
let Q9 = document.querySelector("#nine");
let Q10 = document.querySelector("#ten");
let Q11 = document.querySelector("#eleven");
let Q12 = document.querySelector("#twelve");
let Q13 = document.querySelector("#thirteen");
let Q14 = document.querySelector("#fourteen");
let Q15 = document.querySelector("#fifteen");
let Q16 = document.querySelector("#sixteen");
let Q17 = document.querySelector("#seventeen");
let Q18 = document.querySelector("#eighteen");
let Q19 = document.querySelector("#nineteen");
let Q20 = document.querySelector("#twenty");
let Q21 = document.querySelector("#twentyone");
let Q22 = document.querySelector("#twentytwo");
let Q23 = document.querySelector("#twentythree");
let Q24 = document.querySelector("#twentyfour");
let Q25 = document.querySelector("#twentyfive");
let Q26 = document.querySelector("#twentysix");
let Q27 = document.querySelector("#twentyseven");
let Q28 = document.querySelector("#twentyeight");
let Q29 = document.querySelector("#twentynine");
let Q30 = document.querySelector("#thirty");
let Q31 = document.querySelector("#thirtyone");
let Q32 = document.querySelector("#thirtytwo");
let Q33 = document.querySelector("#thirtythree");
let Q34 = document.querySelector("#thirtyfour");
let Q35 = document.querySelector("#thirtyfive");
let Q36 = document.querySelector("#thirtysix");
let Q37 = document.querySelector("#thirtyseven");
let Q38 = document.querySelector("#thirtyeight");
let Q39 = document.querySelector("#thirtynine");
let Q40 = document.querySelector("#fourty");
let Q41 = document.querySelector("#fourtyone");
let Q42 = document.querySelector("#fourtytwo");
let Q43 = document.querySelector("#fourtythree");
let Q44 = document.querySelector("#fourtyfour");
let Q45 = document.querySelector("#fourtyfive");
let Q46 = document.querySelector("#fourtysix");
let Q47 = document.querySelector("#fourtyseven");
let Q48 = document.querySelector("#fourtyeight");
let Q49 = document.querySelector("#fourtynine");
let Q50 = document.querySelector("#fifty");
let Q51 = document.querySelector("#fiftyone");
let Q52 = document.querySelector("#fiftytwo");
let Q53 = document.querySelector("#fiftythree");
let Q54 = document.querySelector("#fiftyfour");
let Q55 = document.querySelector("#fiftyfive");
let Q56 = document.querySelector("#fiftysix");
let Q57 = document.querySelector("#fiftyseven");
let Q58 = document.querySelector("#fiftyeight");
let Q59 = document.querySelector("#fiftynine");
let Q60 = document.querySelector("#sixty");
let Q61 = document.querySelector("#sixtyone");
let Q62 = document.querySelector("#sixtytwo");
let Q63 = document.querySelector("#sixtythree");
let Q64 = document.querySelector("#sixtyfour");
let Q65 = document.querySelector("#sixtyfive");
let Q66 = document.querySelector("#sixtysix");
let Q67 = document.querySelector("#sixtyseven");
let Q68 = document.querySelector("#sixtyeight");
let Q69 = document.querySelector("#sixtynine");
let Q70 = document.querySelector("#seventy");
let Q71 = document.querySelector("#seventyone");
let Q72 = document.querySelector("#seventytwo");
let Q73 = document.querySelector("#seventythree");
let Q74 = document.querySelector("#seventyfour");
let Q75 = document.querySelector("#seventyfive");
let Q76 = document.querySelector("#seventysix");
let Q77 = document.querySelector("#seventyseven");
let Q78 = document.querySelector("#seventyeight");
let Q79 = document.querySelector("#seventynine");
let Q80 = document.querySelector("#eighty");

function one (){
    Q1.style.backgroundColor = "red";
    Q3.style.backgroundColor = "green";
    Q1.disabled = true;
    Q2.disabled = true;
    Q3.disabled = true;
    Q4. disabled = true;
}

Q1.addEventListener("click", one);

function  two (){
    Q2.style.backgroundColor = "red";
    Q3.style.backgroundColor = "green";
    Q1.disabled = true;
    Q2.disabled = true;
    Q3.disabled = true;
    Q4. disabled = true;
}
Q2.addEventListener("click", two);

function  three(){
    Q3.style.backgroundColor = "green";
    Q1.disabled = true;
    Q2.disabled = true;
    Q3.disabled = true;
    Q4. disabled = true;
}
Q3.addEventListener("click", three);

function  four(){
    Q4.style.backgroundColor = "red";
    Q3.style.backgroundColor = "green";
    Q1.disabled = true;
    Q2.disabled = true;
    Q3.disabled = true;
    Q4. disabled = true;
}
Q4.addEventListener("click", four);

function  five(){
    Q5.style.backgroundColor = "green"
    Q5.disabled = true;
    Q6.disabled = true;
    Q7.disabled = true;
    Q8.disabled = true;
}
Q5.addEventListener("click", five);

function  six(){
    Q6.style.backgroundColor = "red";
    Q5.style.backgroundColor = "green";
    Q5.disabled = true;
    Q6.disabled = true;
    Q7.disabled = true;
    Q8.disabled = true;
}
Q6.addEventListener("click", six);

function  seven(){
    Q7.style.backgroundColor = "red";
    Q5.style.backgroundColor = "green";
    Q5.disabled = true;
    Q6.disabled = true;
    Q7.disabled = true;
    Q8.disabled = true;
}
Q7.addEventListener("click", seven);

function  eight(){
    Q8.style.backgroundColor = "red";
    Q5.style.backgroundColor = "green";
    Q5.disabled = true;
    Q6.disabled = true;
    Q7.disabled = true;
    Q8.disabled = true;
}
Q8.addEventListener("click", eight);

function  nine(){
    Q9.style.backgroundColor = "red";
    Q10.style.backgroundColor = "green";
    Q9.disabled = true;
    Q10.disabled = true;
    Q11.disabled = true;
    Q12.disabled = true;
}
Q9.addEventListener("click", nine);

function  ten(){
    Q10.style.backgroundColor = "green";
    Q9.disabled = true;
    Q10.disabled = true;
    Q11.disabled = true;
    Q12.disabled = true;
}
Q10.addEventListener("click", ten);

function  eleven(){
    Q11.style.backgroundColor = "red";
    Q10.style.backgroundColor = "green";
    Q9.disabled = true;
    Q10.disabled = true;
    Q11.disabled = true;
    Q12.disabled = true;
}
Q11.addEventListener("click", eleven);

function  twelve(){
    Q12.style.backgroundColor = "red";
    Q10.style.backgroundColor = "green";
    Q9.disabled = true;
    Q10.disabled = true;
    Q11.disabled = true;
    Q12.disabled = true;
}
Q12.addEventListener("click", twelve);

function  thirteen(){
    Q13.style.backgroundColor = "red";
    Q15.style.backgroundColor = "green";
    Q13.disabled = true;
    Q14.disabled = true;
    Q15.disabled = true;
    Q16.disabled = true;
}
Q13.addEventListener("click", thirteen);

function  fourteen(){
    Q14.style.backgroundColor = "red";
    Q15.style.backgroundColor = "green";
    Q13.disabled = true;
    Q14.disabled = true;
    Q15.disabled = true;
    Q16.disabled = true;
}
Q14.addEventListener("click", fourteen);

function  fifteen(){
    Q15.style.backgroundColor = "green";
    Q13.disabled = true;
    Q14.disabled = true;
    Q15.disabled = true;
    Q16.disabled = true;
}
Q15.addEventListener("click", fifteen);

function  sixteen(){
    Q16.style.backgroundColor = "red";
    Q15.style.backgroundColor = "green";
    Q13.disabled = true;
    Q14.disabled = true;
    Q15.disabled = true;
    Q16.disabled = true;
}
Q16.addEventListener("click", sixteen);

function  seventeen(){
    Q17.style.backgroundColor = "red";
    Q20.style.backgroundColor = "green";
    Q17.disabled = true;
    Q18.disabled = true;
    Q19.disabled = true;
    Q20.disabled = true;
}
Q17.addEventListener("click", seventeen);

function  eighteen(){
    Q18.style.backgroundColor = "red";
    Q20.style.backgroundColor = "green";
    Q17.disabled = true;
    Q18.disabled = true;
    Q19.disabled = true;
    Q20.disabled = true;
}
Q18.addEventListener("click", eighteen);

function  nineteen(){
    Q19.style.backgroundColor = "red";
    Q20.style.backgroundColor = "green";
    Q17.disabled = true;
    Q18.disabled = true;
    Q19.disabled = true;
    Q20.disabled = true;
}
Q19.addEventListener("click", nineteen);

function  twenty(){
    Q20.style.backgroundColor = "green";
    Q17.disabled = true;
    Q18.disabled = true;
    Q19.disabled = true;
    Q20.disabled = true;
}
Q20.addEventListener("click", twenty);

function  twentyOne(){
    Q21.style.backgroundColor = "red";
    Q22.style.backgroundColor = "green";
    Q21.disabled = true;
    Q22.disabled = true;
    Q23.disabled = true;
    Q24.disabled = true;
}
Q21.addEventListener("click", twentyOne);

function  twentyTwo(){
    Q22.style.backgroundColor = "green";
    Q21.disabled = true;
    Q22.disabled = true;
    Q23.disabled = true;
    Q24.disabled = true;
}
Q22.addEventListener("click", twentyTwo);

function  twentyThree(){
    Q23.style.backgroundColor = "red";
    Q22.style.backgroundColor = "green";
    Q21.disabled = true;
    Q22.disabled = true;
    Q23.disabled = true;
    Q24.disabled = true;
}
Q23.addEventListener("click", twentyThree);

function  twentyFour(){
    Q24.style.backgroundColor = "red";
    Q22.style.backgroundColor = "green";
    Q21.disabled = true;
    Q22.disabled = true;
    Q23.disabled = true;
    Q24.disabled = true;
}
Q24.addEventListener("click", twentyFour);

function  twentyFive(){
Q25.style.backgroundColor = "green";
Q25.disabled = true;
Q26.disabled = true;
Q27.disabled = true;
Q28.disabled = true;
}
Q25.addEventListener("click", twentyFive);

function  twentySix(){
    Q26.style.backgroundColor = "red";
    Q25.style.backgroundColor = "green";
    Q25.disabled = true;
    Q26.disabled = true;
    Q27.disabled = true;
    Q28.disabled = true;
}
Q26.addEventListener("click", twentySix);

function  twentySeven(){
    Q27.style.backgroundColor = "red";
    Q25.style.backgroundColor = "green";
    Q25.disabled = true;
    Q26.disabled = true;
    Q27.disabled = true;
    Q28.disabled = true;
}
Q27.addEventListener("click", twentySeven);

function  twentyEight(){
    Q28.style.backgroundColor = "red";
    Q25.style.backgroundColor = "green";
    Q25.disabled = true;
    Q26.disabled = true;
    Q27.disabled = true;
    Q28.disabled = true;
}
Q28.addEventListener("click", twentyEight);

function  twentyNine(){
    Q29.style.backgroundColor = "red";
    Q31.style.backgroundColor = "green";
    Q29.disabled = true;
    Q30.disabled = true;
    Q31.disabled = true;
    Q32.disabled = true;
}
Q29.addEventListener("click", twentyNine);

function  thirty(){
    Q30.style.backgroundColor = "red";
    Q31.style.backgroundColor = "green";
    Q29.disabled = true;
    Q30.disabled = true;
    Q31.disabled = true;
    Q32.disabled = true;
}
Q30.addEventListener("click", thirty);

function thirtyOne(){
    Q31.style.backgroundColor = "green";
    Q29.disabled = true;
    Q30.disabled = true;
    Q31.disabled = true;
    Q32.disabled = true;
}
Q31.addEventListener("click", thirtyOne);

function thirtyTwo(){
    Q32.style.backgroundColor = "red";
    Q31.style.backgroundColor = "green";
    Q29.disabled = true;
    Q30.disabled = true;
    Q31.disabled = true;
    Q32.disabled = true;
}
Q32.addEventListener("click", thirtyTwo);

function thirtyThree(){
    Q33.style.backgroundColor = "red";
    Q36.style.backgroundColor = "green";
    Q33.disabled = true;
    Q34.disabled = true;
    Q35.disabled = true;
    Q36.disabled = true;
}
Q33.addEventListener("click", thirtyThree);

function thirtyFour(){
    Q34.style.backgroundColor = "red";
    Q36.style.backgroundColor = "green";
    Q33.disabled = true;
    Q34.disabled = true;
    Q35.disabled = true;
    Q36.disabled = true;
}
Q34.addEventListener("click", thirtyFour);

function thirtyFive(){
    Q35.style.backgroundColor = "red";
    Q36.style.backgroundColor = "green";
    Q33.disabled = true;
    Q34.disabled = true;
    Q35.disabled = true;
    Q36.disabled = true;
}
Q35.addEventListener("click", thirtyFive);

function thirtySix(){
    Q36.style.backgroundColor = "green";
    Q33.disabled = true;
    Q34.disabled = true;
    Q35.disabled = true;
    Q36.disabled = true;
}
Q36.addEventListener("click", thirtySix);

function thirtySeven(){
    Q37.style.backgroundColor = "red";
    Q39.style.backgroundColor = "green";
    Q37.disabled = true;
    Q38.disabled = true;
    Q39.disabled = true;
    Q40.disabled = true;
}
Q37.addEventListener("click", thirtySeven);

function thirtyEight(){
    Q38.style.backgroundColor = "red";
    Q39.style.backgroundColor = "green";
    Q37.disabled = true;
    Q38.disabled = true;
    Q39.disabled = true;
    Q40.disabled = true;
}
Q38.addEventListener("click", thirtyEight);

function thirtyNine(){
    Q39.style.backgroundColor = "green";
    Q37.disabled = true;
    Q38.disabled = true;
    Q39.disabled = true;
    Q40.disabled = true;
}
Q39.addEventListener("click", thirtyNine);

function fourty(){
    Q40.style.backgroundColor = "red";
    Q39.style.backgroundColor = "green";
    Q37.disabled = true;
    Q38.disabled = true;
    Q39.disabled = true;
    Q40.disabled = true;
}
Q40.addEventListener("click", fourty);

function fourtyOne(){
    Q41.style.backgroundColor = "green";
    Q41.disabled = true;
    Q42.disabled = true;
    Q43.disabled = true;
    Q44.disabled = true;
}
Q41.addEventListener("click", fourtyOne);

function fourtyTwo(){
    Q42.style.backgroundColor = "red";
    Q41.style.backgroundColor = "green";
    Q41.disabled = true;
    Q42.disabled = true;
    Q43.disabled = true;
    Q44.disabled = true;
}
Q42.addEventListener("click", fourtyTwo);

function fourtyThree(){
    Q43.style.backgroundColor = "red";
    Q41.style.backgroundColor = "green";
    Q41.disabled = true;
    Q42.disabled = true;
    Q43.disabled = true;
    Q44.disabled = true;
}
Q43.addEventListener("click", fourtyThree);

function fourtyFour(){
    Q44.style.backgroundColor = "red";
    Q41.style.backgroundColor = "green";
    Q41.disabled = true;
    Q42.disabled = true;
    Q43.disabled = true;
    Q44.disabled = true;
}
Q44.addEventListener("click", fourtyFour);

function fourtyFive(){
    Q45.style.backgroundColor = "red";
    Q48.style.backgroundColor = "green";
    Q45.disabled = true;
    Q46.disabled = true;
    Q47.disabled = true;
    Q48.disabled = true;
}
Q45.addEventListener("click", fourtyFive);

function fourtySix(){
    Q46.style.backgroundColor = "red";
    Q48.style.backgroundColor = "green";
    Q45.disabled = true;
    Q46.disabled = true;
    Q47.disabled = true;
    Q48.disabled = true;
}
Q46.addEventListener("click", fourtySix);

function fourtySeven(){
    Q47.style.backgroundColor = "red";
    Q48.style.backgroundColor = "green";
    Q45.disabled = true;
    Q46.disabled = true;
    Q47.disabled = true;
    Q48.disabled = true;
}
Q47.addEventListener("click", fourtySeven);

function fourtyEight(){
    Q48.style.backgroundColor = "green";
    Q45.disabled = true;
    Q46.disabled = true;
    Q47.disabled = true;
    Q48.disabled = true;
}
Q48.addEventListener("click", fourtyEight);

function fourtyNine(){
    Q49.style.backgroundColor = "red";
    Q50.style.backgroundColor = "green";
    Q49.disabled = true;
    Q50.disabled = true;
    Q51.disabled = true;
    Q52.disabled = true;
}
Q49.addEventListener("click", fourtyNine);

function fifty(){
    Q50.style.backgroundColor = "green";
    Q49.disabled = true;
    Q50.disabled = true;
    Q51.disabled = true;
    Q52.disabled = true;
}
Q50.addEventListener("click", fifty);

function fiftyOne(){
    Q51.style.backgroundColor = "red";
    Q50.style.backgroundColor = "green";
    Q49.disabled = true;
    Q50.disabled = true;
    Q51.disabled = true;
    Q52.disabled = true;
}
Q51.addEventListener("click", fiftyOne);

function fiftyTwo(){
    Q52.style.backgroundColor = "red";
    Q50.style.backgroundColor = "green";
    Q49.disabled = true;
    Q50.disabled = true;
    Q51.disabled = true;
    Q52.disabled = true;
}
Q52.addEventListener("click", fiftyTwo);

function fiftyThree(){
    Q53.style.backgroundColor = "red";
    Q55.style.backgroundColor = "green";
    Q53.disabled = true;
    Q54.disabled = true;
    Q55.disabled = true;
    Q56.disabled = true;
}
Q53.addEventListener("click", fiftyThree);

function fiftyFour(){
    Q54.style.backgroundColor = "red";
    Q55.style.backgroundColor = "green";
    Q53.disabled = true;
    Q54.disabled = true;
    Q55.disabled = true;
    Q56.disabled = true;
}
Q54.addEventListener("click", fiftyFour);

function fiftyFive(){
    Q55.style.backgroundColor = "green";
    Q53.disabled = true;
    Q54.disabled = true;
    Q55.disabled = true;
    Q56.disabled = true;
}
Q55.addEventListener("click", fiftyFive);

function fiftySix(){
    Q56.style.backgroundColor = "red";
    Q55.style.backgroundColor = "green";
    Q53.disabled = true;
    Q54.disabled = true;
    Q55.disabled = true;
    Q56.disabled = true;
}
Q56.addEventListener("click", fiftySix);

function fiftySeven(){
    Q57.style.backgroundColor = "red";
    Q60.style.backgroundColor = "green";
    Q57.disabled = true;
    Q58.disabled = true;
    Q59.disabled = true;
    Q60.disabled = true;
}
Q57.addEventListener("click", fiftySeven);

function fiftyEight(){
    Q58.style.backgroundColor = "red";
    Q60.style.backgroundColor = "green";
    Q57.disabled = true;
    Q58.disabled = true;
    Q59.disabled = true;
    Q60.disabled = true;
}
Q58.addEventListener("click", fiftyEight);

function fiftyNine(){
    Q59.style.backgroundColor = "red";
    Q60.style.backgroundColor = "green";
    Q57.disabled = true;
    Q58.disabled = true;
    Q59.disabled = true;
    Q60.disabled = true;
}
Q59.addEventListener("click", fiftyNine);

function sixty (){
    Q60.style.backgroundColor = "green";
    Q57.disabled = true;
    Q58.disabled = true;
    Q59.disabled = true;
    Q60.disabled = true;
}
Q60.addEventListener("click", sixty);

function sixtyOne(){
    Q61.style.backgroundColor = "red";
    Q62.style.backgroundColor = "green";
    Q61.disabled = true;
    Q62.disabled = true;
    Q63.disabled = true;
    Q64.disabled = true;
}
Q61.addEventListener("click", sixtyOne);

function sixtyTwo(){
    Q62.style.backgroundColor = "green";
    Q61.disabled = true;
    Q62.disabled = true;
    Q63.disabled = true;
    Q64.disabled = true;
}
Q62.addEventListener("click", sixtyTwo);

function sixtyThree(){
    Q63.style.backgroundColor = "red";
    Q62.style.backgroundColor = "green";
    Q61.disabled = true;
    Q62.disabled = true;
    Q63.disabled = true;
    Q64.disabled = true;
}
Q63.addEventListener("click", sixtyThree);

function sixtyFour(){
    Q64.style.backgroundColor = "red";
    Q62.style.backgroundColor = "green";
    Q61.disabled = true;
    Q62.disabled = true;
    Q63.disabled = true;
    Q64.disabled = true;
}
Q64.addEventListener("click", sixtyFour);

function sixtyFive(){
    Q65.style.backgroundColor = "red";
    Q68.style.backgroundColor = "green";
    Q65.disabled = true;
    Q66.disabled = true;
    Q67.disabled = true;
    Q68.disabled = true;
}
Q65.addEventListener("click", sixtyFive);

function sixtySix(){
    Q66.style.backgroundColor = "red";
    Q68.style.backgroundColor = "green";
    Q65.disabled = true;
    Q66.disabled = true;
    Q67.disabled = true;
    Q68.disabled = true;
}
Q66.addEventListener("click", sixtySix);

function sixtySeven(){
    Q67.style.backgroundColor = "red";
    Q68.style.backgroundColor = "green";
    Q65.disabled = true;
    Q66.disabled = true;
    Q67.disabled = true;
    Q68.disabled = true;
}
Q67.addEventListener("click", sixtySeven);

function sixtyEight(){
    Q68.style.backgroundColor = "green";
    Q65.disabled = true;
    Q66.disabled = true;
    Q67.disabled = true;
    Q68.disabled = true;
}
Q68.addEventListener("click", sixtyEight);

function sixtyNine(){
    Q69.style.backgroundColor = "green";
    Q69.disabled = true;
    Q70.disabled = true;
    Q71.disabled = true;
    Q72.disabled = true;
}
Q69.addEventListener("click", sixtyNine);

function  seventy(){
    Q70.style.backgroundColor = "red";
    Q69.style.backgroundColor = "green";
    Q69.disabled = true;
    Q70.disabled = true;
    Q71.disabled = true;
    Q72.disabled = true;
}
Q70.addEventListener("click", seventy);

function  seventyOne(){
    Q71.style.backgroundColor = "red";
    Q69.style.backgroundColor = "green";
    Q69.disabled = true;
    Q70.disabled = true;
    Q71.disabled = true;
    Q72.disabled = true;
}
Q71.addEventListener("click", seventyOne);

function  seventyTwo(){
    Q72.style.backgroundColor = "red";
    Q69.style.backgroundColor = "green";
    Q69.disabled = true;
    Q70.disabled = true;
    Q71.disabled = true;
    Q72.disabled = true;
}
Q72.addEventListener("click", seventyTwo);

function  seventyThree(){
    Q73.style.backgroundColor = "green";
    Q73.disabled = true;
    Q74.disabled = true;
    Q75.disabled = true;
    Q76.disabled = true;
}
Q73.addEventListener("click", seventyThree);

function  seventyFour(){
    Q74.style.backgroundColor = "red";
    Q73.style.backgroundColor = "green";
    Q73.disabled = true;
    Q74.disabled = true;
    Q75.disabled = true;
    Q76.disabled = true;
}
Q74.addEventListener("click", seventyFour);

function  seventyFive(){
    Q75.style.backgroundColor = "red";
    Q73.style.backgroundColor = "green";
    Q73.disabled = true;
    Q74.disabled = true;
    Q75.disabled = true;
    Q76.disabled = true;
}
Q75.addEventListener("click", seventyFive);

function  seventySix(){
    Q76.style.backgroundColor = "red";
    Q73.style.backgroundColor = "green";
    Q73.disabled = true;
    Q74.disabled = true;
    Q75.disabled = true;
    Q76.disabled = true;
}
Q76.addEventListener("click", seventySix);

function seventySeven (){
    Q77.style.backgroundColor = "red";
    Q79.style.backgroundColor = "green";
    Q77.disabled = true;
    Q78.disabled = true;
    Q79.disabled = true;
    Q80.disabled = true;
}
Q77.addEventListener("click", seventySeven);

function seventyEight (){
    Q78.style.backgroundColor = "red";
    Q79.style.backgroundColor = "green";
    Q77.disabled = true;
    Q78.disabled = true;
    Q79.disabled = true;
    Q80.disabled = true;
}
Q78.addEventListener("click", seventyEight);

function seventyNine (){
    Q79.style.backgroundColor = "green";
    Q77.disabled = true;
    Q78.disabled = true;
    Q79.disabled = true;
    Q80.disabled = true;
}
Q79.addEventListener("click", seventyNine);

function eighty (){
    Q80.style.backgroundColor = "red";
    Q79.style.backgroundColor = "green";
    Q77.disabled = true;
    Q78.disabled = true;
    Q79.disabled = true;
    Q80.disabled = true;
}
Q80.addEventListener("click", eighty);
