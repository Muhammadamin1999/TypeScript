"use strict";
// static type checking is for detecting the types of variables, function params
// return values during compile time.
// function add(a1:number, a2: number): number {
//     return a1 + a2;
// }
// let a1: number = 5;
// let a2: number = "hello"; // type error
// let result: number = add(a1,a2);
// non-exception failure it resers to, there is no special exception error but code 
// still fails to complete successfully.
// function findIndex(arr: number[], target: number): number {
//     const index = arr.indexOf(target);
//     return index !== -1 ? index : -1;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   const index = findIndex(numbers, 6);
//   if (index !== -1) {
//     console.log("Element found at index:", index);
//   } else {
//     console.log("Element not found.");
//   }
// explicit types in js it means clear, exact
let num1 = 5; // it is implicit
let num2 = 16; // it is explicit
let str = "hello world";
let isTrue = true; // only true or false allowed
// function params
// it is implicit
// function add(c,d){
//     return c + d;
// }
// it is explicit
function add1(c, d) {
    return c + d;
}
// obj and arrays
const nums = [1, 2, 3];
const person = { name: 'Alice', nums: 2 };
// explicit 
const names = ['a', 's', 'd'];
const user = { name: "li", age: 24 };
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello():void{
//         console.log(`${this.name}`)
//     }
// }
