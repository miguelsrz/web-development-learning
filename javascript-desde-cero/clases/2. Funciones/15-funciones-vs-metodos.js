// Diferentes formas de utilizar/crear una funcion

// 1. CALLBACK: Pasar una funcion como argumento

function numero1 () {}
function numero2 (parametro) {} //Lo que de resultado la funcion numero1 se da como argumento de la funcion numero2
numero2(numero1)

// 2. RETORNAR FUNCIONES: Funcion exterior devuelve resultado de la funcion interior

function numero1 () {
    function numero2 () {}
    return numero2
}   // La funcion numero1 retorna el valor de la funcion numero2

// 3. ASIGNAR FUNCIONS A VARIABLES

const variable1 = function (parametro) {}
    //Se mete una funcion dentro de la variable, la funcion no necesita nombre. Se llama con el de la variable

// 4. ANIDAR FUNCIONES: Nested functions. Funciones dentro de funciones

function fExterno (par) {

    const datoExterno = 1
    
    function fInterna (p){
        //Aca puedo acceder a 'datoExterno'.
        const datoInterno = 2 //fExterno no puede acceder a este dato
    }

    //Codigo externo

} //Buena manera de encapsular funciones similares, o tambien funciones que se apliquen en contextos especificos
  //No exceder en su uso, mala legibilidad


// METODOS: Funciones dentro de objetos

const mensaje = {
    creador: 'Juan',
    contenido: function mensajeCreado()
    {
        console.log('HOLA COMO ESTAS')
    },
    destino: 'Pepita'
}

mensaje.contenido()