// --------------------------------------------------------------------------
// CREAR ARRAY BIDIMENSIONAL POR MEDIO DE FUNCION

function crearBidimensional(rows,columns)
{
    let arrayBidimensional = [] //Crea array vacio
    let value = 0 // Contador que se asigna a cada casilla

    for(let i=0; i<rows; i++)
    {
        arrayBidimensional[i] =[] //Crea row
        for(let j=0; j<columns; j++) //Dentro del row se crea cada columna
        {
            arrayBidimensional[i][j] = value 
            //Se accede al row y su columna, donde se le asigna el valor contador
            value++ //Contador incrementa

        }//Repite proceso por numero de columnas requeridas

    } //Repite este proceso por el numero de rows requeridos

    return arrayBidimensional //Muestra array
}

let arrayCreado = crearBidimensional(2,4) //Crea array con 2 rows, 4 columnas
console.table(arrayCreado)
// --------------------------------------------------------------------------
// ITERAR SOBRE MATRIZ

function iterarBidimensional(array)
{
    for(let i=0; i<array.length; i++) //RECORRE ROW
    {
        for(let j=0; j<array[i].length; j++) //RECORRE COLUMNA
        {
           console.log(array[i][j]) // LOG VALOR ARRAY EN DICHA ROW Y COLUMNA
        }
    } 
}

iterarBidimensional(arrayCreado)

// --------------------------------------------------------------------------
// ENCONTRAR ELEMENTO

function encontrarBidimensional(array, elementoBuscar)
{
    for(let i=0; i<array.length; i++) //RECORRE ROW
    {
        for(let j=0; j<array[i].length; j++) //RECORRE COLUMNA
        {
           if(array[i][j]===elementoBuscar) //SI ELEMENTO COINCIDE EN DICHO ROW Y COLUMNA
           {
             console.log('Elemento encontrado') // SI ES VERDADERO DEVUELVE
             return true // RETURN TERMINA LA FUNCION ACA SI SE CUMPLE

           } //SI EN ESTE CASO NO FUE, SIGUE CON EL SIGUIENTE HASTA ITERAR TODO EL ARRAY
        }
    } 
    console.log('Elemento NO encontrado')
    return false // SI NINGUNO CUMPLE EL RETURN DEVUELVE Y TERMINA FUNCION
}

encontrarBidimensional(arrayCreado, 5)
encontrarBidimensional(arrayCreado, 10)

// --------------------------------------------------------------------------
// DUPLICAR ARRAY (OJO! ESTO DUPLICA, POR LO QUE SI LA ORIGINAL CAMBIA, LA DUPLICACION NO :D)

function duplicarBidimensional(array)
{
    let duplicateArray = [] //ARRAY DUPLICADO VACIO

    for(let i=0; i<array.length; i++) //RECORRE ROW
    {
        duplicateArray[i] = [...array[i]] // EN EL INDICE i SE ASIGNA COMO ELEMENTO
        // UN ARRAY (NUEVO ROW), QUE TENDRA LOS ELEMENTOS DESTRUCTURADOS DEL ARRAY ORIGINAL EN ESE ROW
   
    } //SE REALIZA POR TODOS LOS ROWS DEL ARRAY ORIGINAL

    return duplicateArray //DEVUELVE DUPLICADO
}

let arrayDuplicado = duplicarBidimensional(arrayCreado) //DUPLICADO SE ALMACENA EN VARIABLE

arrayCreado.push([8,9,10,11]) //AL ORIGINAL SE ACTUALIZA CONTENIDO

console.table(arrayCreado) //MUESTRA CON CONTENIDO ACTUALIZADO
console.table(arrayDuplicado) //MUESTRA CON CONTENIDO OBTENIDO AL REALIZAR FUNCION