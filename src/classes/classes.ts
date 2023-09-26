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

/* class Circle extends Shape {

} */