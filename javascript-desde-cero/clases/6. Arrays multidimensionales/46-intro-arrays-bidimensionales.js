// --------------------------------------------------------------------------
// ARRAY BIDIMENSIONAL

let array2D = 
[
    ['JUAN',1,2,3],
    ['PEDRO',4,5,6],
    ['MAGON',7,8,9],
]

console.table(array2D)
console.log(array2D[1][0]) //PEDRO

// Todo funciona igual que un array normal, solo que hay ser consciente de que
// Deseamos cambiar, es recomendable mantener la estructura rigida
// Sea cuadrada o rectangular, con el fin de mantener un orden


// --------------------------------------------------------------------------
// ACCEDER PRIMER Y ULTIMO ELEMENTO

console.log(array2D[0][0]) //JUAN
console.log(array2D[array2D.length-1][array2D[array2D.length-1].length-1]) //9

// --------------------------------------------------------------------------
// SUMAR TODOS LOS ELEMENTOS

let numberArr = 
[
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51]
];

let suma=0

numberArr.forEach(
    (row) =>
    {
        row.forEach(element => suma+=element)
    }
)

console.log(suma)

// --------------------------------------------------------------------------
// INSERTAR ROWS

array2D.push(['PUSH',0,1,2])
array2D.unshift(['UNSHIFT',0,1,2])

console.table(array2D)

// INSERTAR COLUMNAS

array2D.forEach(
    (row) =>
    {
        row.push('Push de Columna ' + array2D.indexOf(row))
        row.unshift('Unshift de columna ' + array2D.indexOf(row))
    }
)
console.table(array2D)

// INSERTAR ROW CON SPLICE


array2D.splice(3,0,['Unshift de columna','SPLICE',7,8,9,'Push de Columna']) //Va despues columa 3, 0 significa que no quita nada, y se especifica array
console.table(array2D)

// --------------------------------------------------------------------------
// QUITAR ROWS

array2D.pop()
array2D.shift()
console.table(array2D)

// QUITAR COLUMNAS

array2D.forEach(
    (row) =>
    {
        row.pop()
        row.shift()
    }
)
console.table(array2D)

// QUITAR ROW CON SPLICE

array2D.splice(2,1) //DESDE EL INDICE 2, QUITA 1 (OSEA QUITA SOLO EL 2)
console.table(array2D)
