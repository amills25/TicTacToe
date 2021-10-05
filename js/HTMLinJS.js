const app = document.getElementById("app");

//innerHTML -- unsafe
//innerText -- safe

{/* 
// 15 lines
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div> 
        </div> 
    </div> 
</div>
*/}

// let paragraph = document.createElement('p')
// paragraph.innerText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
// paragraph.className = 'card-text' // method 1
// paragraph.classList.add('card-text') // method 2
// paragraph.classList.remove('img-fluid')

//Controller method (this is better)
function generateHTML({ type, classes, text = '', href = '', parent = null }) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;

    // TODO:
    // event listeners
    // id
    // value, data, checked, clicked

    //this is not the limit to what can be done in this helper function
    if (href.length > 0){
        element.href = href;
    }

    if (parent) {
        parent.appendChild(element);
    }
    
    return element;
}

//View code
//procedural rendering
let container = generateHTML({ type: 'div', classes: 'container', parent: app })
let row = generateHTML({ type: 'div', classes: 'row', parent: container })
let row2 = generateHTML({ type: 'div', classes: 'row', parent: container })
let col = generateHTML({ type: 'div', classes: 'col-md-4 col-sm-12 offset-md-4 mt-3', parent: row })
let card = generateHTML({ type: 'div', classes: 'card', parent: col })
let cardBody = generateHTML({ type: 'div', classes: 'card-body', parent: card })
let h5 = generateHTML({ type: 'h5', classes: 'card-title', text: 'Card title', parent: cardBody })
let h6 = generateHTML({ type: 'h6', classes: 'card-subtitle mb-2', text: 'Card subtitle', parent: cardBody })
let paragraph = generateHTML({ type: 'p', classes: 'card-text', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', parent: cardBody })
let a1 = generateHTML({ type: 'a', classes: 'card-link', text: 'Card link', href: '#', parent: cardBody })
let a2 = generateHTML({ type: 'a', classes: 'card-link', text: 'Another link', href: '#', parent: cardBody })

//one line of code to change something
paragraph.innerText = "ended program";

//Model code
let array = ['hello', 'my', 'name', 'is', 'ian', 'and']; // start with a default array of strings, but maybe can add or change
let elementArray = [];

//dynamic rendering
for (let index = 0; index < 100; index++) {
    let element = generateHTML({ type: 'div', classes: 'col', parent: row2, text: index })
    elementArray.push(element)
}
console.log({elementArray});