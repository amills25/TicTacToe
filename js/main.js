//TicTacToe Game Class
class TicTacToe {
    //MODEL
    constructor() { 

        this.playerTurn = document.getElementById("playerTurn");

        this.gridArray = [];

        //linking dynamic rendering to html
        this.app = document.getElementById("app");
        
        //number of turns -- check win conditions after 5 turns or more
        this.numTurn = 0;

        //variable for game being active so it can be turned off after a win
        this.gameStatus = "on";

    }
    

    //VIEW METHODS
    generateView() {
        //procedural rendering for making grid
        let container = this.generateHTML({ type: 'div', classes: 'container', parent: this.app });
        let row = this.generateHTML({ type: 'div', classes: 'row', parent: container, styles: '', id: 0 });

        //dynamic rendering to create the game board
        for (let index = 0; index < 9; index++) {
            let col = this.generateHTML({ type: 'div', classes: 'col-4 text-center border border-dark lh-lg', parent: row, text: "", styles: 'min-width: 16vw; min-height: 14vw;', id: index });
            let button = this.generateHTML({ type: 'button', classes: 'btn', parent: col, text: "", styles: 'min-width: 100%; min-height: 99%; font-size: 8vw;', text: "", onclick: this.handleClick.bind(this, index) });
            let tile = new Tile(button, index);
            this.gridArray.push(tile);
            //save tile object as well
        }

    }

    //method to create objects for dynamic rendering
    generateHTML({ type, classes, parent = null, text = '', styles, id, onclick }) {
        let element = document.createElement(type);
        element.className = classes;
        element.innerText = text;
        element.style = styles;
        element.id = id;
        element.onclick = onclick;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }


    //CONTROLLER METHODS
    init() {
        //console.log("init(TicTacToe)");
        this.generateView();
        document.getElementById("restartBtn").onclick = this.restart.bind(this);
    }

    //show current player
    currentPlayer() {
        if (this.numTurn % 2 == 0) {
            this.playerTurn.innerText = "It's player O's turn.";
        } else {
            this.playerTurn.innerText = "It's player X's turn.";
        }
    }

    //what happens when the tile is clicked
    handleClick(index) {
        //console.log(this.gridArray[index]);
        //seeing if it was clicked and game is active
        if (!this.gridArray[index].wasClicked && this.gameStatus == "on") { 
            this.checkTurn(index);
            
            //gives a tile a value so we can check win conditions later
            if (this.numTurn % 2 == 0) { 
                this.gridArray[index].value = -1;
            } else {
                this.gridArray[index].value = 1;
            }
            //console.log(typeof this.gridArray[0].value);

            this.currentPlayer();
            this.numTurn++;
            this.gridArray[index].wasClicked = true;

            //run win conditions if 5 or more tiles clicked
            if (this.numTurn > 4){
                this.gameOver();
            }
        }
    }

    //whose turn is it?
    checkTurn(index) {
        //console.log(this.numTurn, this.gridArray, index);
        if (this.numTurn % 2 == 0){
            this.gridArray[index].element.innerText = "X";
        } else {
            this.gridArray[index].element.innerText = "O";
        }
    }

    //win conditions
    gameOver() {
        //grid variable for possible wins
        this.possibleWins = 
        [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        //loop through this array of arrays
        //add the value of each tile
        //if a row/col/diag meets a certain value, game is over
        for (let i = 0; i < this.possibleWins.length; i++) {
            let winRow = 0; //variable to calculate the value of each click
            for (let j = 0; j < this.possibleWins[i].length; j++) {
                winRow += this.gridArray[this.possibleWins[i][j]].value;
                console.log(winRow);
                if (winRow === -3) {
                    this.playerTurn.innerText = "PLAYER X WINS!";
                    this.gameStatus = "off";
                } 
                if (winRow === 3) {
                    this.playerTurn.innerText = "PLAYER O WINS!";
                    this.gameStatus = "off";
                } 
            }
            winRow = 0; //reset row value to 0 if no winner yet
        }
        //if every tile has been clicked and no winner, it's a tie
        if (this.numTurn == 9 && this.gameStatus == "on"){
            this.playerTurn.innerText = "IT'S A TIE";
        }
    }

    //clear the board if starting a new game
    delete() {
        //console.log("delete me");
        this.gridArray = [];
        this.numTurn = 0;
        this.app.innerText = "";
        this.playerTurn.innerText = "It's player X's turn.";
    }

    //restarting a game
    restart() {
        this.delete();
        this.gameStatus = "on";
        this.init();
    }
    
}


//Individual Tile Class
class Tile {
    //MODEL
    constructor(element, index) {
        this.element = element;
        this.index = index;
        this.wasClicked = false;
        this.who = "nobody";
        this.value = 0;
    }
    
}

//initializing page
//we want to reset the board first, then generate the view
function init() { 
    let game = new TicTacToe();
    game.init();
}

init();