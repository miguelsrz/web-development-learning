// CREANDO UN STRING

// 1. Operando +

const lectura = 'los Juegos Olimpicos'
const numero = 17
const mensajeCompleto = 'Esta es la lectura numero ' + 17 + ' que habla acerca de ' + lectura
console.log(mensajeCompleto)

var myDate = "19" + "67";
console.log(typeof myDate)
console.log(myDate)


// 2. Template literals

const nombre = 'Miguel Angel'
const edad = 17
const ciudad = 'Bogota'
const informacionPersonal = `Hola! Mi nombre es ${nombre}, tengo ${edad} años y nací en la ciudad de ${ciudad}`
console.log(informacionPersonal)

// 3. join()

const mascotas = ['Sam', 'Sem', 'Sim', 'Som', 'Sum']
console.log('Mis mascotas son:' , mascotas.join(', '))

// 4. concat()

let h1 = 'Musica'
let h2 = 'Deportes'
let h3 = 'Series'
let h4 = 'Programacion'

const hobbies = 'Mis hobbies favoritos son: ' .concat(h1, ', ', h2, ', ', h3, ', ', h4) + '\n'
console.log(hobbies)

/*
Caracteres de escape:

El \ sirve para solucionar problemas con comillas

*/

const barraInvertida = 'Hello I\'m Miguel'


// Escritura de Strings largos - Poemas - /n

const poema = 'Las rosas son rojas \n' +
              'Las violetas son azules \n' +
              'Caracter inesperado \n' +
              'En la linea 86 \n'

console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86'

console.log(poema2)

