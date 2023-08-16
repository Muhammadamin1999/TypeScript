"use strict";
// function type expression
function greeter(fn) {
    fn("hello world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + "returned" + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default";
doSomething(myFunc);
// generic functions
function firstElement(arr) {
    return arr[0];
}
function firstElement1(arr) {
    return arr[0];
}
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// constraints
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longeArray = longest([1, 2], [1, 2, 3]);
// specifying type arguments
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr = combine([1, 2, 3], ["hello"]);
// writing generic function
function firstElement3(arr) {
    return arr[0];
}
function firstElement4(arr) {
    return arr[0];
}
const a = firstElement3([1, 2, 3, 4]);
const b = firstElement4([1, 2, 3, 4]);
