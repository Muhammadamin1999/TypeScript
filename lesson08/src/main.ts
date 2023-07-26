const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean =>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)

}

const isTrue = <T>(arg: T): {arg: T, is: boolean}=> {
    if(Array.isArray(arg)&& !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

//////// with interface

interface BoolCheck<T>{
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> =>{
    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasID{
    id: number
}
const processUser = <T extends HasID>(user: T):T =>{
    return user
}
console.log(processUser({id:1, name: 'Dave'}))

const getUserProperty = <T extends HasID, K extends keyof T>(users: T[], key:K): T[K][]=>{
    return users.map(user => user[key])

}

class Stateobj<T>{
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state(): T{
        return this.data

    }
    set state(value: T){
        this.data = value
    }

}

const store = new Stateobj("John")
console.log(store.state)
store.state = "Dave"

const myState = new Stateobj<(string|number|boolean)[]>([15])
