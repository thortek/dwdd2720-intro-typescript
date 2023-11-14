const section1 = document.querySelector("#section1") as HTMLElement
const section2 = document.querySelector("#section2") as HTMLElement
const section3 = document.querySelector("#section3") as HTMLElement

const imgContent = document.querySelector("section > img") as HTMLElement

const objOptions = {
  root: null,
  threshold: 0.8,
  rootMargin: "0px",
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions)

if (section1) sectionObserver.observe(section1)
if (section2) sectionObserver.observe(section2)
if (section3) sectionObserver.observe(section3)

function callBackFunction(entries: IntersectionObserverEntry[]) {
  //const [entry] = entries;
  entries.forEach((entry) => {
    const imgContent = entry.target.querySelector("img")
    if (imgContent && entry.isIntersecting) {
      imgContent.classList.remove("translate-x-full", "opacity-0")
    } else if (imgContent) {
      imgContent.classList.add("translate-x-full", "opacity-0")
    }
  })
}

// Abstraction: Classes

abstract class Shape {
  protected color: string // protected means accessible within this class and any class that extends this class

  constructor(color: string) {
    this.color = color
  }

  abstract getArea(): number

  abstract getPerimeter(): number

  getColor(): string {
    return this.color
  }
}

/* class Circle extends Shape.  Example of ... Inheritance */

class Circle extends Shape {
  private radius: number // private means only accessible within this class

  constructor(color: string, radius: number) {
    // constructor is a special method that is called when a new instance of a class is created
    super(color)
    this.radius = radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }
}

const circle = new Circle("red", 5)
//const shape = new Shape('blue'); // cannot do this because Shape is abstract

class Person {
  name: string
  age: number | undefined
  occupation: string | undefined

  constructor(name: string, age?: number, occupation?: string) {
    this.name = name
    this.age = age
    this.occupation = occupation
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name}. You killed my father. Prepare to die.`
    )
  }
}

const bob = new Person("Leonardo DiCaprio", 45, "Actor")
bob.greet()
