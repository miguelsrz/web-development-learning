//VERIFICAN Y EVALUAN

// --------------------------------------------------------------------------
// Metodo every() y some(): Devuelve boolean (true/false) al evaluar condicion

const notas1 = [23,45,35,32,12,50,43]

const everyNotas1 = notas1.every(nota => nota>35)
console.log(everyNotas1) //Da false, hay notas menores de 35

const someNotas1 = notas1.some(nota => nota>35)
console.log(someNotas1) //Da true, algunas notas son mayores de 35

