# udacity_memory
Project #2 for the Udacity-Frontend-Nanodegree

## How to play
* Clone or download the repository.
* Open the zip.file on your computer.
* Extract the files.
* Open index.html in a browser of your choice and start playing, by clicking on two cards. 
  If they show the same picture and therefore match, they will stay open. 
  Try to find all matches within as little moves as possible to win carrots. 

(hint: it actually helps to really try and memorize the pictures you have clicked. 
Impatient and random clicking won't get you many carrots...)

## Game Theme
A short note about the theme of the game:

I wanted to create a project that not only helps me to get my nanodegree, but also has additional value for the players. 
Therefore I chose a theme that is connected to a topic that - in my opinion - is very important: Nutrition and health.

The memory itself should be fun, so that you actually like to play it.  
It is also hard enough that you might want to challenge yourself to try and get all five carrots (which is not that easy).  
Additionally it gives you the opportunity to learn more about Dr. Michael Gregers work. 

## Project Specification

### Game Behaviour
1. There is a "Memory Game Logic"
    * The game randomly shuffles the cards. 
    * A user wins once all cards have successfully been matched. 
2. Congratulations Popup
    * When a user wins the game, a modal appears to congratulate the player 
      and ask if they want to play again. It should also tell the
      user how much time it took to win the game, and what the star rating was.
3. Restart Button
    * A restart button allows the player to reset the game board, the timer, and the star rating.
4. Star Rating (or Carrot Rating...)
    * The game displays a star rating (from 1 to at least 3) that reflects the player's 
      performance. At the beginning of a game, it should display at least 3 stars. 
      After some number of moves, it should change to a lower star rating. 
      After a few more moves, it should change to a even lower star rating (down to 1).
5. Timer
    * When the player starts a game, a displayed timer should also start. 
      Once the player wins the game, the timer stops.
6. Move Counter
    * The game displays the current number of moves a user has made. 
    
### Interface Design
1. Styling
   * Application uses CSS to style components for the game.
2. Usability
   * All application components are usable across modern desktop, tablet, and phone browsers. 
   
### Documentation
1. README
   * A README file is included detailing the game and all dependencies.
2. Comments
   * Comments are present and effectively explain longer code procedure when necessary.
3. Code Quality
   * The code is formatted with consistent, logical, and easy-to-read formatting.
   
