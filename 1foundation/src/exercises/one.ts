// 1. Basic Types

// Switch to unknown instead of any and handle it safely.

let a: unknown = 2;

// console.log(a.toUpperCase()) // will throw error
if(typeof a === "string"){
  console.log(a.toUpperCase());
}else{
  console.log("a is not a string");
}

// Try assigning null or undefined to a string variable and observe the error.

// let b : string = null; // Error: Type 'null' is not assignable to type 'string'.
// let c : string = undefined; // Error: Type 'undefined' is not assignable to type 'string'.


//Declare a const variable and check how its type is inferred.
// hover over e and d to see the difference
let e = "hello"; 
const d = "red"; // type of d is "red" because its a const
