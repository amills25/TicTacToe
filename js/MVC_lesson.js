// MVC - one object
// Model View Controller

// user uses the controller > controller manipulates the model > model updates the view

// model is just the app data (code)
// view is what the user sees
// controller exists in between. it listens to events triggered by view.

//example of Counter

//Model object
class Model {
    constructor() {
        this.counter;
    }
    init() {
        console.log("Model.init()");
        this.counter = 0;
    }
    setState(s) {
        this.counter = s;
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

function init() {
    console.log("init()");
    let m = new Model();
    m.init();
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
