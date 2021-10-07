//TicTacToe Game Class
class TicTacToe {
    //MODEL
    constructor() { // <-- i will need to put things in constructor
        //example of game array
        // this.array = [
        //     [0, 1, 2
        //     3, 4, 5
        //     6, 7, 8]
        // ];

        this.playerTurn = document.getElementById("playerTurn");

        this.gridArray = [];

        //linking dynamic rendering to html
        this.app = document.getElementById("app");
        
        //number of turns -- check win conditions after 5 turns or more
        this.numTurn = 0;

        //winConditions
        //tie? -- if winConditions are not met, it must be a tie

        // if(this.numTurn > 4) {
        //     winConditions();
        // }



        this.gameStatus = "on";

        //gameOver
        this.winText = '';
        //gameOver() {
            // IF playerX meets winConditions(){
            //     winText.innerText = "Player X has won the game!"
            // } ELSE IF playerO meets winConditions(){
            //     winText.innerText = "Player O has won the game!"
            // } ELSE {
            //     tieMethod();
            // }
        //}
        this.tieText = '';
        // tieMethod() {
        //     tieText.innerText = "Game has ended in a tie."
        // }

    }

    //VIEW METHODS
    generateView() {
        //procedural rendering
        let container = this.generateHTML({ type: 'div', classes: 'container', parent: this.app });
        let row = this.generateHTML({ type: 'div', classes: 'row', parent: container, styles: '', id: 0 });

        //dynamic rendering
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

    updateView() {
        
    }

    //show win or tie
    //use the same variable playerTurn?
    gameOver() {
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

        for (let i = 0; i < this.possibleWins.length; i++) {
            let winRow = 0;
            for (let j = 0; j < this.possibleWins[i].length; j++) {
                winRow += this.gridArray[this.possibleWins[i][j]].value;
                console.log(winRow);
                if (winRow === -3) {
                    this.playerTurn.innerText = "PLAYER X WINS!";
                    this.gameStatus = "off";
                } 
                if (winRow === 3) {
                    this.playerTurn.innerText = "PLAYER Y WINS!";
                    this.gameStatus = "off";
                } 
            }
            winRow = 0;
        }
        if (this.numTurn == 9 && this.gameStatus == "on"){
            this.playerTurn.innerText = "IT'S A TIE";
        }
    }

    //show current player
    currentPlayer() {
        if (this.numTurn % 2 == 0) {
            this.playerTurn.innerText = "It's player O's turn.";
        } else {
            this.playerTurn.innerText = "It's player X's turn.";
        }
    }

    //CONTROLLER METHODS
    init() {
        //console.log("init(TicTacToe)");
        this.generateView();
        document.getElementById("restartBtn").onclick = this.restart.bind(this);
    }

    //what happens when the tile is clicked
    handleClick(index) {
        //console.log(this.gridArray[index]);
        if (!this.gridArray[index].wasClicked && this.gameStatus == "on") { //seeing if it was clicked
            this.checkTurn(index);
            
            if (this.numTurn % 2 == 0) { //gives a tile a value so we can check win conditions later
                this.gridArray[index].value = -1;
            } else {
                this.gridArray[index].value = 1;
            }
            //console.log(typeof this.gridArray[0].value);

            this.currentPlayer();
            this.numTurn++;
            this.gridArray[index].wasClicked = true;

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

    delete() {
        //console.log("delete me");
        this.gridArray = [];
        this.numTurn = 0;
        this.app.innerText = "";
        this.playerTurn.innerText = "It's player X's turn.";
    }

    //restart
    restart() {
        this.delete();
        this.gameStatus = "on";
        this.init();
    }
    
    //check for win
    // IF a row, col, or diag are >= 3 AND no values are empty
    // winConditions();
    // IF there is a winner, don't allow any more clicking

    //update grid
        //show win or tie?
    //update winner?
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
function init() { //we want to reset the board first, then generate the view
    let game = new TicTacToe();
    game.init();
}

init();