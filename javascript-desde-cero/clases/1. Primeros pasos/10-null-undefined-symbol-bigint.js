// Null
const datoNull = null
console.log(datoNull)
console.log(typeof datoNull) //Se muestra como objeto, es un primitivo

// Undefined
const datoUndefined = undefined //En mi caso, el programa ni muestra que es undefined, muestra error
console.log(datoUndefined)
console.log(typeof datoUndefined) //Se muestra como undefined tambien

// Symbol: Unico y no mutable
const uniqueId = Symbol('id') // Crea dato unico, aunque tenga mismo valor en otras variables
const symbolA = Symbol(1)
const symbolB = Symbol(1)
console.log( symbolA === symbolB)

const IDPersonal = Symbol('id') //Se crea dato IDPersonal que recibe y convierte a Symbol()
let user = {} // Objeto vacio
user[IDPersonal] = 12345 //Al objeto vacio se le anade IDPersonal. Estableciendo en este caso como 12345
console.log(user) // Aparecera: [Sybol(id): 12345]


// Bigint
const datoBigint = 1023489510843104012410941029401 //Sin indicativo n
console.log(datoBigint) //No muestra el numero completo
console.log(typeof datoBigint)
 
const datoBigint2 = 1023489510843104012410941029401n //Con indicativo n
console.log(datoBigint2) // Me muestra el numero completo
console.log(typeof datoBigint2)