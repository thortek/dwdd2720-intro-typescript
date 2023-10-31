console.log('Generics')

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