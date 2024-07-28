// Social media profile

// 1. Basic information

let name = 'Miguel Angel'
let age = 17
let isSingle = true

//2. Personal information

let addresInformation =
{
    address: '123 Avenida Carrera Calle',
    neighborhood: 'Barriolandia',
    city: 'Bogota',
    country: 'Colombia'
}

//3. Hobbies

let hobbies = ['futbol', 'programación','gimnasio']
let lastHobby = hobbies.pop() //Saca ultimo elemento y lo asigna a lastHobby
let textHobbies = hobbies.join(', ') + ' y ' +  lastHobby //Con el fin de tener la 'y' entre el penultimo y ultimo hobby

// Texto generado automaticamente utilizando informacion obtenida

const textoPresentacion = `Hola! Mi nombre es ${name}. Tengo actualmente ${age} anios. Naci en la ciudad de ${addresInformation.city} en ${addresInformation.country}, 
mas especificamente en la direccion ${addresInformation.address} ubicado en el barrio ${addresInformation.neighborhood}. Mis hobbies favoritos son 
${textHobbies}.`

console.log(textoPresentacion)

// El proyecto utiliza datos primitivos y complejos. Junto a concadenacion por medio de template literals para mostar informacion en un texto base.
// Se utiliza string, number, boolean. Como tambien object y array
// Se utiliza metodos de objetos para agregar contenido a un array