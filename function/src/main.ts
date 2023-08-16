// function type expression
function greeter(fn: (a: string)=> void){
    fn("hello world");
}
function printToConsole(s: string){
    console.log(s);
}
greeter(printToConsole);

// call signature

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction){
    console.log(fn.description + "returned" + fn(6));
}

function myFunc(someArg: number){
    return someArg > 3;
}
myFunc.description = "default";
doSomething(myFunc);

// construct signatures

// type SomeConstruct = {
//     new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstruct){
//     return new ctor("hello");
// }

interface calOrConstruct {
    new (s: string):Date;
    (n?: number): string;
}
// generic functions
function firstElement(arr: any[]){
    return arr[0];
}

function firstElement1<Type>(arr: Type[]): Type | undefined{
    return arr[0];
}
function map<Input, Output>(arr: Input[], func: (arg: Input)=> Output): Output[]{
    return arr.map(func);
}
const parsed = map(["1","2","3"],(n)=> parseInt(n));

// constraints

function longest<Type extends {length: number}>(a: Type, b: Type){
    if(a.length >= b.length){
        return a;
    }else{
        return b;
    }
}

const longeArray = longest([1,2],[1,2,3]);

// specifying type arguments

function  combine<Type>(arr1: Type[], arr2: Type[]): Type[]{
    return arr1.concat(arr2);
}
const arr = combine<string | number>([1,2,3],["hello"]);

// writing generic function
function firstElement3<Type>(arr: Type[]){
    return arr[0];
}

function firstElement4<Type extends any[]>(arr: Type){
    return arr[0];
}

const a = firstElement3([1,2,3,4]);
const b = firstElement4([1,2,3,4]);
