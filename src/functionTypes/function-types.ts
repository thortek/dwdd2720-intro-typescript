import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import { Example } from "../types/Example"
hljs.registerLanguage("typescript", typescript)

// A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

console.log(add(1, 2))

let indicator: number = 1

// Example of the add function above in arrow function syntax
const arrowAdd = (num1: number, num2: number): string => num1 + num2.toString()

const numberOne = 25;
const numberTwo = 50.75;

// An argument is a value that is passed into a function when the function is called.
const result = arrowAdd(numberOne, numberTwo);
console.log(result);

/* const codeCarousel = document.querySelector("#codeCarousel") */
document.querySelector("#prevIndicator")?.addEventListener("click", () => loadExample(indicator - 1))
document.querySelector("#nextIndicator")?.addEventListener("click", () => loadExample(indicator + 1))

const cardTitle = document.querySelector("#cardTitle")
const cardExplanation = document.querySelector("#cardExplanation")
const cardCode = document.querySelector("#cardCode")


export function functionParamsExample() {
    return {
        title: `Data types can be set for function parameters`,
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function expects as parameters`,
        code: `
        function add(num1: number, num2: number) {
            return (num1 + num2).toString()
        }`
    }
}

export function functionReturnTypesExample() {
    return {
        title: `Data types can be set for function return values`,
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function will return`,
        code: `
        function add(num1: number, num2: number): string {
            return (num1 + num2).toString()
        }`
    }
}

function loadExample(exampleNum: number = 1) {
    let chosenExampleType: Example
    switch (exampleNum) {
        case 1:
            chosenExampleType = functionParamsExample()
            break
        case 2:
            chosenExampleType = functionReturnTypesExample()
            break
        case 3:
            chosenExampleType = functionParamsExample()
            break
        default:
           chosenExampleType = functionParamsExample()
    }
    
    cardTitle!.textContent = chosenExampleType.title
    cardExplanation!.textContent = chosenExampleType.explanation
    cardCode!.innerHTML = chosenExampleType.code
    hljs.highlightAll()
}

loadExample(1)