import { CodeSnippetOnly } from "../lib/ExampleCodeClasses";
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
hljs.registerLanguage("typescript", typescript)

function highlightCode(code: string): string {
    return `<code class="language-typescript">` + hljs.highlight('typescript', code).value + `</code>`;
}

// Begin Sample 1.  Generic Functions
function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}

const monsterArray = ['Frankenstein', 'Dracula', 'Zombie'];
const reversedMonsterArray = reverse(monsterArray);
console.log(reversedMonsterArray);

const numberArray = [1324234, 5699586, 30493049, 34859348]
const reversedNumberArray = reverse(numberArray);
console.log(reversedNumberArray);

const objectArray = [{ name: 'Frankenstein' }, { name: 'Dracula' }, { name: 'Zombie' }];
const reversedObjectArray = reverse(objectArray);
console.log(reversedObjectArray);

const booleanArray = [true, false, true, false];
const reversedBooleanArray = reverse(booleanArray);
console.log(reversedBooleanArray);

// Generic Sample 2.  

class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

const stringStorage = new DataStorage<string>('Hello World!  This is a string.');
console.log(stringStorage.getData());

const numberStorage = new DataStorage<number>(123456789);
console.log(numberStorage.getData());

const booleanStorage = new DataStorage<boolean>(true);
console.log(booleanStorage.getData());

const objectStorage = new DataStorage<object>({ name: 'Frankenstein' });
console.log(objectStorage.getData());

// Generic Sample 3.  Generic Constraints

interface hasAge {
    age: number;
}

function getTotalAge<T extends hasAge>(people: T[]): number {
    return people.reduce((total, person) => total + person.age, 0);
}

const people = [
    { name: 'Frankenstein', age: 200 },
    { name: 'Dracula', age: 500 },
    { name: 'Zombie', age: 100}
];

const totalAge = getTotalAge(people);
console.log(totalAge);

/* ----------------------------------------------------------------------------------------*/

const detailView = document.querySelector('#detail-view') as HTMLDivElement;
const listView = document.querySelector('#list-view') as HTMLDivElement;

const exampleOne = document.createElement('div');
exampleOne.classList.add('bg-gray-100', 'p-4', 'rounded', 'shadow', 'mb-4', 'h-64');
const exampleOneTitle = document.createElement('h5');
exampleOneTitle.classList.add('font-bold', 'mb-2');
exampleOneTitle.textContent = 'Generic Functions';
const exampleOneDescription = document.createElement('p');
exampleOneDescription.classList.add('text-sm', 'mb-2');
exampleOneDescription.textContent = 'Generic functions allow you to write code that can be reused with different types of data.';
const exampleOneCode = document.createElement('pre');
exampleOneCode.classList.add('p-4', 'bg-gray-900', 'text-white', 'rounded', 'text-sm');

exampleOneCode.innerHTML = highlightCode(`function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}`)

exampleOne.appendChild(exampleOneTitle);
exampleOne.appendChild(exampleOneDescription);
exampleOne.appendChild(exampleOneCode);
listView.appendChild(exampleOne);

const exampleTwo = document.createElement('div');
exampleTwo.classList.add('bg-gray-100', 'p-4', 'rounded', 'shadow', 'mb-4');
const exampleTwoTitle = document.createElement('h3');
exampleTwoTitle.classList.add('text-2xl', 'mb-2');
exampleTwoTitle.textContent = 'Generic Classes';
const exampleTwoDescription = document.createElement('p');
exampleTwoDescription.classList.add('mb-2');
exampleTwoDescription.textContent = 'Generic classes allow you to write code that can be reused with different types of data.';
const exampleTwoCode = document.createElement('pre');
exampleTwoCode.classList.add('p-4', 'bg-gray-900', 'text-white', 'rounded', 'text-sm');
exampleTwoCode.innerHTML = `<code>
class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}`;
exampleTwo.appendChild(exampleTwoTitle);
exampleTwo.appendChild(exampleTwoDescription);
exampleTwo.appendChild(exampleTwoCode);
listView.appendChild(exampleTwo);



