this.winRow = 0;

this.possibleWins = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
//add the values of each array and set equal to winRow
for (let i = 0; i < possibleWins.length; i++) {
    let winRow = 0;
    for (let j = 0; j < possibleWins[i].length; j++) {
        winRow += possibleWins[i][j].value;
        if (winRow == -3) {
                this.playerTurn.innerText = "PLAYER X WINS!";
            } else if (winRow == 3) {
                this.playerTurn.innerText = "PLAYER Y WINS!";
            } else {
                this.playerTurn.innerText = "IT'S A TIE";
        }
        winRow = 0;
    }
}