
//console.log(foo)

let foo = 123; // this is declaration with an initial assignment and the data type is inferred

const bar: string = "456"; // this is a declaration with an initial assignment and the data type is specified using a type annotation

// var foo = 123; // this is a declaration with an assignment

// Data types added by TypeScript are:
// - boolean
// - number
// - string
// - array
// - tuple
// - enum
// - any
// - void
// - null
// - undefined
// - never
// - object


// need to add examples of union types particulary with regard to DOM elements

// A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

// Example of the add function above in arrow function syntax
const arrowAdd = (num1: number, num2: number): string => num1 + num2.toString()

const numberOne = 25;
const numberTwo = 50.75;

// An argument is a value that is passed into a function when the function is called.
const result = arrowAdd(numberOne, numberTwo);
console.log(result);

function saySomething(message: string): void {
    console.log(message);
}

export function basicTypesExample() {
    return {
        title: `Basic Types`,
        explanation: `TypeScript adds several data types to JavaScript, including boolean, number, string, array, tuple, enum, any, void, null, undefined, never, and object`,
        code: `
// Boolean
let isDone: boolean = false;
// isDone is a variable annotated with the boolean data type and assigned the value false

// Number
let myNumber: number = 42;
// myNumber is a variable annotated with the number data type and assigned the value 42

// String
let myString: string = "Hello TypeScript!";
// myString is a variable annotated with the string data type and assigned the value "Hello TypeScript!"

// Array
let myArray: number[] = [1, 2, 3, 4];
// myArray is a variable annotated with the array data type and assigned the value [1, 2, 3, 4]

// Tuple
let myTuple: [string, number] = ["Hello", 42];
// myTuple is a variable annotated with the tuple data type and assigned the value ["Hello", 42]
// Tuples are fixed-length arrays where each element has a specific data type
// In TypeScript, you can specify any number of elements in a tuple, but the data types of each element must match the data types specified in the tuple declaration.
        `
    }
}

export function functionParamsExample() {
    return {
        title: `Data types can be set for function parameters and return values`,
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function expects as parameters, and the type of data that the function will return`,
        code: `
        function add(num1: number, num2: number): string {
            return (num1 + num2).toString()
        }`
    }
}

const sportsCar: {
    make: string;
    model: string;
    year: number;
    color: string;
    isConvertible: boolean;
    isManual: boolean;
    topSpeed: number;
} = {
    make: "Porsche",
    model: "911",
    year: 2020,
    color: "red",
    isConvertible: true,
    isManual: false,
    topSpeed: 180,
}

console.log(sportsCar);