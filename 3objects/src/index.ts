// 1. Object Types

interface Person {
  name : string;
  age: number;
  middleName?: string;
  readonly id: string;
}

let john: Person;

// john = "taklu"; //string cann't be assigned to Person

john = {
  name: "John",
  age: 30,
  id: "12345"
}

let jonny : Person = {
  name: "Jonny",
  age: 28,
  middleName: "M",
  id: "67890"
};

console.log(john)
// john.id = "54321"; // Error: Cannot assign to 'id' because it is a read-only property.


// 2) Interfaces vs Type Aliases

interface ElectricCar {
  batteryCapacity: number;
}

interface Car extends ElectricCar {
  make: string;
  model: string;
};

type Bike = {
  make: string;
  gears: number;
};

// Intersection: a type that is both a Car and a Bike
type ElectricBikeCar = Car & Bike;

let ebikeCar: ElectricBikeCar = {
  make: "Tesla",
  model: "Model X",
  batteryCapacity: 100,
  gears: 5
}

console.log(ebikeCar)

let myCar : Car = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacity: 75
}

console.log(myCar)

// 4) Index Signatures

interface Dictionary {
  [key: string]: string | number;
}

let translations: Dictionary = {
  "en": "Hello",
  "es": "Hola",
  "fr": "Bonjour",
  "words": 1000
};

console.log(translations)

// Partial<Person> makes all properties optional
let partialPerson: Partial<Person> = {
  name: "Alice"
};

// Pick<Person, 'name' | 'age'> picks only name and age properties
let pickedPerson: Pick<Person, 'name' | 'age'> = {
  name: "Bob",
  age: 25
};

//Omit<Person, 'id'> omits the id property
let omittedPerson: Omit<Person, 'id'> = {
  name: "Charlie",
  age: 40
};

console.log(partialPerson, pickedPerson, omittedPerson);


// Record<K, T> creates an object type with keys of type K and values of type T
let products: Record<string, number> = {
  "apple": 1.2,
  "banana": 0.8,
  "orange": 1.5
}

console.log(products);


// Map<K, V> is a built-in TypeScript type for key-value pairs
let mapping: Map<string, Person> = new Map();

mapping.set("captain", john);
mapping.set("major", jonny)

console.log(mapping.get("captain"));
console.log(mapping.get("major"));