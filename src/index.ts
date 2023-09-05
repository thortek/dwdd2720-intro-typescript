console.log("Hello World!")

const messageParagraph = document.querySelector("#message")
const basicTypesButton = document.querySelector("#basicTypesButton")

basicTypesButton?.addEventListener("click", () => {
    messageParagraph!.textContent = "Hello Basic Types!"
})

//messageParagraph!.textContent = add(5, 10)

function add(num1: number, num2: number) {
    return (num1 + num2).toString()
}