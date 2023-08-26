let myName: string ; // saying it is a string explicitly
myName = "Dave";
myName = "John"; // we can assign diffirent values

let meaning: number;
let isLoading: boolean;
meaning = 42;
isLoading = true;

let album: any;   // it allows any type of value
album = 43;
album = "hello";
album = true;
album = undefined;
album = {};


const sum = (a: number,b: number)=>{
    return a + b;
} // sum returns number

const sum2 = (a: number, b: string)=>{
    return a + b;
}
 // sum returns string


 // union type

 let postId: string | number;
 let isActive: number | boolean | string;


 // regular expressions

 let re: RegExp = /\w + /g;








