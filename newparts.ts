// Easier Implicit Returns for 
// undefined
// -Returning Functions
// In JavaScript, if a function finishes running without hitting a return, it returns the value undefined.

// function foo() {
//     // no return
// }
// // x = undefined
// let x = foo();
// However, in previous versions of TypeScript, the only functions that could have absolutely no return statements were void- and any-returning functions. That meant that even if you explicitly said “this function returns undefined” you were forced to have at least one return statement.

// // ✅ fine - we inferred that 'f1' returns 'void'
// function f1() {
//     // no returns
// }
// // ✅ fine - 'void' doesn't need a return statement
// function f2(): void {
//     // no returns
// }
// // ✅ fine - 'any' doesn't need a return statement
// function f3(): any {
//     // no returns
// }
// // ❌ error!
// // A function whose declared type is neither 'void' nor 'any' must return a value.
// function f4(): undefined {
//     // no returns
// }