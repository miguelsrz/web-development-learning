import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'; // Link principal de la API

async function fetchData(urlAPI)  // Responsable bodega
{
    const response = await fetch(urlAPI); // Consumimos la API, nos devuelve en un formato que no podemos trabajar en JS
    const data = await response.json(); //Convertimos en formato json (objetos y arrays) para manipularlo     
    return data 
}

async function* receiveAndIterate(urlAPI) // Vendedor pidiendo a bodega
{
    try
    {
        const totalProducts = await fetchData(`${urlAPI}/products`); // Consumimos la api con todos los productos 
        yield console.log(totalProducts); // 'Checkpoint' 1

        const product = await fetchData(`${urlAPI}/products/${totalProducts[0].id}`); // Traemos el  objeto de un solo prodcuto (revisar doc para la api)
        yield console.log('\n------------------\n' + product.title + '\n------------------\n');
        // 'Checkpoint' 2
        
        const productCategory = await fetchData(`${urlAPI}/categories/${product.category.id}`) // Traemos el obj category, dentro del obj producto por el id
        yield console.log(productCategory); // 'Checkpoint' 3

    } catch(error)
    {
        console.error('Error: ' + error);
    }
}

const iterate = receiveAndIterate(API);
console.log(iterate.next());
// Cada vez que se use next() se activa el generador, hasta que llegue a una expresion yield, el final de la funcion generadora, return, o throw
// Cada vez que yield devuelva valor: done = false, porque no se ha completado la funcion generadora
// Cuando se complete la funcion generadora, y al hacer next(). El valor sera undefined y done = true, porque no hay mas funcion que hacer
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


