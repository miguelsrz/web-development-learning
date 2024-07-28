// Strings primitivos - Inmutables

const stringPrimitivo = 'Este es un String Primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('Este es un String Primitivo Numero ')
console.log(typeof stringPrimitivo2)


// Strings objetos/complejos - Mutables

const stringObjeto = new String('Este es un String Objeto/')
console.log(typeof stringObjeto)


// Acceso a caracteres - Metodos populares de string

const mensaje = 'Hola! Este es un mensaje de ejemplo'

console.log(mensaje[3])

console.log(mensaje.length)

console.log(mensaje.includes('ejemplo'))
console.log(mensaje.includes('exemplo'))

console.log(mensaje.indexOf('Este'))
console.log(mensaje.indexOf('Eeste'))

console.log(mensaje.startsWith['Hol'])
console.log(mensaje.endsWith('de ejemplo'))

console.log(mensaje.slice(0, 10))
console.log(mensaje.slice(10))

console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

console.log(mensaje.replace('mensaje','MENSAJE JAJAJA'))
console.log(mensaje.repeat(5))

console.log(mensaje.split())




