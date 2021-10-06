#### Ian Pseudocode 10/4
##### Pseudocode of a class

##### dev ops
* setting up repo
* deciding on final wireframe layout

<!-- Tic Tac Toe Design Pattern -->

```
function init() {
    restart();
    createBoard();
}
```

<!-- singleton -- it exists only once -->
#### TicTacToe Class
<!-- Parent -->
##### Model
<!-- Constructor -->
###### Constant Data
* gameExists? boolean <!-- so only one game ever exists -->
```
if (gameExists) {
    init();
}
```

* win conditions
```
let x=1;
let o=2;
example array grid:
[
     [1,0,2]
     [1,1,2]
     [2,1,2]
]
```
 * Example of values (8 possible win conditions):
 * topRow: 3 [0,0],[0,1],[0,2]
 * midRow: 4 [1,0],[1,1],[1,2]
 * botRow: 5 [2,0],[2,1],[2,2]
 * diagFromLeft: 4 [0,0],[1,1],[2,2]
 * diagFromRight: 5 [0,2],[1,1],[2,0]
 * colLeft: 4 [0,0],[1,0],[2,0]
 * colMid: 2 [0,1],[1,1],[2,1]
 * colRight: 6 [0,2],[1,2],[2,2]

```
if (row, col, or diag / 3 == 1){
    gameOver();
}
if (row, col, or diag / 3 == 2){
    gameOver();
}
```

###### Stateful logic 
* placement of x and o
 * array of objects of moves 
<!-- the lowest state footprint -> largest upfront cost -->
 ```
 x could be 0,1,2
 y could be 0,1,2

 if (numTurn % 2 == 0){
     //it's x's turn
 } else {
     //it's o's turn
 }

 example:
 {
     x:0,
     y:2,
     turn: "x"
 }
 {
     x:0,
     y:1,
     turn: "o"
 }
 ```

* number of turns
 * checking if we should check the win (at least 5 turns)
```
let numTurn = 0;
if(numTurn > 4) {
    winConditions();
}
```

* whose turn is it?
 * x
 * o
 ```
 if (numTurn % 2 == 0){
     //it's x's turn
 } else {
     //it's o's turn
 }
 ```

* winConditions() <!-- NEED TO DO -->
```

```

* game ended? <!-- IF winConditions are not met, it's a tie -->
```
let winText;
function gameOver() {
    IF playerX meets winConditions(){
        winText.innerText = "Player X has won the game!"
    } ELSE IF playerO meets winConditions(){
        winText.innerText = "Player O has won the game!"
    } ELSE {
        tieMethod();
    }
}
```

* tie?
```
let tieText;
function tieMethod(){
    tieText.innerText = "Game has ended in a tie."
}
```

* restarted?
```
function restartBtnMethod() {
    restart();
}
```


##### View
* generateView() 
* generateHTML() -- could be global, or passed down to children <!--NEED TO DO -->
* showWinOrTie()
```
gameOver();
```
* showCurrentPlayer()
 ```
 if (numTurn % 2 == 0){
     xTurn.innerText = "It's player X's turn.";
 } else {
     oTurn.innerText = "It's player O's turn.";
 }
 ```

##### Controller Methods

* restart()
<!-- does not need to be a state. just a function that runs on a click -->
```
function restart() {
    init();
}
```

* check win 
```
IF a row, col, or diag are >= 3 AND no values are empty
    winConditions();
```

* updateClickArray() <!--NEED TO DO -->
 * or updateCoordGrid()
 * if checkTieOrWinner
 * showWinOrTie()
 * else game not ended
 * showCurrentPlayer()

* updateWinner() 
 * gameOver()?
 

#### Tile Class
<!-- Child -->
<!-- Regular class -- there can be more than one -->
##### Model
* who clicked: "", "x", "o" 
 * look for xTurn or oTurn from parent
* if its been clicked //abstracted 
 * true/false
<!-- does NOT need to know where it is, that is the responsibility of the Board  -->


##### View
<!-- could inherit the generateHTML method -->
* createTile()? <!--NEED TO DO -->
 * generateHTML('div', 'col-4')
* updateView()
 * render x, o, or blank
```
Look in parent
IF xTurn {
    xDraw.innerText = "X";
} ELSE {
    oDraw.innerText = "O";
}
```

##### Controller
* onClick() 
 * runs view method
 * runs methods from parent (if needed)
```
tileClick.addEventListener('click', updateView);
```


#### Deconstruct and Identify
##### NOTES from 09/30 whiteboard
Things to think about
1. Dynamically build UI
2. Understand what State is
```
class TicTacToe {
let ttt = new TicTacToe();
    constructor
}
```
3. Look at it visually
 * an array or a grid? what is it?
 * what's it going to look like when different things happen
 * what does a tile look like? what kind of data does it hold?
 * different states for each tile for blank, X, or O
4. Roles and Responsibilities
 * who does what in the game?
 * what are the events?
 * what are the win-conditions?

#### Functionality
I want to be able to have 2 users interacting in a game of tic-tac-toe, selecting O or X in the given square of the grid, and IF if there was a winner and how it was achieved.

#### Objects and Data Structures
* player1
* player2
* class TicTacToe{}
* ttt
* Model
* View
 * holds state
* Controller
 * an action happened, now update model
* turns

### START
what happens in between?
* INIT()
### END

#### Functions and such
* init()
* drawX()
* drawO()
* show()
* hide()
* win()
* generateHTML()
 * setting up our game board
 * changing on state when user plays
 * show whose turn it is
* resetGame()
 * runs init()