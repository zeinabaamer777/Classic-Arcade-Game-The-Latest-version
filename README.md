##frontend-nanodegree-arcade-game
===============================
- The goal of the project is to create a classic arcade game using the new learned skills in Object Oriented JS and HTML 5 Canvas. Images and a game loop engine are provided. 

- we have to entities in our game : Player and Enemy,
enemy move with random motion, player has 4 positions (left,right,up,down).
The goal of the player is to reach the water, without have any accidents with any one of the enemies.
if the player have accident with an enemy, the game is reset and the player moves back to the start square.else,  the game is won and ended.

##what i do in my project :-
1-Create an enemy using axis X,Y , IMAGE, and give it a speed value .
2-UPDATE the Enemy state by Multiply any movement by the dt parameter
which will ensure the game runs at the same speed for all computers.
3-display collision function that check if the enemy and player has been Collide.
4- then use the render function that used to draw enemy on CANVAS.
5-CREATE PLAYER proberties X<Y<SPEED and image, and as the enemy we use render function to draw the player .
6-Placed all enemy objects in an array called allEnemies
7-USE the increase Enemy Function to increase the enemy number .
8- i update player state, reset position state to return the default state, reset whole game ,and lose.
9-handle Input for key presses and send the key to the player .

## more informations about the project
Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
