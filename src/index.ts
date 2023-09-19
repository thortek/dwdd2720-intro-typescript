import { basicTypesExample, arrayTypesExample, weirdTypesExample, objectTypesExample } from "./basic-types"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
hljs.registerLanguage("typescript", typescript)

//const messageParagraph = document.querySelector("#message")
document.querySelector("#basicTypesButton")?.addEventListener("click", () => loadExample("basic"))
document.querySelector("#arrayTypesButton")?.addEventListener("click", () => loadExample("array"))
document.querySelector("#weirdTypesButton")?.addEventListener("click", () => loadExample("weird"))
document.querySelector("#objectTypesButton")?.addEventListener("click", () => loadExample("object"))

//const cardBody = document.querySelector("#cardBody")
const cardTitle = document.querySelector("#cardTitle")
const cardExplanation = document.querySelector("#cardExplanation")
const cardCode = document.querySelector("#cardCode")

interface Example {
    title: string;
    explanation: string;
    code: string;
}

function loadExample(exampleType: string = "basic") {
    let chosenExampleType: Example
    switch (exampleType) {
        case "array":
            chosenExampleType = arrayTypesExample()
            break
        case "weird":
            chosenExampleType = weirdTypesExample()
            break
        case "object":
            chosenExampleType = objectTypesExample()
            break
        default:
           chosenExampleType = basicTypesExample()
    }
    
    cardTitle!.textContent = chosenExampleType.title
    cardExplanation!.textContent = chosenExampleType.explanation
    cardCode!.innerHTML = chosenExampleType.code
    hljs.highlightAll()
}

