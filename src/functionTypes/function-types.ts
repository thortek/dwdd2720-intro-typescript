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

const numberOne = 25
const numberTwo = 50.75

// An argument is a value that is passed into a function when the function is called.
const result = arrowAdd(numberOne, numberTwo)
console.log(result)

/* const codeCarousel = document.querySelector("#codeCarousel") */
document
  .querySelector("#prevIndicator")
  ?.addEventListener("click", () => loadExample(indicator--))
document
  .querySelector("#nextIndicator")
  ?.addEventListener("click", () => loadExample(indicator++))

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
        }`,
  }
}

export function functionReturnTypesExample() {
  return {
    title: `Data types can be set for function return values`,
    explanation: `When writing functions in TypeScript, you can specify the types of data that the function will return`,
    code: `
        function add(num1: number, num2: number): string {
            return (num1 + num2).toString()
        }`,
  }
}

export function optionalParamsExample() {
  return {
    title: `Function parameters can be optional. Here, the "greetUser" function takes a required name parameter and an optional age parameter.  The return type annotation is a string.`,
    explanation: `If the optional age parameter is provided, the function will return a string that includes the name and age of the user.  If the optional age parameter is not provided, the function will return a string that only includes the name of the user.`,
    code: `
    function greetUser(name: string, age?: number): string {
        if (age) {
            return "Hello " + name + ", you are + age + " years old."
        } else {
            return "Hello + name"
        }`,
  }
}

export function callbackExample() {
    return {
        title: `Callback functions can be used to pass functions as parameters to other functions`,
        explanation: `In this example, the 'fetchData' function takes a 'url' of type 'string' and a 'callback' of type '(data: any) => void' as parameters.  The function fetches data from the specified URL and calls the provided callback function with the fetched data and returns 'void'.`,
        code: `
        function fetchData(url: string, callback: (data: any) => void): void {
            // Perform some asynchronous operation to fetch data from the provided URL.
            // When the data is available, call the callback function and pass the data to it.
            const data = {example: 'data'}
            callback(data)
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
      chosenExampleType = optionalParamsExample()
      break
    default:
      chosenExampleType = callbackExample()
  }

  cardTitle!.textContent = chosenExampleType.title
  cardExplanation!.textContent = chosenExampleType.explanation
  cardCode!.innerHTML = chosenExampleType.code
  hljs.highlightAll()
}

loadExample(1)
