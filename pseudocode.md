#### Ian Pseudocode 10/4
##### Pseudocode of a class

##### dev ops
* setting up repo
* deciding on final wireframe layout

<!-- Tic Tac Toe Design Pattern -->

* init()

<!-- singleton -- it exists only once -->
#### Game / Board Class
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

* win conditions -- could be data/ could be abstracted
 * 0,0
 * 1,0
 * 2,0
 * ^^ win condition
```
[
     [x,"",o]
     [x,"",o]
     [x,"",""]
]
```


###### Stateful logic 
* placement of x and o
 * array of objects of moves
<!-- the lowest state footprint -> largest upfront cost -->
 ```
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

* whose turn is it?
 * x
 * o

* number of turns
 * checking if we should check the win (at least 5 turns)
 * whose turn is it? 
```
 num = 0; OR array.length
 if (num%2==0){
     //it's x's turn
 } else {
     //it's o's turn
 }
```

* game ended?
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
* generateHTML() -- could be global, or passed down to children
* createGrid()
* createBoard()?
* showWinOrTie()
* showCurrentPlayer()
* showScore()?

##### Controller Methods

* restart()
<!-- does not need to be a state. just a function that runs on a click -->
```
function restart() {
    init();
}
```

* check win
 * abstract data example 1
```
[
     [1,"",2]
     [1,1,2]
     [2,1,2]
]
```
 * top row: 3
 * middle row: 3
 * bottom row: 1
 * diagonal left: 1
 * diagonal right: 3
 * col right: 4
 * col middle: 0
 * col left: 3

 * abstract data example 2 
```
for loop i = 0 > 2
    for loop j = 0 > 2
```
* updateClickArray()
 * or updateCoordGrid()
 * if checkTieOrWinner
 * showWinOrTie()
 * else game not ended
 * showCurrentPlayer()

* updateWinner()
 

#### Tile / Button Class
<!-- Child -->
<!-- Regular class -- there can be more than one -->
##### Model
* who clicked: "", "x", "o"
* if its been clicked //abstracted
 * true/false OR whoclicked.length
* does NOT need to know where it is, that is the responsibility of the Board

##### View
<!-- could inherit the generateHTML method -->
* createTile()?
 * generateHTML('div', 'col-4')
* updateView()
 * render x, o, or blank

##### Controller
* onClick()
 * runs view method
 * runs methods from parent (if needed)


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