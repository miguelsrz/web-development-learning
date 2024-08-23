const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Importamos el paquete XMLHTTPREQUEST - Permite usar objetos XHR para interactuar con servidores
const API = 'https://api.escuelajs.co/api/v1'; //Platzi Fake Store API

const DONE = 4;
const OK = 200

function fetchData(urlApi, callback) // Se pasa url y funcion que controlara info del API
{
    let xhttp = new XMLHttpRequest(); // Nueva instancia, para manipular solicitudes

    xhttp.open('GET', urlApi, true); // Abrimos solicitud
    // 1-TipoSolicitud, 2-UrlApi, 3-?Utilizaremos asincronismo?

    xhttp.onreadystatechange = function(event) // Cuando haya cambio en el readyState, se ejecuta funcion con el evento
    {
        if(xhttp.readyState === DONE) // Hay 4 readyState (0,UNSENT) - (1,OPENED) - (2,HEADERS_RECEIVED) - (3,LOADING) - (4, DONE)
        {
            if(xhttp.status === OK) // Ver en MDN para tipos de respuesta, 200 es exitoso
            {
                callback(null, JSON.parse(xhttp.responseText)) // callback - param1 es por si hay error - param2 para manejar info API
            }
            else
            {
                const error = new Error('Error: '+ urlApi);
                return(error, null) //En caso de error
            }
        }
    }
    xhttp.send();
}

// ILUSTRACION CALLBACK HELL
// CB1
fetchData(`${API}/products`, function (error1, data1) { 

	if (error1) return console.error(error1);

    // CB2
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {  // Se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.


		if (error2) return console.error(error2); // Si en este punto se identifica un error se imprime en consola y se detiene el proceso. Igual en posteriores if
		
        // CB3
		fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
            // En este caso puntual se hace uso de Optional Caining el cual hace una evaluación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.

			if (error3) return console.error(error3);
			
			console.log(data1[0]); // Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
			console.log(data2.title); // Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
			console.log(data3.name); // Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
		});
	});
});

// Apoyarse de MDN en curso JS desde 0. 'heroes.html'