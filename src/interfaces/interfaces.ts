import curriculum from "../data/curriculum.json"
import { ExampleCodeSnippet } from "../types/ExampleCodeSnippet"

class ExampleCodeSnippetImpl implements ExampleCodeSnippet {
  title: string
  description: string
  instructions: string

  constructor(title: string, description: string, instructions: string) {
    this.title = title
    this.description = description
    this.instructions = instructions
  }
}

const blocks = curriculum["responsive-web-design"].blocks

const blocksArray = Object.values(blocks)

const navBar = document.querySelector(".navbar")
const navList = document.querySelector("#navList")

const buildNavFromJSON = (blocks: any) => {
  blocks.forEach((block: any) => {
    console.log(block.meta.name)
    // figure out how to build the nav bar from the JSON data
    // create a nav item for each block
    const navItem = document.createElement("a")
    navItem.classList.add("btn")
    navItem.href = `#`
    navItem.textContent = block.meta.name

    navItem.addEventListener("click", () => {
      // find the block that matches the nav item that was clicked
      const foundBlock = blocksArray.find(
        (item: any) => item.meta.name === block.meta.name
      )
      buildLeftNavFromJSON(foundBlock)
    })
    navBar?.appendChild(navItem)
  })
}

buildNavFromJSON(blocksArray)

const buildLeftNavFromJSON = (block: any) => {
  // clear out the left nav
  while (navList?.firstChild) {
    navList.removeChild(navList.firstChild)
  }
  block.challenges.forEach((challenge: any) => {
    const listItem = document.createElement("li")
    // const navButton = document.createElement('h3');
    listItem.textContent = challenge.title
    listItem.classList.add(
        "btn",
      "w-32",
      "bg-green-200",
      "text-center",
      "p-2",
      "hover:text-white",
      "shadow-lg"
    )

    listItem.addEventListener("click", () => {
        console.log("clicked")
        buildSnippetDisplay(challenge)
    })

    navList?.appendChild(listItem)
  })
}

buildLeftNavFromJSON(blocksArray[0]) // temporary

const buildSnippetDisplay = (challenge: any) => {
    const snippet = new ExampleCodeSnippetImpl(challenge.title, challenge.description, challenge.instructions)
    const snippetDisplay = document.querySelector("#snippetDisplay")
    // clear out the snippet display
    while (snippetDisplay?.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild)
    }
    // build an ExampleCodeSnippet instance for each challenge
 
    const snippetTitle = document.createElement("h2")
    snippetTitle.textContent = snippet.title
    const snippetDescription = document.createElement("p")
    snippetDescription.innerHTML = snippet.description


    snippetDisplay?.appendChild(snippetTitle)
    snippetDisplay?.appendChild(snippetDescription)
}






/* navLink.classList.add('nav-link');
navLink.setAttribute('href', `#${block.id}`);
navLink.innerText = block.title;
navItem.appendChild(navLink); */

/*-----------------------------*/

/* Interfaces
In this example, both the 'CanFly' and 'CanSwim' interfaces are implemented by the 'Duck' class. By implementing both interfaces, the 'Duck' class is required to implement the 'fly' and 'swim' methods. This allows the 'Duck' class to inherit behavior from multiple sources. The 'Penguin' class only implements the 'CanSwim' interface, so it is only required to implement the 'swim' method.
*/

interface CanFly {
  fly(): void
}

interface CanSwim {
  swim(): void
}

class Duck implements CanFly, CanSwim {
  fly(): void {
    console.log("I can fly!")
  }

  swim(): void {
    console.log("I can swim!")
  }
}

class Penguin implements CanSwim {
  swim(): void {
    console.log("I can only swim! Can't fly :(")
  }
}

const duck = new Duck()
duck.fly()
duck.swim()

const penguin = new Penguin()
penguin.swim()

/* In this example, if you don't need to create instances or objects with behavior, using interfaces is more appropriate than using a class. In this case your interface can be used solely for type-checking and ensuring proper structure. */

interface Logger {
  log(message: string): void
}

function logMessage(logger: Logger, message: string) {
  logger.log(message)
}

const consoleLogger = {
  log(message: string) {
    console.log(message)
  },
}

logMessage(consoleLogger, "Hello World! I am a console logger!")
