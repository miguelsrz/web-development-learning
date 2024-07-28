// PASO POR VALOR

let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c)

a = 10;
b = 'Miguel';
c = undefined;

console.log(x, y, z, a, b, c)

function sumarValor(x)
{
    x = x + 5
    console.log(x)
}

sumarValor(a)
console.log(a, 'fuera de funcion')

// PASO POR REFERENCIA

let deportes = ['futbol']
deportes.push('baloncesto')
copiaDeportes = deportes
console.log(deportes, copiaDeportes)

copiaDeportes.push('voleyball tenis')
console.log(deportes, copiaDeportes)

let d = [20]

function añadirValor(x)
{
    x.push(30)
    console.log(x)
}

añadirValor(d)
console.log(d, 'fuera de funcion')

