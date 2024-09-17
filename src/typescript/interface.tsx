// Name: Nguyen Thi Bich Duyen


// Type Aliases in TypeScript
// Def: Type aliases allow defining a custom name for a type.
// Syntax: type AliasName = type;

// Primitive Type Aliases
type CarYear = number;
type CarModel = string;
type CarColor = string;

// Object Type Aliases
type Car = {
    year: CarYear,
    model: CarModel,
    color: CarColor
};

const car: Car = {
    year: 2021,
    model: "Toyota Camry",
    color: "black"
};

// Union Type Aliases
type ID = number | string;
const userId: ID = 123;
const postId: ID = "abc";

// Tuple Type Aliases
type PersonNameAge = [string, number];
const person: PersonNameAge = ["John Doe", 30];



//===========================================================
//===========================================================


// Interface in TypeScript
// Def: Interfaces are similar to type aliases, except they only apply to object types.

interface User {
    name: string,
    role: string,
    age: number
}

const firstUser: User = {
    name: "John Doe",
    role: "staff",
    age: 30
};

// Extending Interfaces
interface Student extends User {
    grade: string;
}

const student: Student = {
    name: "John Doe",
    role: "student",
    age: 30,
    grade: "A"
};

// Interface in Function Parameters
interface Shape {
    width: number,
    height: number,
    area(): number
}

function calculateArea(shape: Shape): number {
    return shape.area();
}
