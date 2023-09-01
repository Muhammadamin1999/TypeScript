// any is type for disabling anything

let example: any = "hello";
example = 7;

// unkown is similar to any but safer alternative to any
// you can't use directly the value which unknown is assigned 
// you should check it with if (type of value )

let value: unknown;
value = "hello";

if(typeof value === "string"){
    console.log(value.toLowerCase);
}

// never is used when the value that will never occur
// it is used in infinite loop or has some other behaviour that prevents a normal return
function infiniteLoop(): never{
    while(true)
    {}
}

function throwerror(message: string): never{
    throw new Error(message);
}
// array

const Name: string[] = [];
const Numbers: number[] = [];
Name.push("hello");

// readonly method

const ReadOnly: readonly string[] = ["dylan"];

// now we can't assign anything

// there is also a difference assigning a value to let and const 
// const keeps the value as type

const numbersa = 5
// from now on type of numbersa is 5

// tuples are typed array with pre-defined length and types for each index

let ourTuple: [number, string, boolean]

ourTuple = [5,"hello", true];

// if you initialize incorrectly it says, initialized incorrectly

// tuples can also be in readonly mode

const ourReadOnlyTuples: readonly[number, boolean, string]=[5,true,"hello"];

// named tuples

const graph: [x: number, y: number] = [55.2,33.3];

// destructing tuples
const graph1: [number, number] = [55.4,33.2];
const [a,b] = graph;

const car: {type: string, model: string, year: number} = {
    type: "toyota",
    model: "Corolla",
    year: 2003
}

// optional property in obj

const cars:{ type: string, millege?: number}
={
    type: "toyota",
};

cars.millege = 2000; // no error cause millege is optional

// index signature 

const nameAgeMap: {[index: string]: number} = {}
nameAgeMap.Jack = 25;
//nameAgeMap.Mark = "Fiftty"// gives an error string not assignable

// enum is a special class that represents a group of constants(unchangable variables)

// enums come in two flavors string and numeric

enum Statusodes{
    NotFound = 404,
    Success = 200,
    Accepted = 2002,
    Badrequest = 400
}

console.log(Statusodes.NotFound);

// string enums

enum Directions{
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}

// types Allies allow defining types with a custom name used for string, object and arrays

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const card: Car = {
    year: carYear,
    type: carType,
    model: carModel
}
// interfaces like types but used for obj
// extending interfaces
interface Rectangle{
    height: number,
    width: number
}
interface ColoredRectangle extends Rectangle{
    color: string
}
const rectangle: Rectangle = {
    height: 20, 
    width: 10
    
}
const coloredRectangle: ColoredRectangle={
    height: 20, 
    width: 10,
    color: "red"
}

// type aliases help to give custom names to types
 type Points ={
    x: number,
    y: number
 }

 const points: Point = {x: 10, y: 20};

 // as function signatures

 type Mathoperation = (a: number, b: number)=> number;

 const adding: Mathoperation = (a,b)=> a+b;

// optional params

function addition(a:number, b:number,c?:number){
    return a + b + (c||0);
}

// default params

function pow(value: number, exponent: number = 10){
    return value ** exponent;
}
 
// named params

function divide({dividend, divisor}:{dividend: number, divisor: number}){
    return dividend / divisor;
}

// rest params

function examples(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((p,c)=> p + c,0);
}

type Negate = (value: number) => number;

const negateFunction: Negate = (value)=> value * 1;
// casting is a ovveriding a type
// first option to cast with as

let h: unknown = "hello";
console.log((x as string).length); // it shows an error; as x is string here

// casting with <>

let g: unknown = "hello";

console.log((<string>x).length);

// force casting

let j = "hello";
//console.log(((j as unknown)as number).length)
 
// class

// class Persons{
//     namely: string
// }
// const person3 = new Persons()
// person3.namely = "Joe"

const  helloWorld = "hello world";
 let Objs: number = {
    w: 10,
    r: 12
}
interface Window {
    title: string;
  }
  
  interface Window {
    ts: TypeScriptAPI;
  }
  
  const src = 'const a = "Hello World"';
  window.ts.transpileModule(src, {});


