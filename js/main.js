function init() {
    restart();
    createBoard();
}

{/* <div class="container">
        <div class="row">
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
        </div>
        <div class="row">
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
        </div>
        <div class="row">
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
        </div>
    </div> */}


//TicTacToe Game Class
class TicTacToe {
    constructor() {
        //Model object
        class Model {
            constructor() {
    
            }
            init() {
    
            }
            setState(s) {
                this.counter = s;
            }
        }
    
        //View object
        class View {
            constructor() {
    
            }
    
            init() {
                console.log("View.init()");
            }
    
            updateUI() {
    
            }    
    
        }
        
        //Controller object
        class Controller {
            constructor() {
                const app = document.getElementById("app");
                function generateHTML({ type, classes, text = '', parent = null }) {
                    let element = document.createElement(type);
                    element.className = classes;
                    element.innerText = text;
            
                    // TODO:
                    // event listeners
                    // id
                    // value, data, checked, clicked
            
                    //this is not the limit to what can be done in this helper function
                    if (parent) {
                        parent.appendChild(element);
                    }
            
                    return element;
                }
                
                let gridArray = [
                    [
                        [0, 0, 0]
                        [0, 0, 0]
                        [0, 0, 0]
                    ]
                ];
                for (let index = 0; index < 100; index++) {
                        let element = generateHTML({ type: 'div', classes: 'col', parent: row2, text: index })
                        gridArray.push(element)
                }
            }
            
            init() {
                console.log("Controller.init()");
    
            }
    
            handleClick(e) {
    
            }
        }
    }
}

//Individual Tile Class
class Tile {
    constructor() {
        //Model object
        class Model {
            constructor() {
                this.counter;
            }
            init() {
                console.log("Model.init()");

            }
            setState(s) {

            }
        }
    
        //Controller object
        class Controller {
            constructor() {
    
            }
            init() {
                console.log("Controller.init()");
            }
            handleClick(e) {
    
            }
        }
    
        //View object
        class View {
            constructor() {
    
            }
            init() {
                console.log("View.init()");
            }
            updateUI() {
    
            }
        }
    }
}

//function to hide elements
function hide(element) {
    element.style.visibility = "hidden";
}

//function to show elements
function show(element) {
    element.style.visibility = "visible";
}