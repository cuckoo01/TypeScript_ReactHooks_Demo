
// Name: Nguyen Thi Bich Duyen


/******Type Annotation*****

- Def: Type annotations allow explicitly specifying 
        the data type of variables, function parameters, and return values.

- Advantages:
    + Catching errors during compile time
    + Code readability
*/


// Example 1: Type Annotation for Variables
// Syntax: let variableName: dataType = value;
const name: string = "John Doe"; // string

let age: number = 30; // number
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

const isStudent: boolean = false; // boolean

const scores: number[] = [90, 80, 85, 70]; // number array

const subjects: string[] = ["Math", "Science", "English"]; // string array

// object type
let person: {
    name: string,
    age: number,
    isStudent: boolean
};
person = {
    name: "John Doe",
    age: 30,
    isStudent: false
};



// Example 2: Type Annotation for Functions
// Syntax: function functionName(param1: dataType, param2: dataType): returnType {}
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello, ${name}`;
}




