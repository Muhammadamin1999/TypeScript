class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
   
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };


  let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal {
    numLegs: number = 4;
  }
   
  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
   
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;

  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<typeof f>;
      
  type P = {
      x: number;
      y: number;
  }


  type I1 = Person["age" | "name"];
     
type I1 = string | number
 
type I2 = Person[keyof Person];
     
type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
     
type I3 = string | boolean

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
   
  type Person = typeof MyArray[number];
         
  type Person = {
      name: string;
      age: number;
  }
  type Age = typeof MyArray[number]["age"];
       
  type Age = number
  // Or
  type Age2 = Person["age"];
        
  type Age2 = number
  

