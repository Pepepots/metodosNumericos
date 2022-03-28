const divicion = (dividendo, divisor) => { 
    let cosiente = 0
    let decimales = 0
    while (dividendo >= divisor) {
        dividendo -= divisor
        cosiente++
    }

    if (dividendo > 0){
        dividendo = dividendo * 1000
        while (dividendo >= divisor) {
            dividendo -= divisor
            decimales++
        }
    } 
    return cosiente + '.' + decimales
}

console.log(divicion(2,2))
console.log(divicion(5,2))
console.log(divicion(9,3))
console.log(divicion(8,3))
