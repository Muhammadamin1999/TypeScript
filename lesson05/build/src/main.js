"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // example for less specific type
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be carefull because TS sees no problem but string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// unknown
10;
// te DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
