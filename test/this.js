let questions = [{question: "You're going to need a bigger boat. \n (1) The GodFather, \n (2) The Titanic \n (3) Jaws \n (4) The perfect storm",
answer: "3"},
{question: "Rosebud. \n (1) Citizen Kane \n (2) CasaBlanca \n (3) Gone With The Wind \n (4) Seven Samurai",
answer: "1"},
{question: "Well, technically speaking, the operation is brain damage, but it's on a par with a night of heavy drinking. Nothing you'll miss. \n (1)Eyes Without A Face \n (2) Eternal Sunshine Of The Spotless Mind \n (3) Tusk \n (4) Audition",
answer: "2"},
{question: "I... drink... your... milkshake! \n (1)Goodfellas \n (2) Good Burger \n (3) There Will Be Blood \n (4) Brink",
answer: "3"},
{question: "What's the most you've ever lost on a coin toss? \n (1) The Gambler \n (2) Cool Hand Luke \n (3) The Dark Knight \n (4) (No Country For Old Men)",
answer: "4"},
{question: "There are times when it is necessary to abandon our humanity to save humanity. \n (1) Saving Private Ryan \n (2) War For The Planet Of The Apes \n (3) Irreversible \n (4) Fury",
answer: "2"},
{question: "Now you just got a little boy's father killed. You almost got us killed. And now you're lying to me. So how about this: from now on, every word out of your mouth is the truth, or I'm gonna hurt you. \n (1) Drive \n (2) You Were Never Really Here \n (3) Taxi Driver \n (4) The Departed",
answer: "1"},
{question: "I went to the woods because I wanted to live deliberately. I wanted to live deep and suck out all the marrow of life. To put to rout all that was not life; and not, when I had come to die, discover that I had not lived. \n (1) Little Miss Sunshine \n (2) Into The Wild \n (3) Dead Poets Society \n (4) Leaving Las Vegas",
answer: "3"},
{question: "are you really a selkie? \n (1) The Little Mermaid \n (2) Dude Where's My Car \n (3) Bright \n (4) Song Of The Sea",
answer: "4"},
{question: "I think forgiveness has been highly underrated. \n (1) Analyze This \n (2) Analyze That \n (3) Calvary \n (4) Blade Runner",
answer: "3"},
{question: "Courage is the solution to despair, reason provides no answers. I can't know what the future will bring; we have to choose despite uncertainty. Wisdom is holding two contradictory truths in our mind, simultaneously, Hope and despair. A life without despair is a life without hope. Holding these two ideas in our head is life itself. \n (1) First Reformed \n (2) A Few Good Men \n (3) Apacolypse Now \n (4) Love Actually",
answer: "1"},
{question: "When you least expect it, nature has cunning ways of finding our weakest spot. \n (1) Looper \n (2) 500 Days Of Summer \n (3) The Hunger Games \n (4) Call Me By Your Name",
answer: "4"},
{question: "He's like Daniel Day-Lewis except he sucks. \n (1) The Other Guys \n (2) The Big Sick \n (3) The Hangover \n (4) Cabin In The Woods",
answer: "2"},
{question: "Isn't it strange, to create something that hates you? \n (1) Dan In Real Life \n (2) Splice \n (3) Ex Machina \n (4) The Terminator",
answer: "3"},
{question: "I don't walk through this world with fear in my heart. \n (1) Wonder Woman \n (2) Tree Of Life \n (3) Legion \n (4) The Grey",
answer: ("4")},
{question: "Marriage is buying a house for someone you hate. \n (1) Parenthood \n (2) The Nice Guys \n (3) Kramer vs Kramer \n (4) Eyes Wide Shut",
answer: "2"},
{question: "He's my good friend and I like him, but... Dani, do you feel held by him? Does he feel like home to you? \n (1) Ordinary People \n (2) Sunset Blvd. \n (3) Moonstruck \n (4) Midsommar",
answer: "4"},
{question: "Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave. \n (1) 2001: A Space Oddyssey \n (2) Mike And Dave Need Wedding Dates \n (3) Serenity \n (4) You're Next",
answer: "1"},
{question: "I shall never forget that scream as long as I live... \n (1) The Fly \n (2) The Ring \n (3) The Texas Chainsaw Massacre \n (4) Scream",
answer: "1"},
{question: "These arrows cut through the bone like a fat kid eats cake. \n (1) Robin Hood Men In Tights \n (2) Blade Trinity \n (3) Mandy \n (4) Deadpool 2",
answer: "3"}];
let score = 0;

for (let i = 0; i < questions.length; i++){
    questions[i].innertext;
}

let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

function checkAnswer () {
    alert("hello");
    if(questions.answer == true){
        score ++;
        alert("great job");
    }   
    else{
        alert("sorry");
    }
}