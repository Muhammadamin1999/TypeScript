const echo = <T>(arg: T): T => arg  // example for generics now it works with any type

const isObj = <T>(arg: T): boolean=>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))

const isTrue = <T>(arg: T):{arg: T, is: boolean}=>{
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(0));

// with an interface

interface Boolcheck<T>{
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): Boolcheck<T>=>{
    if(Array.isArray(arg) && !arg.length){
        return {value:arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasID{
    id: number
}

const proccessUser = <T extends HasID>(user: T) :T =>{
    return user;
}

console.log(proccessUser({id: 1, name: 'Dave'}))


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][]=>{
    return users.map(user => user[key])
}



