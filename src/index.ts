import { basicTypesExample, functionParamsExample } from "./basic-types"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
hljs.registerLanguage("typescript", typescript)

//const messageParagraph = document.querySelector("#message")
const basicTypesButton = document.querySelector("#basicTypesButton")

//const cardBody = document.querySelector("#cardBody")
const cardTitle = document.querySelector("#cardTitle")
const cardExplanation = document.querySelector("#cardExplanation")
const cardCode = document.querySelector("#cardCode")

basicTypesButton?.addEventListener("click", () => {
    //messageParagraph!.textContent = "Hello Basic Types!"
    loadExample()
})

//console.log(functionParamsExample())

function loadExample() {
    const example = basicTypesExample()
    cardTitle!.textContent = example.title
    cardExplanation!.textContent = example.explanation
    cardCode!.innerHTML = example.code
    hljs.highlightAll()
}

