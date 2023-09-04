// default value for generics

// function defaultValue<T = string>(value: T); T{
//  return value;
// }

// const result1: string = defaultValue("hello");
// const result2: number = defaultValue(42);
// const result3: boolean = defaultValue(true);

// scope of generics

function identity<T>(arg: T): T{
    return arg;
}
const result: string = identity("hello");
//const value: T = identity("hello"); // T only is accesible inside

// constrains on generics

interface Printable{
    print(): void;
}

function printValue<T extends Printable>(value: T){
    value.print();
}

class MyClass implements Printable{
    print(): void {
        
    }
}
const instance = new MyClass();
printValue(instance);

// map

const originalDictionary = {
    one: 1, 
    two: 2,
    three: 3
}
const transformedDictionary = Object.fromEntries(
    Object.entries(originalDictionary).map(([key, value])=>[key, value * 2])
)

// filter method

const originalDictionary2 = {
    one: 1, 
    two: 2,
    three: 3,
    four: 4
}

const filteredDictionary = Object.fromEntries(Object.entries(originalDictionary).filter(([key,value])=> value % 2 === 0))

// reduce method

const originalDictionary3 = {
    one: 1, 
    two: 2,
    three: 3
}

// const sum = Object.entries(originalDictionary).reduce(accumlator,[key,value])=> accumlator + printValue,0

