"use strict";
//it is already implemented into ES6

function F() {
    this.name ='name';
}

class G { //already has a defence system
    constructor() {
        this.name ='name';
    }
}

F();
G();


function f() {
    console.log(this);
}

f();



// "use strict";

// var undefined = true;

// a = 123;

// console.log(a);