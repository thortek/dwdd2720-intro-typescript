import curriculum from "../data/curriculum.json"

import { ExampleCodeSnippetImpl } from "../lib/ExampleCodeClasses"

let selectedBlock: number = 0

const blocks = curriculum["responsive-web-design"].blocks

const blocksArray = Object.values(blocks)

// example of destructuring an array
const [basicCSS, basicHTML, flexbox, grid] = blocksArray

const basicCSSSnippets = basicCSS.challenges.map(
  (challenge: any) =>
    new ExampleCodeSnippetImpl(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.solutions[0].indexhtml.contents,
      challenge.videoUrl
    )
)

const basicHTMLSnippets = basicHTML.challenges.map(
  (challenge: any) =>
    new ExampleCodeSnippetImpl(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.solutions[0].indexhtml.contents,
      challenge.videoUrl
    )
)

const flexboxSnippets = flexbox.challenges.map(
  (challenge: any) =>
    new ExampleCodeSnippetImpl(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.solutions[0].indexhtml.contents,
      challenge.videoUrl
    )
)

const gridSnippets = grid.challenges.map(
  (challenge: any) =>
    new ExampleCodeSnippetImpl(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.solutions[0].indexhtml.contents,
      challenge.videoUrl
    )
)

console.log(basicCSSSnippets, basicHTMLSnippets, flexboxSnippets, gridSnippets)

const navBar = document.querySelector(".navbar")
const navList = document.querySelector("#navList")

const buildNavFromJSON = (blocks: any) => {
  blocks.forEach((block: any, index: number) => {
    console.log(block.meta.name)
    // figure out how to build the nav bar from the JSON data
    // create a nav item for each block
    const navItem = document.createElement("a")
    navItem.classList.add("btn", "px-4", "m-4", "rounded", "bg-indigo-500", "text-white", "hover:bg-white", "hover:text-indigo-500")
    navItem.href = `#`
    navItem.textContent = block.meta.name

    navItem.addEventListener("click", () => {
      // find the block that matches the nav item that was clicked
      const foundBlock = blocksArray.find(
        (item: any) => item.meta.name === block.meta.name
      )
      selectedBlock = index
      const navItems = document.querySelectorAll("a.btn")

      navItems.forEach((item: any, itemIndex: number) => {
        item.classList.add("text-white")
        if(itemIndex === selectedBlock) {
          item.classList.remove("text-white")
        }
      })
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
      "mx-2",
      "bg-blue-200",
      "text-center",
      "cursor-pointer",
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
  const snippet = new ExampleCodeSnippetImpl(
    challenge.title,
    challenge.description,
    challenge.instructions,
    challenge.solutions[0].indexhtml.contents,
    challenge.videoUrl
  )
  const snippetDisplay = document.querySelector("#snippetDisplay")
  // clear out the snippet display
  while (snippetDisplay?.firstChild) {
    snippetDisplay.removeChild(snippetDisplay.firstChild)
  }
  // build an ExampleCodeSnippet instance for each challenge

  const snippetTitle = document.createElement("h2")
  snippetTitle.textContent = snippet.title
  snippetTitle.classList.add("text-2xl", "font-bold")

  const snippetDescription = document.createElement("p")
  snippetDescription.innerHTML = snippet.description

  const snippetInstructions = document.createElement("p")
  snippetInstructions.innerHTML = snippet.instructions

  const snippetSolution = document.createElement("div")
  snippetSolution.innerHTML = snippet.solution

  const snippetVideo = document.createElement("iframe")
  snippet.displayVideo(snippetVideo)

  snippetDisplay?.appendChild(snippetTitle)
  snippetDisplay?.appendChild(snippetDescription)
  snippetDisplay?.appendChild(snippetInstructions)
  snippetDisplay?.appendChild(snippetSolution)
  snippetDisplay?.appendChild(snippetVideo)
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

// The following is an example of 'interface composition' in TypeScript. The 'Duck' class implements both the 'CanFly' and 'CanSwim' interfaces.
class Duck implements CanFly, CanSwim { // implements forces the class to implement the methods of the interfaces
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
