class Coder {
    // name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string; // adding assertion
    // adding visibility modifier so that we do not need above
    constructor(public name: string, public music: string,
        private age: number,protected lang: string = 'TS'){ //giving default value
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    public getAge(){
        return `hello iam ${this.age}`;
    }
}
const dave = new Coder('Dave','Rock',42);

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
        ){
           super(name,music,age);
           this.computer = computer;
        }
        public getLang(){
            return `I write ${this.lang}`;
        }

}

const Sara = new WebDev('Mac', 'Sara', 'Lofi',25);
console.log(Sara.getLang());

interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}
class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strum'));

/////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number{
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John');
const Steve = new Peeps("Steve");

console.log(Peeps.count);
console.log(Steve.id);

//////////////////////////
class Bands{
    private dataState: string[];

    constructor(){
        this.dataState = [];
      
    }
    public get data(): string[]{
        return this.dataState;
    }
    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value;
            
        }else throw new Error("not available")
    }
}

const MyBands = new Bands()
MyBands.data = ['neil', 'ked'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ top'];
console.log(MyBands.data);