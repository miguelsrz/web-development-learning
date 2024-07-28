//Dato primitivo - Inmutable

let numero = 23;
numero = numero + 5;
console.log(numero);

// JS Crea un nuevo valor, 28. Sin embargo este no remplaza el
// original, 23.

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

//Dato Complejo - Mutable

let usuario = { nombre: 'MIGUEL', edad: 17};
usuario.edad = 25;
console.log(usuario)

let frutas = ['pera', 'banano'];
frutas[0] = 'papaya'
console.log(frutas)



function cambiarNombre (objeto)
{
    objeto.nombre = 'Nuevo nombre - Jose Antonito';
}

let persona01 = {nombre: 'Juan Antonio'}
cambiarNombre(persona01)

console.log(persona01);

// Usan referencia a ubicaciones en la memoria, no los valores de manera directa.
// No almacena valores directamente, utiliza la referencia del objeto (Su ubicación en memoria)