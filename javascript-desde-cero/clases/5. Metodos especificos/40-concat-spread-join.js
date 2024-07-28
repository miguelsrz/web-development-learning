// --------------------------------------------------------------------------
// Metodo concat()

const mensajeA = ['Hola','me','llamo']
const mensajeB = ['Miguel','Angel',':)']

// Metodo numero 1 de uso

const mensajeCompleto1 = mensajeA.concat(mensajeB) //mensajeA conecta con mensajeB, se guarda la union en mensajeCompleto1
console.log(mensajeCompleto1) 

// Metodo numero 2 de uso

const mensajeCompleto2 = [].concat(mensajeA,mensajeB) //Al array vacio de mensajeCompleto2 se le conecta mensajeA
// y mensajeB, y se guarda en la declaracion de mensajeCompleto2
console.log(mensajeCompleto2)
console.log(mensajeA) //Original no se afecta
console.log(mensajeB) //Original no se afecta

// --------------------------------------------------------------------------
// Spread operator: Desestructura array en elementos individuales

const arrayNumero1 = [1,2,3,4]
const arrayNumero2 = [10,20,30,40]

const arrayNumero3 = [5,6,7,arrayNumero1,8,9,...arrayNumero2]
//Array numero 1 se anexa como un solo elemento (que contiene todos los elementos de array1)
//Array numero 2 se desestructura y se anexa todos sus elementos
console.log(arrayNumero3)

// --------------------------------------------------------------------------
//Join: Concatena/une todos los elementos (cada uno convertido a string), separados por 
// lo que indiquemos

const arrayNumero4 = ['M','I','G','U','E','L']
const stringUnido = arrayNumero4.join('|')
console.log(stringUnido) //Cada letra es un string que se separa uno de otro por |
//Si es vacio no hay separacion

