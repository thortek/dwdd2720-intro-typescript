import { basicTypesExample, arrayTypesExample, weirdTypesExample, objectTypesExample, complexTypesExample } from "./basic-types"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import { Example } from "./types/Example"
hljs.registerLanguage("typescript", typescript)

//const messageParagraph = document.querySelector("#message")
document.querySelector("#basicTypesButton")?.addEventListener("click", () => loadExample("basic"))
document.querySelector("#arrayTypesButton")?.addEventListener("click", () => loadExample("array"))
document.querySelector("#weirdTypesButton")?.addEventListener("click", () => loadExample("weird"))
document.querySelector("#objectTypesButton")?.addEventListener("click", () => loadExample("object"))
document.querySelector("#complexTypesButton")?.addEventListener("click", () => loadExample("complex"))

//const cardBody = document.querySelector("#cardBody")
const cardTitle = document.querySelector("#cardTitle")
const cardExplanation = document.querySelector("#cardExplanation")
const cardCode = document.querySelector("#cardCode")

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
        case "complex":
            chosenExampleType = complexTypesExample()
            break
        default:
           chosenExampleType = basicTypesExample()
    }
    
    cardTitle!.textContent = chosenExampleType.title
    cardExplanation!.textContent = chosenExampleType.explanation
    cardCode!.innerHTML = chosenExampleType.code
    hljs.highlightAll()
}

