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


export function functionTypesExample() {
    return {
        title: `Using Types in Functions`,
        explanation: `A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.`,
        code: `
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}`,
    }
}