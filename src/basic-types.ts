
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

// Enum
enum Color {
    Red,
    Silver,
    BahamaGreen,
    MidnightBlue,
}
// Color is a variable annotated with the enum data type and assigned the value {Red: 0, Silver: 1, White: 2, Black: 3, Bahama_Green: 4, Midnight_Blue: 5}

// Any
let myVariable: any = "Hello World";
myVariable = 42; 
// this is valid because myVariable is of type any so it can be assigned (and reassigned) any value

// Void
function saySomething(message: string): void {
    console.log(message);
}
// saySomething is a function that takes a string parameter and returns void

// Null and Undefined
let myNull: null = null; // null is not a JavaScript primitive, but TypeScript adds it as a data type
let myUndefined: undefined = undefined; // undefined is a JavaScript primitive, and TypeScript adds it as a data type
// null and undefined are not the same thing in TypeScript

// Never
function neverReturns(): never {
    throw new Error("An error!");
} // never is a data type that represents the type of values that never occur
// an example of a function that returns never is a function that always throws an error

// Object
let myObject: object = { foo: "bar" };
// myObject is a variable annotated with the object data type and assigned the value { foo: "bar" }
// Using the 'object' datatype should be done with caution and in specific use cases.  It can be useful when dealing with situations where you need to work with dynamic or unknown data structures, such as when handling data from external sources or dealing with generic types.
// However, using the 'object' datatype too liberally can lead to coe that is harder to reason about, maintain, and debug. It is best to use more specific and precise types whenever possible.

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

enum Color {
    Red,
    Silver,
    White,
    Black,
    Bahama_Green,
    Midnight_Blue,
}

const sportsCar: {
    make: string;
    model: string;
    year: number;
    color: Color;
    isConvertible: boolean;
    isManual: boolean;
    topSpeed: number;
} = {
    make: "Porsche",
    model: "911",
    year: 2020,
    color: Color.Bahama_Green,
    isConvertible: true,
    isManual: false,
    topSpeed: 180,
}

console.log(sportsCar);