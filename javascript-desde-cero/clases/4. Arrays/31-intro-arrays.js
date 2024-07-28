// 1. Sintaxis completa

const array01 = new Array(1,2,3,4,5)
console.log(array01)

const array02 = Array(6,7,8,9,10)
console.log(array02)

// 2.Sintaxis literal

const array03 = ['a','b','c'] //Los square brackets indican que es un array
console.log(array03)

const arrayVariado = [

    'Texto',
    true,
    10,
    {
        nombre: 'Objeto en array', edad: 'XD'
    }
] //Los arrays pueden almacenar distintos tipos de datos primitivos o complejos en si
console.log(arrayVariado)

const datoCeroArray = arrayVariado[0]
console.log(datoCeroArray)
console.log(arrayVariado.length)

let arraySpread = [...arrayVariado,1,23,34123,4,24,234] //Spread operator. En este caso crea una copia del arrayVariado y le agrega nuevos indices.
console.log(arraySpread)
