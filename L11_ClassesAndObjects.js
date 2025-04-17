/*
# Class and Objects:
1. Prototypes in JS
- A JS object is an entity having state and behavior(properties and method)
- JS objects have special property called prototype.
- We can set prototype using __proto__.
- If object and prototype have same method, object's method will be used.
*/

// direct way for creating object
const student = {
    fullName: "Anuj kumar",
    marks: 94.4,
    printMarks: function () {
        console.log("marks =", this.marks); //this.marks === student.marks
    },
}; 

const employee = {
    calcTax1(){
        console.log("Tax rate is 10%");
    },
    calcTax2: function(){
        console.log("Tax2 rate is also 10%");
    }
}

const karanArjun = {
    salary: 50000,
}

karanArjun.__proto__ = employee;

/*
# Classes in JS
- Class is a program-code template for creating objects
- Those objects will have some state(variables) and same behaviour(functions) inside it.
        class MyClass{
            constructor() { }
            myMethod() { }
        }
        let myObj = new MyClass();

# constructor()
- This a special method which run automatically whenever we create a new instance of class.
- If we haven't intialised a constructor then, JS will automatically going to create a constructor for that class.
*/

class car{
    constructor(brand, milage){
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log('start');
    }
    stop(){
        console.log('stop');
    }

}

let c1 = new car();
let pulsur = new car("Pulsur N160", 55);
console.log(pulsur)
console.log(pulsur.start());

/*
# Inheritance:
- Inheritance is passing down properties and method from parent class to child class.
        class parent{

        }
        class child extends parent{

        }
- If child and parent have same method, child's method will be used.(method overriding)
*/
class person{
    eat(){
        console.log("Eat");
    }
    work(){
        console.log("Don't do anything");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person{
    work(){
        console.log('Solves problems and build somethings');
    }
}

let eng1 = new engineer();
console.log(eng1.work());
console.log(eng1.eat());

/*
# Super keyword:
- This keyword is used to call teh constructor of its parent class to access the parent's properties and methods
- super(args) //calls parent's constructor
- super.parentMethod(args)
*/

/*
# Error Handling:
- try-catch blocks
        try{
            ..//normal code
        }
        catch(err){
            ..//handling error
        }
*/