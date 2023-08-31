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








