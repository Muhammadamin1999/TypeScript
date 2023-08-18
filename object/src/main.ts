function greet1(person: {name: string; age: number}){
    return "Hello" + person.name;

}

interface Person{
    name: string;
    age: number;
}
function greet2(person: Person){
    return "Hello" + person.name;
}

type Person1 = {
    name: string;
    age: number;
}
function greet3(person: Person1){
    return " Hello" + person.name;
}

// optional properties

// interface PaintOptions{
//     shape: Shape;
//     xPos?: number;
//     yPos?: number;
// }
// function paintShape(opts: PaintOptions){}

// const shape = getShape();
// paintShape({shape});

interface PaintOpt{
    xPos?: number;
    yPos?: number;
}
function paintShape(opts: PaintOpt){
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;

    let yPos = opts.xPos === undefined ? 0 : opts.yPos;
}

// readonly property
interface SomeType {
    readonly prop: string;
}
function doSmth(obj: SomeType){
    console.log(obj.prop);
}

// index signatures

// interface StringArray{
//     [index: number]: string;
// }
// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];

interface NumberOrStringDic{
    [index: string]: number | string;
    length: number;
    name: string;

}

interface ReadonlyStringArr{
    readonly [index: number]: string;
}

// let myArr: ReadonlyStringArr = getReadOnlyStringArr()

interface SquareConfig{
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number}{
    return {
        color: config.color || "red",
        area: config.width ? config.width : 20,
    };
}

let mySquare = createSquare({color: "red",width: 100});

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
}

// interface AddressWithUnit{
//     name?: string;
//     unit: string;
//     street: string;
//     city: string; 
//     country: string;
// }

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface Colorful{
    color: string;
}

interface Circle{
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle{};

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
}

// intersection type

interface Colorful{
    color: string;
}
interface Circle{
    radius: number;
}
type ColorfulCircles = Colorful & Circle;



// interface Box {
//     contents: unknown;
// }
// let x: Box = {
//     contents: "hello",
// }

// if(typeof x.contents === "string"){
//     console.log(x.contents.toUpperCase())
// }

interface Box<Type>{
    contents: Type;
}
interface StringBox{
    contents: string;
}
let boxA: Box<string> = {contents: "hello"};
boxA.contents;

let boxB: StringBox = {contents: "wolrd"};
boxB.contents;

interface Box<Type>{
    contents: Type;
}
interface Apple{

}
type AppleBox = Box<Apple>;

// array type

function doSomething(value: Array<string>){

}

let myArray: string[] = ["hello", "world"];

doSomething(myArray);
doSomething(new Array("hello", "world"));

interface Array1<Type>{
    length: number;
    pop(): Type | undefined;
    push(...items: Type[]): number;
}

/// tuples
// tuples now how many elements it contains

function doS(pair: [string, number]){
    const a = pair[0];

    const b = pair[1];


}

doS(["hello",42]);

// destruct tuples

function doSm(stringHash: [string,number]){
    const [inputString, hash] = stringHash;
    console.log(inputString);
    console.log(hash);
}

interface StringNumberPair{
    length: 2;
    0: string;
    1: number;

    slice(start?: number, end?: number):Array<string | number>
}

// readonly tuples
function doSmt(pair: readonly[string, number]){
    
}





