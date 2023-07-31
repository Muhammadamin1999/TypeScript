// three types 
// boolean, string, number
// there is also any, it prevents typechecking
let obj: any ={ a:1};

// type annotain in TS is explicitly declaring types.
let age: number;
let name1: string;
let isStudent: boolean;

// in function you should write what they accept and what they return

function add(a: number, b: number): number{
    return a+b;
}

// in anonymous function it thinks params of fun are automatically given types

const names = ["Alice", "Bob", "Eve"];

names.forEach(function(s){
    console.log(s.toUpperCase());
});

names.forEach((s)=>{
    console.log(s.toUpperCase());
});

// obj type
// paparm's type annotation  is an obj type

function printCoord(pt:{x: number, y: number}){
    console.log("the coordinate a is "+pt.x);
    console.log("the cordinate y is" + pt.y);
}

printCoord({x:3, y: 7});

// we should use ; when use obj as an param

// Optional Properties 

function printName(obj: {first: string; last?: string}){

}
// both ok

printName({first: "bob"});
printName({first: "alice", last: "Alison"});

// working with union types

function printID(id: number | string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
};
// use if to check when u use | 
// example with array

function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        // here type is string[]
        console.log("Hello, " + x.join("and"));
    }else{
        // here type is string
        console.log(x);
    }
}

// if every member in a union has a property in common , you can use
// the property without narrowing

function getFirstThree(x: number[] | string){
    return x.slice(0,3);
}
// type alias

// type alias is creating new name for an existing type

// basic type alias
type ID = number;
let userID: ID = 4;

// union types with type alias

type Status = string | number | boolean;
let userStatus: Status = "hello";

type Person = {
    name: string;
    age: number;
}
let person: Person = {name: 'ali', age: 26};


// function type alias
type mathOp = (x: number, y: number)=> number;
let add2: mathOp = (a,b) => a + b;

// type Userinput = string;

// function sanitizeInput(str: string): Userinput{
//     return sanitize(str);
// }
// let userInput = sanitizeInput(getInput());
//  userInput = "new input";

// Interface
// interface decloration is another way to name an obj type

interface Point {
    x: number;
    y: number;
}

function printCord(pt:Point){
    console.log("x is " + pt.x);
    console.log("y is " + pt.y);
}

printCord({x:100, y:100});

// interface vs type

interface Animal {
    name: string;
}

interface Bear extends Animal{
    honey: boolean;
}

// const bear = getBear();
// bear.name;
// bear.honey;

/////////////

type AnimalT = {
     name: string;
}

type BearT = Animal &{
    honey: boolean;
}
// const bear = getBear();
// bear.name;
// bear.honey;

// difference adding new fields to an existing interface is ok
// type cannot be changed

// interface windowI{
//     title: string;
// }
// interface windowI{
//     ts: number;
// }

// type window = {
//     title: string;
// }
// type window = {
//     ts: number;
// }

// type gives an error.

// type assertion is telling the compiler explicitly what the type is
// means i know better than you
// we use as

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

// but not allowed 
// const x = "hello" as number

let changeString = "hello ";
changeString = "ola";
changeString;
// ts shows let changeString: string cause it is changeable
// but const

const hello = "hello";
hello;
// it shows const hello: "hello" cause it is unchangeable 

let x: "hello" = "hello";
// ok

x = "hello";
//... x: "hello"

//x = "howdy" // gives an error  x: is " hello"

function printText(s: string, alignment: "left" | "right" | "center"){

}
printText("hello world", "left");
//printText("mate", "centre") // it gives an error cause it should be center

interface Options{
    width: number;
}
function configure(x: Options | "auto"){

}
// configure(...) is not number type or word auto it gives an error

// literal interface ni oddiydan farqi unda literal type boladi
// va nimani assign qilyotganimiz aniq boladi
interface Status1  {
    status: "active" | "inactive";
}

interface Animals{
    x: string;
}

// farqi Status1 aniqroq nima assign bolyotgani va Animals da shunchaki x va type

//strictNullChecks

// agar null yoki undefined dan foydalanmoqchi bolsak 
// check qilish kk bunda narrowing dan foydalanamiz

function doSomething(x: string | null){
    if(x === null){
        // do smth
    }else{
        console.log("hello " + x.toUpperCase());
    } 
}

// null assertion operator postfix !
// it removes null or undefined withhout using any method

function liveD(x?: number | null){
    // no error
    console.log(x!.toFixed());
};
// less common primitives

// bigint

// creating bog int via BigInt() fn
// const oneHundered: bigint = BigInt(100);
// //creating via literal syntax

// const another: bigint = 100n ;

// const firstName = Symbol("name");
// const secondName = Symbol("name");
// if(firstName === secondName){}
    // comparision not possible, they have no overlap

