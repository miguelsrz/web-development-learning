// Metodo clasico
function fetchData1()
{
    fetch('https://rickandmortyapi.com/api/character')
    // Peticion del API
        .then((response1) => response1.json())
        .then((data)=> console.log(data))
        .catch((error) => console.log(error)); 
}

fetchData1();


// Metodo async y await

// JS detecta una funcion asincrona con async
async function fetchData2()
{
    // funcion utiliza try: Para resolverla
    try{
        // await permite parar la funcion hasta que en este caso, la peticion a la API se complete (esta peticion es asincrona)
        let response2 = await fetch('https://rickandmortyapi.com/api/character');
        let data = await response2.json(); //Nuevamente esperamos resolucion
        console.log('FETCHDATA2')
        console.log(data); // No asincrono, data ya tiene valor que se tuvo que esperar y aca solo se muestra
    }catch(error){
        // si no resuelve, atrapa el error  y se maneja
        console.log(error);
    }
}

// Llamada a funcion
fetchData2();


// Para varias peticiones

// Array con todas las apis a pedir
const urlsArray = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function fetchNewData()
{
    try{
        for await(let url of urlsArray) // Estructura control. Itera por todo el array de forma asincrona
        {
            console.log('---')
            let response3 = await fetch(url);
            let data = await response3.json();
            console.log(data);
        }
    }catch(error)
    {
        console.log(error)
    }
}

fetchNewData()