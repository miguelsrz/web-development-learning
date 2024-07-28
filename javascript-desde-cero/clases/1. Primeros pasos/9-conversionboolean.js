// Para declarar booleanos, es mejor establecer una pregunta como su nombre

const isActive = true
const hasData = true

// Conversion implicita: JS evalua el valor que se le ofrece por medio de logica

const result = 7 > 5
console.log(result) //Dara true
const result2 = 3 > 5
console.log(result2) //Dara false

const name = 'Miguel'
console.log(!!name) //El !! es como usar el objeto Boolean(), nos indica el valor en contexto booleano de una variable
//En este caso la cadena tiene contenido. Da true

// Conversion explicita: Nosotros establecemos la evaluacion. Si el valor es 0 o vacio dara false/NaN

const valor = 0
const otroValor = 9812
const valorExplicito = Boolean(valor)
const otroValorExplicito = Boolean(otroValor)

console.log(valorExplicito) //Da false. El valor es 0
console.log(otroValorExplicito) //Da true. El valor es distinto de 0