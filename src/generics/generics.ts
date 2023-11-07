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

const exampleOne = new CodeSnippetOnly(
    'Generic Functions',
    'Generic functions allow you to write code that can be reused with different types of data.',
    '',
    '',
    `function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}`
)

const exampleTwo = new CodeSnippetOnly(
    'Generic Classes',
    'Generic classes allow you to write code that can be reused with different types of data.',
    '',
    '',
    `class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}`
)

const exampleThree = new CodeSnippetOnly(
    'Generic Constraints',
    'Generic constraints allow you to specify that a generic type must have certain properties.',
    '',
    '',
    `interface hasAge {
    age: number;
}`)

// function that will take a code snippet and add it to the list view
function addCodeSnippet(codeSnippet: CodeSnippetOnly): void {
    const codeSnippetDiv = document.createElement('div');
    codeSnippetDiv.classList.add('min-w-fit', 'bg-gray-100', 'p-2', 'rounded', 'shadow', 'mb-4');
    const codeSnippetTitle = document.createElement('h5');
    codeSnippetTitle.classList.add('font-bold', 'mb-2');
    codeSnippetTitle.textContent = codeSnippet.title;
    const codeSnippetDescription = document.createElement('p');
    codeSnippetDescription.classList.add('text-xs', 'mb-2');
    codeSnippetDescription.textContent = codeSnippet.description;
    const codeSnippetCode = document.createElement('pre');
    codeSnippetCode.classList.add('min-w-[304px]', 'p-1', 'bg-gray-900', 'text-white', 'rounded', 'text-xs');
    codeSnippetCode.innerHTML = highlightCode(codeSnippet.code);

    codeSnippetDiv.appendChild(codeSnippetTitle);
    codeSnippetDiv.appendChild(codeSnippetDescription);
    codeSnippetDiv.appendChild(codeSnippetCode);
    listView.appendChild(codeSnippetDiv);
}

addCodeSnippet(exampleOne);
addCodeSnippet(exampleTwo);
addCodeSnippet(exampleThree)



