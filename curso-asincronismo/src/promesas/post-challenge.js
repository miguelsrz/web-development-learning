import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data)
{
    const response = fetch(urlApi, {
        method: 'POST', // Metodo a utilizar de los 4
        mode: 'cors', // Previene solicitudes cross-origin ocasionales. Aca 'cors' es el default, que permite las solicitudes C- O
        credentials: 'same=origin', // "Credentials are cookies, TLS client certificates, or authentication headers containing a username and password."
        // omit: never send credentials in the request or include credentials in the response.
        // same-origin (the default): only send and include credentials for same-origin requests.
        // include: always include credentials, even cross-origin. 

        headers: {
            'Content-Type': 'application/json' // DA AL SERVIDOR LA INFORMACION DE LA SOLICITUD. EN ESTE CASO LE DICE EL FORMATO DEL body 
        },
        body: JSON.stringify(data) // PARA POST Y PUT QUE NECESITAN ENVIAR SOLICITUDES CON CONTENIDO HACIA EL SERVIDOR
        });
        return response;
}

const newProduct1 = {
    "title": "ABCABC 1",
    "price": 100,
    "description": "ABCABC 1",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, newProduct1)
    .then(response => response.json())
    .then(newProduct => console.log(newProduct))
    .catch(err => console.log(err));

const newProduct2 = {
        "title": "ABCABC 2",
        "price": 100,
        "description": "ABCABC 2",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    }
    
    postData(`${API}/products`, newProduct2)
        .then(response => response.json())
        .then(newProduct => console.log(newProduct))
        .catch(err => console.log(err));

        // CADA VEZ QUE SE EJECUTE, SE GENERA UN NUEVO POST. NO SE REINICIA. CADA UNO CON NUEVO ID