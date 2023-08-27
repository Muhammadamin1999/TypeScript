let stringArr = ["one","hey"];

let guitars = ['start','les paul',896];

let mixedDate = ['date',1984, true];

stringArr.push("hey")// it can accept as srr is string type

guitars[0] = 1984;
guitars.unshift('Jim');

guitars = stringArr  // it can be equal cause guitars is mixed type

let test = [];
let bands: string[] = []; // declaring arr of string
bands.push('Van halen');

// tuple
let myTuple: [string, number, boolean] = ['Dave',42,true];

let mixed = ['John', 1, false];
// in which index what type
mixed = myTuple;
myTuple[1]=42;
//myTuple = mixed it is not assignable

let myObj: object
myObj = []  // we can assign array to obj cause arr is obj type
myObj = bands;

myObj = {};


// example obj

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop2 = false; // exampleObj.prop1 always string, prop2 always boolean

type Guitarist ={
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Edide',
    active: false,
    albums: [1,2,'4']
}

let JP: Guitarist ={
    name: 'Jimmy',
    active: true,
    albums:[1,'2',3]
}

evh = JP;  // it can be cause their types match

// using Type in function
const greetGuitarist = (guitarist: Guitarist)=>{
    return `hello${guitarist.name}`;
}

interface test{
    name: string,
    active?: boolean,
    albums: number[]
}

//enums
enum Grade{
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);  // it shows 1



