// without return type also typescript infers the return type
function add(x: number, y: number) {
  return x + y;
}

function hello(name:string="taklu"):void {
  console.log(`Hello ${name}`);
}

function greet(name: string, age?: number):void{
  if(age){
    console.log(`Hello ${name}, you are ${age} years old.`);
  }
  else{
    console.log(`Hello ${name}`);
  }
}

function sumAll(...numbers: (string|number)[]):number {
  if(typeof numbers[0] === "string") return 0;

  return (numbers as number[]).reduce((acc, curr) => acc + curr, 0);
}

function toArray(x: string): string[];
function toArray(x: number): number[];

function toArray(x: string | number): string[] | number[] {
  if (typeof x === "string") {
    return x.split(""); 
  }
  return [x]; 
}

function format(input: string | number): string | number {
  if(typeof input === "string") {
    return input.toUpperCase();
  }

  return input.toFixed(2)
}

function isEven(n: number): boolean{
  if(n % 2 === 0) return true;
  let i:number = 3;
  while(i){
    process.stdout.write(`${i}`);
    i--;
  }
  return false;
}

hello();
greet("Alice", 30);
greet("Bob");
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll("hello"));
console.log(add(2, 3));
console.log(toArray("hello"));
console.log(toArray(42));

console.log(format("hello"));
console.log(format(3.1234));

console.log(isEven(11));

type signal = "start" | "stop" | "pause";

// let action: signal = "pause";
let action: signal = "start";

// Add a never case to ensure exhaustiveness.
switch(action){
  case "start":
    console.log("Machine started");
    break;
  case "stop":
    console.log("Machine stopped");
    break;
  default:
    const exhaustiveCheck: never = action;
    throw new Error(`Unhandled case: ${exhaustiveCheck}`);
  
}

// Generic function- a function that works with any data type
function applyTwice<T>(fn: (x: T) => T, val: T): T {
    return fn(fn(val));
}

const numResult = applyTwice((n: number) => n * 2, 5);
console.log(numResult); 

const strResult = applyTwice((s: string) => s + "!", "Hi");
console.log(strResult);

// Array Functions

const square = (n: number): number => n * n;
console.log(square(5));


const numbers: number[] = [1, 2, 3, 4, 5];

const squaredNumbers: number[] = numbers.map(square);
console.log(squaredNumbers);

const evenNumbers: number[] = numbers.filter(n => n%2 === 0);
console.log(evenNumbers);

const sumExplicit: number = numbers.reduce((sum: number, n: number): number => sum + n, 0);
console.log(sumExplicit);
