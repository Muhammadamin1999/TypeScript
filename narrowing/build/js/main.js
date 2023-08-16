"use strict";
// narrowing reducing the options 
// function padLeft(padding: number | string, input: string): string{
//    return " ".repeat(padding) + input;
// }
// it gives an error as padding number or string
// to correct this we use narrowing
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
/// control flow
function example() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
function move(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
// instance of
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Assignments
// when we assign to any variable, TS looks right then narrow left side
let x = Math.random() < 0.5 ? 10 : "Hello";
x = 1;
console.log(x); // x is number here
x = "goodbye";
console.log(x); // x is string here.
// type predicate
function isFish(pet) {
    return pet.swim !== undefined;
}
// here is pet is Fish is our type predicate . a pridicate takes the form parametrName is Type
// where parameterName must be the name of param from current func signature.
// const zoo: (Fish | Bird)[] = [getSmallPet(),getSmallPet(),getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish=>{
//     if(pet.name === "sharkey") return false;
//     return isFish(pet);
// })
