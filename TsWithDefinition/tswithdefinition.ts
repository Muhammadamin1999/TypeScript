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




