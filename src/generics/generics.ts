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
detailView.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-8', 'bg-gray-200', 'rounded', 'shadow', 'w-full', 'h-full');

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
    codeSnippetDiv.addEventListener('click', () => {
        showDetailView(codeSnippet);
    });
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

function showDetailView(codeSnippet: CodeSnippetOnly): void {
    // remove all children from the detail view
    while (detailView.firstChild) {
        detailView.removeChild(detailView.firstChild);
    }
    const codeSnippetDiv = document.createElement('div');
    codeSnippetDiv.classList.add('bg-blue-100', 'p-8', 'rounded', 'shadow');
    const codeSnippetTitle = document.createElement('h2');
    codeSnippetTitle.classList.add('text-2xl', 'font-bold', 'mb-2');
    codeSnippetTitle.textContent = codeSnippet.title;
    const codeSnippetDescription = document.createElement('p');
    codeSnippetDescription.classList.add('text-xl', 'mb-2');
    codeSnippetDescription.textContent = codeSnippet.description;
    const codeSnippetCode = document.createElement('pre');
    codeSnippetCode.classList.add('p-4', 'bg-gray-900', 'text-white', 'rounded', 'text-xl');
    codeSnippetCode.innerHTML = highlightCode(codeSnippet.code);

    codeSnippetDiv.appendChild(codeSnippetTitle);
    codeSnippetDiv.appendChild(codeSnippetDescription);
    codeSnippetDiv.appendChild(codeSnippetCode);
    detailView.appendChild(codeSnippetDiv);
}

//showDetailView(exampleOne);

/*
TODO:
- Add at least one more generics example, possibly 2
- Make my list view items even smaller than currently... or maybe just make the list view be like a carousel
- Get better looking list view items that are not jammed up against the sides or each other
- Need to make the cursor pointer when hovering over the list view items
- Do something about the current title/header
- Make the detail view look better... maybe a cool background image or something like borders...
- Something should be in the detail view right when the page loads... currently it is just blank.  Maybe it is instructions to select an item from the list view?


*/

