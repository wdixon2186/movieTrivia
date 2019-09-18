let info = {
    questions: {
        q1: "You're going to need a bigger boat.",
        q2: "Rosebud.",
        q3:"Well, technically speaking, the operation is brain damage, but it's on a par with a night of heavy drinking. Nothing you'll miss.",
        q4: "I... drink... your... milkshake!",
        q5: "What's the most you've ever lost on a coin toss?",
        q6:"There are times when it is necessary to abandon our humanity to save humanity.",
        q7:"Now you just got a little boy's father killed. You almost got us killed. And now you're lying to me. So how about this: from now on, every word out of your mouth is the truth, or I'm gonna hurt you.",
        q8:"I went to the woods because I wanted to live deliberately. I wanted to live deep and suck out all the marrow of life. To put to rout all that was not life; and not, when I had come to die, discover that I had not lived.",
        q9:"are you really a selkie?",
        q10:"I think forgiveness has been highly underrated.",
        q11:"Courage is the solution to despair, reason provides no answers. I can't know what the future will bring; we have to choose despite uncertainty. Wisdom is holding two contradictory truths in our mind, simultaneously, Hope and despair. A life without despair is a life without hope. Holding these two ideas in our head is life itself.",
        q12: "When you least expect it, nature has cunning ways of finding our weakest spot.",
        q13:"He's like Daniel Day-Lewis except he sucks.",
        q14:"Isn't it strange, to create something that hates you?",
        q15:"I don't walk through this world with fear in my heart.",
        q16:"Marriage is buying a house for someone you hate.",
        q17:"He's my good friend and I like him, but... Dani, do you feel held by him? Does he feel like home to you?",
        q18:"Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave.",
        q19:"I shall never forget that scream as long as I live...",
        q20:"These arrows cut through the bone like a fat kid eats cake."
    },
    options: {
        q1:["The GodFather ", "The Titanic ", " Jaws ", "The perfect storm "],

        q2:["Citizen Kane", "CasaBlanca", "Gone With The Wind", "Seven Samurai"],

        q3:["Eyes Without A Face", "Eternal Sunshine Of The Spotless Mind", "Tusk", "Audition"],

        q4:["Goodfellas", "Good Burger", "There Will Be Blood", "Brink"],

        q5: ["The Gambler", "Cool Hand Luke", "The Dark Knight", "No Country For Old Men"],

        q6:["Saving Private Ryan", "War For The Planet Of The Apes", "Irreversible", "Fury"],

        q7:["Drive", "You Were Never Really Here",  "Taxi Driver", "The Departed"],

        q8:  ["Little Miss Sunshine", "Into The Wild", "Dead Poets Society", "Leaving Las Vegas"],

        q9: ["The Little Mermaid", "Dude Where's My Car", "Bright", "Song Of The Sea"],

        q10:["Analyze This", "Analyze That",   "Calvary", "Blade Runner"],

        q11: ["First Reformed", "A Few Good Men", "Apacolypse Now", "Love Actually"],

        q12:["Looper", "500 Days Of Summer", "The Hunger Games", "Call Me By Your Name"],

        q13:["The Other Guys", "The Big Sick", "The Hangover", "Cabin In The Woods"],

        q14: ["Dan In Real Life", "Splice", "Ex Machina", "The Terminator"],

        q15:["Wonder Woman", "Tree Of Life", "Legion", "The Grey"],

        q16:  ["Parenthood", "The Nice Guys", "Kramer vs Kramer", "Eyes Wide Shut"],

        q17:["Ordinary People", "Sunset Blvd.", "Moonstruck", "Midsommar"],

        q18:["2001: A Space Oddyssey", "Mike And Dave Need Wedding Dates", "Serenity", "You're Next"],

        q19: ["The Fly", "The Ring", "The Texas Chainsaw Massacre", "Scream"],

        q20:["Robin Hood Men In Tights", "Blade Trinity", "Mandy", "Deadpool 2"]
    },
        answers:{ 
            q1: "Jaws",
            q2: "Citizen Kane",
            q3: "Eternal Sunshine Of The Spotless Mind",
            q4: "There Will Be Blood",
            q5: "No Country For Old Men",
            q6: "War For The Planet Of The Apes",
            q7: "Drive",
            q8: "Dead Poets Society",
            q9: "Song Of The Sea",
            q10: "Calvary",
            q11: "First Reformed",
            q12: "Call Me By Your Name",
            q13: "The Big Sick",
            q14: "Ex Machina",
            q15: "The Grey",
            q16: "The Nice Guys",
            q17: "Midsommar",
            q18: "2001: A Space Oddyssey",
            q19: "The Fly",
            q20: "Mandy"
        }
}
let score = 0;
let app = document.querySelector("#question")
let ans = document.querySelector("#answers");
for (let i = 0; i <20; i++){
    let butt = document.createElement("button");
    let q = info.questions.q1;
    app.innerHTML = q;
    let a = info.options.q1;
    ans.innerHTML = a;

}

console.log(info.questions.q1);
console.log(info.options.q1);
console.log(info.answers.q1);

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