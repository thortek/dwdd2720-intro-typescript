
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

export function functionParamsExample() {
    return {
        title: `Data types can be set for function parameters and return values`,
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function expects as parameters, and the type of data that the function will return`,
        code: `<code>function add(num1: number, num2: number): string {
            \n return (num1 + num2).toString() \n }</code>`
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