// --------------------------------------------------------------------------
// Spread operator: Desestructura array en elementos individuales
// --------------------------------------------------------------------------
// 1. COPIAR ARRAY

const arrayOriginal = [1,2,3,4,5,6,7,8,9]
const arrayNuevo = [...arrayOriginal]
console.log(arrayOriginal)
console.log(arrayNuevo)

// --------------------------------------------------------------------------
// 2. COMBINAR ARRAYS

const arrayN1 = [11,12,13]
const arrayN2 = [15,16,17]
const arrayCombinados = [...arrayN1, ...arrayN2]
console.log('--------')
console.log(arrayCombinados)

// --------------------------------------------------------------------------
// 3. CREAR ARRAY CON ELEMENTOS ADICIONALES
const arrayBase = [21,22,23,24]
const arrayExpandido = [...arrayBase, 25,26,27]
console.log('--------')
console.log(arrayExpandido)

// --------------------------------------------------------------------------
// 4. ARRAY COMO PARAMETRO DE FUNCION

console.log('--------')
const arrayN3 = [31,32,33,34,35]
function funcionMultiplicacion(a,b,c)
{
    const resultado = a*b*c
    console.log(resultado)
}

funcionMultiplicacion(...arrayN3)

// --------------------------------------------------------------------------
// 5. PARAMETROS DE FUNCION COMO ARRAY

console.log('--------')
function potenciaNumeros(...array)
{
    array.forEach(num => console.log(num*num))
}

potenciaNumeros(1,2,3,4,5,6,7,8,9,10)

// --------------------------------------------------------------------------
// 6. COMBINAR OBJETOS

const objetoA = 
{
    n1: 1,
    n2 : 2,
    n3: 3
}

const objetoB = 
{
    n4: 4,
    n5 : 5,
    n6: 6
}

console.log('--------')
const objetosCombinados = {...objetoA, ...objetoB}
console.log(objetosCombinados)