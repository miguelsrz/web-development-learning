// 1. Entero y Decimal

const entero = 35
const decimal = 2.74
console.log(typeof entero, typeof decimal)

// 2. Notacion cientifica 

const cientifico = 5e3 //Daria igual a 5000

// 3. Infinito y Nan (Not a number)

const infinito = Infinity
const noEsNumero = NaN

// Operaciones basicas

const suma = 1 + 1
const resta = 1 - 1
const multi = 2 * 2
const division = 4 / 2

// Operacion: Modulo (Residuo) y Potencia

const modulo = 18 % 8 // Da 2
const potencia = 3 ** 3


// Precision con metodo .toFixed()

const resultado = 0.1 + 0.2

console.log(resultado) // Muchos decimales
console.log(resultado===0.3) // Dara false en este caso, no siempre es asi. TENER MUCHO CUIDADO

console.log(resultado.toFixed(1)) // Un decimal

// Operacion: Raiz, valor absoluto y numero random

const raiz = Math.sqrt(625)
const vAbsoluto = Math.abs(-234)
const aleatorio = Math.random(1, 10)

console.log(raiz)
console.log(vAbsoluto)
console.log(aleatorio)