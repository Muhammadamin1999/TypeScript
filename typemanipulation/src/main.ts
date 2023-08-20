// generics - > types which take perametres
// keyof type operator -> using keyof operator to create new types
// typeof type operator -> using typeof operator to create new types
// indexed access types -> using type['a] syntax to access a subset of a type
// conditional types -> types which act like if statements in the type system
// mapped types -> creating types by mapping each property in an existing type
// template literal types -> mapped types which change properties via template literal strings

// generics

function identity(arg: number): number{
    return arg;

}

// using any

function identify(arg: any): any{
    return arg;
}

// using type

function ident<Type>(arg: Type): Type{
    return arg;
}

//let output = identity<string>("myString")

function loggingIdentity<Type>(arg: Type[]): Type[]{
    return arg;
}

function loggingidentity<Type>(arg: Array<Type>): Array<Type>{
    return arg;
}

function identitty<Type>(arg: Type): Type{
    return arg;
}

let myIDi: <Type>(arg: Type) => Type = identitty;

function idenfn<Input>(arg: Input): Input{
    return arg;
}
let myIdentityy: <Input>(arg: Input) => Input = idenfn;

function idenFn<Type>(arg: Type): Type{
    return arg;
}

let myIDN: {<Type>(arg: Type): Type} = idenFn;


// write with interface 



// type
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
     

 
type I2 = Person[keyof Person];
     

 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
   
  type Person3 = typeof MyArray[number];
         
  type Person1 = {
      name: string;
      age: number;
  }
  type Age1 = typeof MyArray[number]["age"];
       
 
  // Or
  type Age2 = Person["age"];
        



