const app = document.getElementById("app");

//innerHTML -- unsafe
//innerText -- safe

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

//Controller method (this is better)
// OR
//global helper method that the View uses
function generateHTML({type, classes, text = '', href='', parent = null}) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;

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
let container = generateHTML('div', 'container');
let row = generateHTML('div', 'row');
let col = generateHTML('div', 'col');
let paragraph = generateHTML('p', 'card-text', "Some quick example text to build on the card title and make up the bulk of the card's content.");
let h5 = generateHTML('h5', 'card-title', "card title");
let h6 = generateHTML('h6', 'card-subtitle', "card subtitle");
let a1 = generateHTML('a', 'card-link', "card link", '#');
let a2 = generateHTML('a', 'card-link', "card link", '#');
let card = generateHTML('div', 'card');
let cardBody = generateHTML('div', 'card-body');

//one line of code to change something
paragraph.innerText = "ended program";

//Model code
let array = ['hello', 'my', 'name', 'is', 'Ian']; // start with a default array of strings, but maybe can add or change
let elementArray = [];

//dynamic rendering
for (let index = 0; index < 100; index++) {
    let element = generateHTML ({type: 'div', calsses: 'col', parent: row2, text: index})
    elementArray.push(element);
}
console.log({elementArray});