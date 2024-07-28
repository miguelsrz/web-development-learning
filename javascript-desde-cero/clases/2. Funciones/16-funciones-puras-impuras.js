// FUNCIONES PURAS
function cuadrado(x)
{
    console.log( x * x)
} //Es pura, usa solamente sus parametros y variables, no afectan aspectos externos

// FUNCIONES IMPURAS: CAUSAN SIDE EFFECTS

        /*  Modificar variables globales.
            Modificar parámetros.
            Solicitudes HTTP.
            Impresiones de mensajes en pantalla o consola.
            Manipulación del DOM (Document Object Model).
            Obtener la hora actual.
        */

let totalPrecio = 0

function carroCompras(total, a)
{
    console.log(total += a) 
} //Es impura. En este caso modifica una variable global (fuera de su scope)

cuadrado(4)
carroCompras(totalPrecio, 100) 