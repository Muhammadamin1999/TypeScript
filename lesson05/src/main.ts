type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific

let a: One = 'hello';
let b = a as Two;     // example for less specific type
let c = a as Three

let d = <One>'world'
let e = <string>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | 
string =>{
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string
// be carefull because TS sees no problem but string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number
// unknown

(10 as unknown) as string

// te DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img') 
img.src 
myImg.src


