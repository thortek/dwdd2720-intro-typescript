// Abstraction: Classes

abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;

    abstract getPerimeter(): number;

    getColor(): string {
        return this.color;
    }

}

/* class Circle extends Shape {} */

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle('red', 5);

class Person {
    name: string;
    age: number | undefined;
    occupation: string | undefined;

    constructor(name: string, age?: number, occupation?: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. You killed my father. Prepare to die.`);
    }
}

const bob = new Person('Leonardo DiCaprio', 45, 'Actor');
bob.greet();