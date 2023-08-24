let a: 5 | 6 | 7 // anything in {5,6,7}
let b: null // anything in {null}
let d: {
    favouriteFruit?: "pinapple" //"pineapple", undefined
}

let flexible: any = 4
flexible = "download"
flexible = window.document
flexible = setTimeout

let example: unknown = 4
example = "doe"
example = window.document
example = setTimeout

// values with an unknown type cannot be used without first applying a type guard

