// Enemies our Player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for all computers.
    this.x = this.x + this.speed * dt;
    if (this.x >= 500) {
        this.x = -98;
    }
    Player.prototype.collision(this);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Create random numbers for speed to easily update enemy movs
// Now write your own Player class
var Player = function(x, y) {
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.score = 0;
    this.lives = 3;
    this.game = true;
};
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the Player object in a variable called Player
//var Player = new Player();
var player = new Player(200, 300);
var enemy = new Enemy(-100, Math.random() * 150 + 60, Math.random() * 400);
allEnemies.push(enemy);
// this function to increase the enemy number
Enemy.prototype.increaseEnemy = function(num) {
    // remove all previous enemies on canvas
    allEnemies.length = 0;
    // load new set of enemies
    for (var i = 0; i <= num; i++) {
        var enemy = new Enemy(i * 5 - 0, Math.random() * 150 + 60, Math.random() * 100 + (i * 20));
        allEnemies.push(enemy);
    }
};
    Player.prototype.collision = function(enemy) {
    if (player.y + 129 >= enemy.y + 85 && player.x + 20 <= enemy.x + 83 && player.y + 70 <= enemy.y + 140 && player.x + 72 >= enemy.x + 15) {

        player.x = 200;
        player.y = 300;
        player.score = 0;
        player.lives --;
        // if (player.score ===0 && player.lives <3) {Player.prototype.resetWholeGame();}
        if (player.lives === 0 && player.score ===0) {
            alert ("Sorry You Lose The Game, You Can Start Again");
            player.lives=3;
           Player.prototype.resetWholeGame();
           // Enemy.prototype.increaseEnemy(player.score);
           
        }
                Enemy.prototype.increaseEnemy(player.score);
    }
    // check if the player reach to the top of canvas and winning the game
    if (player.y + 100 <= 40) {
        player.x = 200;
        player.y = 300;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 505, 10);
        player.score++;
        // player.lives--;
        Enemy.prototype.increaseEnemy(player.score);
        // Enemy.prototype.increaseEnemy(player.lives);
    }
};
// This class requires an update(), render() and handleOutPut()
Player.prototype.update = function(x, y) {
    if (this.game === true) {
        this.GameWin();
    }
    if (this.lives > 3) {
        this.resetPosition();
    }
};
//default Player position for game
//reset Player positions
Player.prototype.resetPosition = function() {
    this.xPos = 100;
    this.yPos = 300;
};
// this function is to reset whole game actions 
Player.prototype.resetWholeGame = function() {
    // this.winner = 0;
    this.lives = 3;
    this.score = 0;
    this.game = true;
    //call resetPosition function 
    this.resetPosition();
};
//update Player score ,if wins
// checks if Player ended his lives ornot
Player.prototype.GameWin = function() {
    if (this.score == 5) {
        alert('Congrats You Win' + " " + 'Your SCORE Is' + " " + this.score + " " + "Points");
        this.resetWholeGame();
    }
};
// draw player on canvas
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput = function(keyypreess) {
    if (keyypreess == 'left') {
        if (this.x > 0) this.x -= this.speed;
    }
    if (keyypreess == 'right') {
        if (this.x < 398) this.x += this.speed;
    }
    if (keyypreess == 'up') {
        if (this.y > -5) this.y -= this.speed;
    }
    if (keyypreess == 'down') {
        if (this.y < 385) this.y += this.speed;
    }
};
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
