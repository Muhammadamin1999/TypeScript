// type alliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

//interface PostId = stringOrNumber //we cannot assign

// literal types

let myName: 'Dave';
//myName = 'John'; //cannot assign cause myName's type is Dave

let userName: 'Dave' | 'John' | 'Amy';

//userName = 'Rachel'// it cannot be it can be only above three
userName = 'Amy';


// functions

const add = (a:number,b:number): number=>{
    return a + b;
}
const logMsg = (message: any): void =>{
    console.log(message);
}

// void is for function which returns nothing

logMsg("hello");

logMsg(add(2,3));

let subtract = function(c: number, d: number):number {
    return c-d;
}

//type mathFunction = (a: number, b: number)=> number
interface  mathFunction  {(a: number, b: number): number}
let multiply: mathFunction = function(c,d){
    return c*d;
}

logMsg(multiply(2,3));

// optional params
// when we use optional ? we should use type guard
const addAll = (a:number, b: number, c?:number):number=>{
    if(typeof c !="undefined")
    {
        return a + b + c;
    }
    return a + b;
    
}
// default params
const sumAll = (a:number, b: number, c:number = 2):number=>{
    if(typeof c !="undefined")
    {
        return a + b + c;
    }
    return a + b;
    
}

// rest parameters
const total = (a: number,...nums: number[]): number =>{
    return a + nums.reduce((prev,curr)=> prev + curr);
}

logMsg(total(1,2,3,4));

const createError = (errMsg: string)=>{
    throw new Error(errMsg);
}
const infinite = ()=>{
    let i: number = 1;
    while(true){
        i++
        if(i>100) break;
    }
}

// use of never type
const numberOrString = (value: number | string): string=>{
    if(typeof value === 'string') return 'string'
    if(typeof value === "number") return "number"
    return createError("this should never happen")
}

// custom type guard

const isNumber = (value: any): boolean =>{
    return typeof value === 'number'
    ? true : false
}


