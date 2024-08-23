import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'; // Link principal de la API

async function fetchData(urlAPI)  // Responsable bodega
{
    const response = await fetch(urlAPI); // Consumimos la API, nos devuelve en un formato que no podemos trabajar en JS
    const data = await response.json(); //Convertimos en formato json (objetos y arrays) para manipularlo     
    return data 
}

const functionNumberTwo = async(urlAPI) => // Vendedor pidiendo a bodega
{
    try
    {
        const totalProducts = await fetchData(`${urlAPI}/products`); // Consumimos la api con todos los productos 
        const product = await fetchData(`${urlAPI}/products/${totalProducts[0].id}`); // Traemos el  objeto de un solo prodcuto (revisar doc para la api)
        const productCategory = await fetchData(`${urlAPI}/categories/${product.category.id}`) // Traemos el obj category, dentro del obj producto por el id

        // NOTAS: Luego necesitamos saber la categoría de este producto, 
        // en donde el link según la doc es esta. El 1 representa 
        // el id que corresponde a la categoría del producto(diferente al 
        // id del producto como tal), ahora recordemos que la categoría(llamado category) 
        // es un objeto que está dentro del objeto del productoW, entonces en el llamado 
        // colocamos la url base, el endpoint categories, y luego el id de la categoría 
        // ("desglosado" como se muestra)
        // https://api.escuelajs.co/api/v1/categories/1 

        console.log(totalProducts , '\n------------------\n' + product.title + '\n------------------\n', productCategory);
    } catch(error)
    {
        console.error(error);
    }
}

functionNumberTwo(API);

