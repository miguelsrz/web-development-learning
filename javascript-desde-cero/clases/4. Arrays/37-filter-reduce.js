// Iteran en el array

// Metodo filter(): Crea nuevo array con elementos que cumplan condicion

const arrayNumeros = [2,23,45,12,4,86,3,5,7,9]

const arrayDivTres = arrayNumeros.filter(num => num%3==0)

console.log(arrayDivTres)

// Metodo reduce(): Ejecuta una 'Funcion reductora', comunmente usada para almacenar
// los resultados que le aplica la funcion a cada dato. Al final
// devuelve solo un resultado

const sumaArray = [1,2,34,67,22,32,31,5321,151]

const sumaTotal = sumaArray.reduce(
    function(acumulador, valorNumero)
{
    return acumulador += valorNumero
},-5000) //El 0 es un valor que se proporciona como valor inicial 
//(En este caso seria el priemr valorNumero), despues de este valor 
//se ejecuta el reduce() con el resto de valores del array

console.log(sumaTotal)

// EJERCICIO: CALIFICACION PROMEDIA - SOLO DE NOTAS APROBADAS

const arrayCalificaciones = [50,70,86,90,100,66,23,101,74]

const arrayFinal = (arrayCalificaciones.filter(num => num>=70 && 100>=num))
console.log(arrayFinal)

const arrayPromedio = (arrayFinal.reduce((acumulador, valorNota)=> acumulador+=valorNota))/arrayFinal.length

console.log(arrayPromedio)
