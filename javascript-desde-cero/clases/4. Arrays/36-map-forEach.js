// Ambos iteran (recorren) todos los elementos del array

// Metodo map(). No modifica array original - Inmutabilidad
// Funcion para cada elemento array
// Crea array con resultados

const numerosArray = [2,3,4,5,6,7,8,9]

const numerosSquare = numerosArray.map(num => num * num)

console.log(numerosSquare)

// Metodo forEach(). Funcion para cada elemento array
// NO Crea array con resultados

numerosArray.forEach(int => 
    {   
        factor = int
        for(i=int-1; i!=0;i--)
        {
            factor = factor * (i)
        }
        console.log(factor)

    })


// EJERCICIO: CONVERSION FAHRENHEIT A CELCIUS

const arrayFahrenheit = [-40, 40, 80, 120]

arrayFahrenheit.forEach(nFahrenheit =>
    {
        nCelcius = (5/9 * (nFahrenheit - 32)).toFixed(2)

        console.log(`--------------------- \nTemperatura Fahrenheit (Original): ${nFahrenheit} | Temperatura Celcius (Conversion): ${nCelcius}`)
    })

let total=0

arrayFahrenheit.map(num => {total += num; })

console.log(`\nSuma temperatura Fahrenheit: ${total}`)