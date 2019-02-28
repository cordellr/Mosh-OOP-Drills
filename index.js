//Exercise: Functioning stopwatch object
//start by entering
// const sw = new Stopwatch()
// in the console. Then run methods using sw.duration, sw.start, ..., syntax

// function Stopwatch() {
//     let startTime;
//     let endTime;
//     let running;
//     let duration = 0;

//     this.start = function() {
//         if (running)
//             throw new Error ('Stopwatch has already started.');

//         running = true;

//         startTime = new Date();
//     };

//     this.stop = function() {
//         if (!running)
//             throw new Error ('Stopwatch is not started.')

//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };

//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration',{
//         get: function() {
//             return duration; 
//         }
//     });
// }




// //A function that applies parent methods to child methods
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child; //resets constructor
// }

// //Parent object
// function Shape() {
// }

// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }


// function Circle() {
// }

// extend(Circle, Shape);

// //overrides 'duplicate' from parent
// Circle.prototype.duplicate = function () {
//     console.log('duplicate circle');
// }


// function Square() {
// }

// extend(Square, Shape);

// //overrieds 'duplicate' from parent
// Square.prototype.duplicate = function () {
//     console.log('duplicate square');
// }

// const shapes = [
//     new Circle(),
//     new Square()
// ];

// for (let shape of shapes)
//     shape.duplicate();




//Exercise: Create an object with two methods--one istance and one prototype method
//Add child object that inherets those two methods, and that passes an array. 
//Add instance methods to second object that add and remove items from array.

// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked')
//     }

//     HtmlElement.prototype.focus = function() {
//         console.log('focused')
//     }
// }


// function HtmlSelectElement(...items) {
//     this.items = [...items];

//     this.addItem = function(item) {
//         this.items.push(item);
//     }

//     this.removeItem = function(item) {
//         let indexNum = this.items.indexOf(item);
//         this.items.splice(indexNum,1);
//     }
// }

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;





//Extension of previous exercise. Turns array items into html "option" elements within "select" element.
//Also added new HtmlImageElement that inherits from HtmlElement, and has own "render()" method.
//Create new HtmlSelectElement and HtmlImageElement  and run .render() with them

// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked')
//     }

//     HtmlElement.prototype.focus = function() {
//         console.log('focused')
//     }
// }


// function HtmlSelectElement(...items) {
//     this.items = [...items];

//     this.addItem = function(item) {
//         this.items.push(item);
//     }

//     this.removeItem = function(item) {
//         let indexNum = this.items.indexOf(item);
//         this.items.splice(indexNum,1);
//     }

//     this.render = function() {
//         return `
//         <select>${this.items.map(item => `
//         <option>${item}</option>`).join('')}
//         </select>
//         `;
//         //arrow function above maps and returns each item within an <option> element
//         //.join prevent comma from being placed between mapped items
//     }
// }

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;


// function HtmlImageElement(src) {
//     this.src = src;

//     this.render = function() {
//         return `<img src="${this.src}" />`
//     }
// }

// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;





//Exercise: created a stack with a private array that could not be accessed by user.
//can only use push and pop to manipulate the values in the array.

const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items.pop();
    }

    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty');

        return items[items.length - 1]; //returns most recent element added
    }

    get count() {
        return _items.get(this).length;
    }

}