// Type Casting Explicito

const string = '24'
const integer = parseInt(string) //Num entero
console.log(integer)
console.log(typeof integer)

const string2 = '24.2424'
const floatr = parseFloat(string2) //Num float, decimal
console.log(floatr)
console.log(typeof float)

// Type Casting Implicito

const suma = '5' + 3
console.log(suma) //Se concantena el 5 string, con el 3 int. Formando 53 string
console.log(typeof suma) //Da string. 53

const suma2 = '5' + true
console.log(suma2) //Se concantena el 5 string, con el true booleano. Formando 5true string
console.log(typeof suma2) //Da string. 5true

const suma3 = 5 + true
console.log(suma3) //Se suma el 5 int, con el true booleano (1). Formando 6 int
console.log(typeof suma3) //Da int. 6

// Ejercicio: Implicito
// Entendiendo cuando concadena y cuando suma

const valorString = '111'
const valorInt = 222
const valorBoolean = true

console.log('------------------')

console.log(valorString+valorString) //Concatena - 111111
console.log(valorString+valorInt) //Concatena - 111222
console.log(valorString+valorBoolean) //Concatena - 111true

console.log(valorInt+valorInt) //Concatena - 444
console.log(valorInt+valorString) //Concatena - 222111
console.log(valorInt+valorBoolean) //Concatena - 223

console.log(valorBoolean+valorBoolean) //Concatena - 2
console.log(valorBoolean+valorInt) //Concatena - 223
console.log(valorBoolean+valorString) //Concatena - true111