const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const pClase = document.querySelectorAll('.parrafo-clase');
const pID = document.querySelector('#parrafo-id');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    pClase,
    pID,
    input
});

h1.innerHTML = 'TITULO CAMBIADO POR JS <br> CON ESPACIO EN ETIQUETA'; //Dentro HTML puede recibir codigo
// h1.innerText // Solo recibe texto y no recibe codigo
h1.setAttribute('class','rojo'); //Accede a atributo class, cambiando su contenido a rojo

h1.classList.add('amarillo');
h1.classList.remove('rojo');
h1.classList.toggle('verde'); //Añade y remueve clase cada vez que se hace toggle
h1.classList.contains('rojo'); //Condicional

input.value = 'ABCXYZ' // Le brinda un valor por defecto ya puesto en el input

const img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/640px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg');

pID.replaceWith(img); //Reemplaza contenido que poseia la etiqueta con el nuevo contenido, ya no existira pID, solo img
