#### Ian Pseudocode 10/4
##### Pseudocode of a class

##### dev ops
* setting up repo
* deciding on final wireframe layout

<!-- Tic Tac Toe Design Pattern -->

```
function init() {
    new game
    game.init
}
```

<!-- singleton -- it exists only once -->
#### TicTacToe Class
<!-- Parent -->
##### Model
<!-- Constructor -->
###### Constant Data
* gameStatus = on 
<!-- later -->
```
if (gameExists) {
    handle click
}
```

* numTurn = 0

* gridArray = []

###### Stateful logic 
* placement of x and o
 * array of objects of moves 
<!-- the lowest state footprint -> largest upfront cost -->
 ```
 numTurn = 0

 if (numTurn % 2 == 0){
     //it's x's turn
 } else {
     //it's o's turn
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

* winConditions()
```
let x=-1;
let o=1;

if (row, col, or diag % 3 == 0){
    gameOver();
}
```
* tie -- if no win, then it's a tie


##### View
* generateView() 
* generateHTML() -- could be global, or passed down to children <!--NEED TO DO -->
* gameOver()
 * array of arrays of win solutions
 * nest for loops going through array
 * if solution total values = ? : x or o wins
 * if turn>8 and game still on, it's a tie
* showCurrentPlayer()
 ```
 if (numTurn % 2 == 0){
     xTurn.innerText = "It's player X's turn.";
 } else {
     oTurn.innerText = "It's player O's turn.";
 }
 ```

 * game ended? <!-- IF winConditions are not met, it's a tie -->
```
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


##### Controller Methods
* init()
 * generate board
 * reset board

* click handler
 * check turn
 * give a click a value
 * change view
 * check win conditions

* check turn
 * see whose turn it is

* delete
 * set grid values back to empty

* restart()
<!-- does not need to be a state. just a function that runs on a click -->
```
function restart() {
    delete();
    turn game on
    init();
}
```

* check win?
```
IF a row, col, or diag are >= 3 AND no values are empty
    winConditions();
```

* gameOver()?
 

#### Tile Class
<!-- Child -->
<!-- Regular class -- there can be more than one -->
##### Model
* who clicked: "", "x", "o" 
 * look for xTurn or oTurn from parent
* if its been clicked //abstracted 
 * true/false
* value
* index
* element
<!-- does NOT need to know where it is, that is the responsibility of the Board  -->


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
