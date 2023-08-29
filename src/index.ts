console.log("Hello World!")

const messageParagraph = document.querySelector("#message")

messageParagraph!.textContent = add(5, 10)

function add(num1: number, num2: number) {
    return (num1 + num2).toString()
}