// arrays

let stringArr: string[] = ["one","hey","Ann"];

let guitar: (string | number)[] = ["star","less", 234];

let mixedDate: (string | number| boolean)[]= ["evh",1984, true];

let test: any[];
let bands: string[] = [];
bands.push("Van Helen");

// Tuple aynan nima assign qilish tartibi bilan
let myTuple: [string, number, boolean] = ["Dave", 12, true];

let mixed = ["John",1, false];

// objects

let myObject: object;
myObject = [];
console.log(typeof(myObject))  // object

myObject = {};

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};

exampleObj.prop2 = false;

// type Guitarist = {
//     name: string,
//     active?: boolean,          // ? it is for optional.
//     albums: (string | number)[]
// }
interface Guitarist  {
    name: string,
    active?: boolean,          // ? it is for optional.
    albums: (string | number)[]
}

// interface works like a type difference 
//interface for class, 

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984,234,'ou3'],
}

let JP: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['I',"ii",'iv'],
}
evh = JP // it accepts cause they are same type

// you can't add other property
//evh.years

const greatGuitarist = (guitarist: Guitarist)=>{
    return `hello ${guitarist.name}`
}

// enums
// unlike most TS features, enums are not a type-level addition to
// JS but smth added to the language and runtime.
enum Grade{
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U) // 1