const fnAsync = () => {
    return new Promise((resolve, reject) => // Nueva promesa
    {
        (true) // Condicional siempre es true
        ? setTimeout(()=> resolve('Async result!'), 1500) // SetTimeout para resolver la funcion que devuelve texto
        : reject(new Error('Error...')); // En caso de error
    })
}

const anotherFn = async () => 
{
    const awaitFn = await fnAsync(); // Funcion espera que se complete la otra funcion antes de seguir
    console.log('2A. ' + awaitFn);
    console.log('2B. anotherFn Message!'); // Por eso se mantiene orden al imprimir
}

console.log('1. BEFORE');
anotherFn();
console.log('3. AFTER');

// ORDEN
// 1
// 3
// 2A
// 2B