// Afectan array original - Mutabilidad

const arrayCiudades1 = ['Bogota', 'Buenos Aires', 'Medellin', 'Cartagena', 'Santa Marta', 'Tunja', 'Leticia']
const spliceCiudades = arrayCiudades1.splice(2,3,'Brasilia','Lima')

console.log(arrayCiudades1)//Muestra array nuevo
console.log(spliceCiudades) //Almacena valores borrados por splice

const arrayCiudades2 = ['Bogota', 'Buenos Aires', 'Medellin', 'Cartagena', 'Santa Marta', 'Tunja', 'Leticia']
console.log(arrayCiudades2.reverse()) //Invierte
console.log(arrayCiudades2.sort()) //Ordena alfabeticamente
console.log(arrayCiudades2.fill('FILLER',3,5)) //Remplaza. Desde 3. Hasta 4 (5-1)

