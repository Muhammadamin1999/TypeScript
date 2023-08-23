function printCar(car: {
    make: string
    model: string
    year: number
    charge?: number
}){
    let str = `${car.make} ${car.model} (${car.year})`
    car.charge  // shows number or undefined

    if(typeof car.charge !== "undefined"){
        str += `//${car.charge}`
        console.log(str)
    }
}

printCar({
    make: "Honda",
    model: "Accord",
    year: 2008
})

// also works

printCar({
    make: "tesla",
    model: "model",
    year: 2020,
    charge: 200
})

