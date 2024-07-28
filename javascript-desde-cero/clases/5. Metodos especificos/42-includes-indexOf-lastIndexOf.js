// METODOS DE BUSQUEDA

// --------------------------------------------------------------------------
// Metodo inlcudes(busca, desdeIndice): Devuelve true/false

const notasA = [23,45,35,32,12,50,43,41,14,12]
const includesNota = notasA.includes(12,5) //Senala el 12 que queda al final
console.log(includesNota)

// --------------------------------------------------------------------------
// Metodo indexOf(valorElemento, desdeIndice): Devuelve indice
// Devuelve el PRIMER INDICE QUE ENCUENTRE
// Si no encuentra, devuelve -1

const indexOfNotas = notasA.indexOf(45)
const indexOfNotasB = notasA.indexOf(5)

console.log(indexOfNotas) //Da indice, 1
console.log(indexOfNotasB) //Da indice, -1

// --------------------------------------------------------------------------
// Metodo lastIndexOf(): Igual que anterior
// Pero devuelve el ultimo que encuentre con el valor

const lastIndexOfNotas = notasA.lastIndexOf(12)
console.log(lastIndexOfNotas) //No da 4, sino 9, el ultimo 12 que hay

