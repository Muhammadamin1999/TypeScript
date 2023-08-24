// class Car{
//     make: string
//     model: string
//     year: number
//     constructor(make: string, model: string, year: number){
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     protected unlockAllDoors(){
//         //unlockCar(this, this.doorLockCode)
//     }
// }
// class Sedan extends Car{
//     constructor(make: string, model: string, year: number){
//         super(make, model, year)
//         //this.vinNumber
//     }
// }

// let sedan = new Car("Honda","Accord", 2017)

class Car{
    public make: string
    public model: string
    public readonly year: number
    constructor(make: string, model: string, year: number){
        this.make = make
        this.model = model
        this.year = year
    }
    protected unlockAllDoors(){
        //unlockCar(this, this.doorLockCode)
    }
}

class Base{}

class Cars extends Base{
  foo = console.log("class field")
  constructor(public make: string){
    console.log("before")
    super()
    console.log("custom")
  }
}
const c = new Cars("honda")

