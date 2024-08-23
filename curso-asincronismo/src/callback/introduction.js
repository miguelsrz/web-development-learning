// CALLBACKS: Funcion que llama a otra funcion. Manejador de eventos que devuelve llamada

function sum(num1, num2)
{
    return num1 + num2;
}

function rest(num1, num2)
{
    return num1 - num2;
}
function mult(num1, num2)
{
    return num1 * num2;
}

function div(num1, num2)
{
    return num1 / num2;
}

function calc(num1, num2, callback)
{
    return callback(num1, num2);
} // callback function

const calc1 = calc(2, 5, sum);
const calc2 = calc(2, 5, rest);
const calc3 = calc(2, 5, mult);
const calc4 = calc(2, 5, div);

console.log(calc1, calc2, calc3, calc4);

setTimeout(() => {
    console.log('-- HOLA JAVASCRIPT ')
}, 3000); // callback function

function greeting(nombre)
{
    console.log(`-- Hola ${nombre}, espero te encuentres bien.`)
}

setTimeout(greeting, 2000,'Pepe'); // callback function
// El tercer argumento es el argumento de la funcion que se pasa (greeting)