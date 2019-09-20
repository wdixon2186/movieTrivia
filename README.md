## MOVIE TRIVIA
A trivia game that takes obscure and memorable quotes from movies, and challenges the user on their knowledge.

## HOW TO PLAY
The user is presented with a line from a wide released film, and then given four movie titles to try and guess which movie the line is from. If the user selects the right movie they get a point. The amount of points they recieve at the end determines what the final message says. When the user has answered all the questions they want to, they can click the "FADE OUT" button to submit their score and end the game. 

![Image of site](https://imgur.com/gallery/TGZSrCy)

## INSTALLATION INSTRUCTIONS
There are six files needed to be downloaded in order for the trivia to work. Once downloaded the files are linked together, so all the user has to do is open "_index.html_" and the game should begin. 
- download
    _index.html_
    _script.js_
    _style.css_
-download folder
    _new_ which contains files.
        _will.html_
        _this.js_
        _please.css_
open _index.html_ once everything is downloaded.

## THOUGHT PROCESS
**ON HTML-** while working with HTML I decided to create the outline for my entire game. I made sure to take a markup approach to include everything in tags, and placed each question along with it's options into specific Divs. Later I needed to work on specifics so I had to include different tags and ID names in order to access them in my Javascript. Most of the HTML was pretty simple. I just created divs that contained p tags and buttons inside of them. At the bottom of the page I created a section for a modal that would pop up when the game finishes.  

**ON JAVASCRIPT-** while working with Javascript I knew I needed to give my HTML functionality. I created two functions for right and wrong answers. In the functions I allowed the score to be manipulated. I then decided to run a "for loop" to add event listeners to every button. After the buttons had event listeners, I moved on to disabling the buttons after a selection was made, to keep users from repeat points. I also changed their background to alert the user of the right answer. Because I wanted my game all on one page, and because I created a lot of the structure in HTML, I found that in order to get the buttons to perform a specific task I had to get specific with them. I created variables for each button, and then created and assigned functions to them if they were selected. This allowed me to cover all bases and get a working game. 

**ON CSS-** While going with the theme of movies I decided to try and make my trivia game look like a screenplay. Going off of that, I decided to make the background white, set the font to courier, and create a layout where the Scene heading list the question number, the action description asked what movie is the line from, the dialogue is read by a character and the actual line appears highlighted below it. I decided to make the buttons black and white to continue screenplay tone. I also found that when the buttons are disabled, it allows an easier to view aesthetic so the user can see what they got wrong or write easier. In HTML I created a Score counter and then used javascript to update it. I then made sure the score followed the user throughout the page as they answered their questions. Given that the tone is so black and white, I made the FADE OUT button and the modal it opens more colorful to add some more fun to it. 

## UNSOLVED PROBLEMS
While the game works and plays how it is supposed to, the biggest issue going against it it it's length. Because I created so much in HTML and could only access the specifics in Javascript, it took me a lot of repeat code to get everything working. I had trouble applying specifics to each button when trying to bubble to the divs they were in or trying to make the changes only have effect on the ones they were supposed too. I created files in my commit history under the directory test where I tried to create most of the game in Javascript and just funnel through so that my code looks more sophisticated. I was not able to figure it out and complete my original trivia game at the same time, but I hope to continue to work on it and try to crack it so my code comes across cleaner. 
Apart from that there were no unsolved problems. 


## BUILT WITH
- HTML
- CSS
- Javascript

## AUTHORS
- William Dixon - Initial work

## ACKNOWLEDGMENTS
- Ali Spittel
- Jamal Chapman
- IMDB (for quotes)
- Awesome Writers for writing such great quotes.
