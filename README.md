# My First IronHack project - Tetsu bīru ["Iron Beers"]

<h2>This is the repository of my first Ironhack Web Dev bootcamp project - Coding a game.</h2>

<h3><b>----Game chosen: Sokoban (倉庫番 sōko-ban, "warehouse keeper")----</b></h3>

<p>Sokoban is a puzzle video game, in which the player is pushing crates or boxes trying to get them to the proper location.</p>
<p>It was created in 1981 by Hiroyuki Imabayashi and published in December 1982 by Thinking Rabbit.
This was in fact the version I still remember playing.</p>

<p>Currently, more than 7500+ levels have been created for various versions of the game.</p>

<p><b>Rules:</b></p>
<p>The player is allowed to move vertically or horizontally, into empty squares, and is allowed to push (never pull) the boxes in the same directions. The puzzle is solved when all the boxes are in the storage locations.
The number of boxes === Number of storage locations</p>

<p><b>Reasons for choosing this game:</b></p>
<p>I still remember playing the game with its "blue and purple" visuals an pixel design, struggling to pass to the next level and the one after that.Once I started coding, I started wondering how a game like that would look like behind its looks.</p>
<i>Would it be as challenging to code it, as it was to play it?</i>
<br>

<h3><b>---My personal touch---</b></h3>

<p>I decided to change the looks of the original game, so that instead of crates the player would be pushing a keg, and awaiting some empty mugs - Which would should be filled as a final goal.
All the rules remained, since there would be no point in doing it in a different way.</p>

<h3><b>---Challenges ahead----</b></h3>
<ol> 
  <li>Should it be DOM manipulation or Canvas? DOM. 
  <li>One page per level.</li>
  <li>Which classes should be created? One clas: Game, including the player and the board</li>
  <li>Define MVP: One level</li>
  <li>How should this be a challenge? By doing it involving a matrix and creating collision conditions</li>
  <li>How are my players being kept engaged? -> Little guy on the side with funny dialogue!; Keeping track of moves and time; Looking forward to the end</li>
</ol>

<h3><b>---Steps to follow---</b></h3>
<ol>
  <li>Create the GitHUb repository & ReadMe intro <b>-DONE-</b></li>
  <li>Build the foundation files of HTML, CSS and JS <b>-DONE-</b></li>
  <li>Created the design for: Walls; Empty beer; Filled beer; Beer Keg; player <b>-DONE-</b> (except player) </li>
  <li>Define the main functions and variables: <code>moveLeft()</code> <code>moveRight()</code> <code>moveUp()</code> <code>moveDown()</code> <code>levelUp()</code> <code>resetLevel()</code> </li> <b>-DONE-</b> (except levelUp and resetLevel)
  <li>Test the main functions </li>
  <li>Make it visual </li> <b>-DONE-</b>
  <li>Make it move visually </li>
  <li>Fix the bugs </li>
  <li>Try for another level</li>
  <li>Design of webpages: Main screen, level up, First screen of welcome & Playgame </li>
</ol>

<h3><b>---Design picked & color scheme---</b></h3>
  
<h3><b>---Structure---</b></h3>
<h3><b>---Technologies used---</b></h3>
<ol>
  <li>Html5, CSS3</li>
  <li>Javascript and JQuery</li>
</ol>
<h3><b>---Approach taken---</b></h3>
<ol>
  <li>Construction of main levels into matrixes</li>
  <li>Building the matrixes into DIVs with classes</li>
  <li>Each class with different backgrounds to provide the visual</li>
  <li>Conditions to render the different behavior throughout the screen</li>
</ol>
<h3><b>---Unsolved problems---</b></h3>
<h3><b>---Questions to answer to---</b></h3>
<ul>
  <li>Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?</li>
  <li>Did you added a personal spin or creative element into your project submission? Did you deliver something engaging and playable to the end user?</li>
  <li>Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming?</li>
  <li>Did you deploy your application to a public url using GitHub Pages?</li>
  <li>Presentation in slides.com; Elevator pitch; show and explain code snippets in your presentation slides; display screenshot of your GitHub graphs to show your commits;Demonstrate the important feature of your game; Did you made a mistake planning your time? Maybe scoping your feature? Conceptualizing your game? Coding?</li>
</ul>


Thanks for reading!!!
