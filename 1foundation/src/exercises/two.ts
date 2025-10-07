// 2. Type Inference

let y = 42; // type inferred as number
// y = "taklu"; // Error: Type 'string' is not assignable to type 'number'

let z; // type inferred as any
z = "hello"; // ok
z = 42; // ok

let v : number = 45;

// 3. Type Assertions
let k: unknown = "anant";
k as number; // type assertion

console.log(k);
console.log(typeof k)


// 4. Type Narrowing
function isDate(input: unknown) {
  console.log(input instanceof Date);
}

// Examples:
const i = new Date();
const o = "2025-10-07";
isDate(i)
isDate(o)

// 5. Strict Mode

let age: number;
// console.log(age); // Error: Variable 'age' is used before being assigned.  

// -Write a function without a return type. See what TypeScript infers.
function fun(){ // inferred return type is void
  console.log("hello");
}

function fun2(): number{
  console.log("hello");
  return 1;
}
