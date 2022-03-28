const resultadoEcuacion = x => {
    return Math.cos(x) + 2 * x - 3
}

const biseccion = (intervalo, iteraciones) => {

    let numIteracion = 0

    let error = 0

    let bis

    while (numIteracion < iteraciones) {
        const ecuacionIntervalo0EsPositiva = resultadoEcuacion(intervalo[0]) > 0
        const ecuacionIntervalo1EsPositiva = resultadoEcuacion(intervalo[1]) > 0


        bis = (intervalo[0] + intervalo[1]) / 2

        const ecuacionBisEspositiva = resultadoEcuacion(bis) > 0

        if (ecuacionBisEspositiva) {
            if (ecuacionIntervalo0EsPositiva){
                intervalo[0] = bis
            }

            if (ecuacionIntervalo1EsPositiva){
                intervalo[1] = bis
            }
            
        } else{
            if(!ecuacionIntervalo0EsPositiva){
                intervalo[0] = bis
            } 
            if (!ecuacionIntervalo1EsPositiva){
                intervalo[1] = bis
            }
        }

        numIteracion++
    }

    
    error = Math.abs((intervalo[0] - intervalo[1]) / intervalo[0])

    return [bis, error]
}

const [resultado, error] = biseccion([1, 2], 20)

console.log(resultado)
console.log(error)

