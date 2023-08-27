type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>'world'
const addOrConcat = (a: number,b: number, c: 'add' | 'concat'): number | string =>{
    if(c === 'add'){
        return a + b;
    }else{
        return '' + a + b;
    }

}

let myVal: string = addOrConcat(2,2,'concat') as string

// be careful ts sees no problem but a string is returned
let nextval: number = addOrConcat(2,2,'concat') as number

(10 as unknown) as string

// the DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#img')as HTMLImageElement

myImg.src

