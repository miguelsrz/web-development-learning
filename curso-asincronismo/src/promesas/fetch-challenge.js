import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi)
{
    return fetch(urlApi);
};

// FETCH
// Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
// Básicamente llamamos a Fetch y le pasamos como parámetro la URL de la petición.
// Fetch devolvera una promesa, la cual le podremos aplicar los métodos then y catch
// Se pueden anidar multiples then para hacer lógicas consecuentes.

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(()=> console.log('------------- \nEND'))
//     .catch(error => console.log(error))


fetchData(`${API}/products`)
    .then(response => response.json()) // Recibe data inicial
    .then(products => { // Maneja data
        console.log(products + '\n--------------------'); // Muestra todos los productos
        return fetchData(`${API}/products/${products[0].id}`)  // Solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) // Recibe nueva data
    .then( product => { // Maneja data
        console.log(product.title + '\n--------------------'); // Muestra el producto 
        return fetchData(`${API}/products/${product.category.id}`) // Se quiere mostrar la categoria del producto en particular
    })
    .then(response => response.json()) // Recibe nueva data
    .then(category => { // Maneja data
        console.log(category.name) // Muestra nombre categoria
    })
    .catch(error => console.log(error)); // CATCH