// theory
// types -> string, number, boolean

function add(a: number, b: number): number {
  return a + b;
}

const names: string[] = ["Alice", "Bob", "Charlie"];

// Contextual typing applies to arrow functions using forEach
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

function printName(obj: { first: string; last?: string }) {
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  console.log(obj.last?.toUpperCase()); // undefined
}

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

//narrow the types
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // to check for array
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

//union
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

type Point = {
  x: number;
  y: number;
};

interface PointInterface {
  x: number;
  y: number;
}
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.

function printCoordI(pt: PointInterface) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//interface and type extending
interface Animal {
  // type Animal {
  name: string; // name: string;
} // }

interface Bear extends Animal {
  // type Bear = Animal & {
  honey: boolean; // honey: boolean;
} // }

// can change the interface but cann't change the type
interface Window {
  title: string;
}

interface Window {
  ts: number;
}

const win: Window = {
  title: "TypeScript",
  ts: 123456,
};

console.log(win.title);
console.log(win.ts);

const bear: Bear = {
  name: "Winnie",
  honey: true,
};

console.log(bear.name);
console.log(bear.honey);

let numberArr: number[] = [1, 2, 3, 4, 5];

console.log(getFirstThree(numberArr));
console.log(getFirstThree("HelloWorld"));

let b: string[] = ["anant", "alice", "bob"];
let traveler: string = "john";

welcomePeople(b);
welcomePeople(traveler);

printId(101);
printId("Anant");

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// const x = "hello" as number; throughs error
const x = "hello" as any as number;

console.log(x);
console.log(typeof x); // at runtime, x is still a string
console.log(add(2, 3));

printCoord({ x: 100, y: 100 });
printCoordI({ x: 100, y: 100 });

// literal types
function printText(s: string, alignment: "left" | "right" | "center") {
  return "literal types";
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

function liveDangerously(x?: number | null) {
  // x is optional
  console.log(x!.toFixed()); // assert non null
}

// enum -> for runtime ops like comparing assigning otherwise for type only use literal types or union of literal types
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Left);
// symbols are unique and immutable
const sym1 = Symbol("id");
const sym2 = Symbol("id");
const c: bigint = BigInt(10000000000000000000000);

console.log(c);
// console.log(sym1 === sym2); // false

liveDangerously(123.456);
console.log(compare("a", "b")); // on return type
console.log(printText("Hello, world", "left"));
// printText("G'day, mate", "centre"); // Error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
