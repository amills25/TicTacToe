// MVC - one object
// Model View Controller

// user uses the controller > controller manipulates the model > model updates the view

// model is just the app data (code)
// view is what the user sees
// controller exists in between. it listens to events triggered by view.

//example of Counter

//Model object
class Model {
  constructor(){
    this.controller = null;
    this.counter = 0;
  }
  setController (c){
    this.controller = c;
  }
  setState(s){
    this.counter = s;
    this.onSetState();
  }
  getState(){
    return this.counter;
  }
  onSetState(){
    this.controller.updateView();
  }
}

//View object
class View {
  constructor (){
    this.m = null;
    this.increment_btn = document.getElementById("increment_btn");
    this.decrement_btn = document.getElementById("decrement_btn");
    this.counter_txt = document.getElementById("counter_txt");
  }
  
  setModel (model){
    this.m = model;
  }
  
  render (){
    this.counter_txt.textContent = this.getState();
  }
  
  getState(){
    var c = this.m.getState();
    return c;
  }
}

//Controller object
class Controller {
  constructor(model, view){
    this.v = view;
    this.m = model;
  }
  
  init(){
    this.v.increment_btn.addEventListener('click', this.incrementCounter.bind(this));
    this.v.decrement_btn.addEventListener('click', this.decrementCounter.bind(this));
  }
  
  incrementCounter(){
    this.m.setState(this.m.counter+1);
  }
  
  decrementCounter(){
    this.m.setState(this.m.counter-1);
  }
  
  updateView(){
    this.v.render();
  }
  
}

class App {
  constructor (){
    this.m = new Model();
    this.v = new View();
    this.v.setModel(this.m);
    this.c = new Controller(this.m, this.v);
    this.m.setController(this.c);
  }
  
  init(){
    console.log("starting the app");
    this.c.init();
  }
}

function init (){
    // instantiate and init the Model, View, and Controller

    // 1 - page loads, run init on the app
    let a = new App();
    
    a.init();

    console.log(a);

}


//testing our init
function runUnitTest1() {
    let m = new Model();
    m.init();
    m.setState(5);
    console.log(m.counter);
    let v = new View();
    v.init();
    let c = new Controller();
    c.init();
}
