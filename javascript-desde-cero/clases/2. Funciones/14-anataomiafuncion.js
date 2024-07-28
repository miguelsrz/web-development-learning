//Funcion que devuelve el precio de un objeto con descuento

function precioDescuento (precio, descuentoPorcentaje)
{
    const descuento = (precio * descuentoPorcentaje)/100
    const precioFinal = precio - descuento

    return console.log('Precio Original: $'+ precio),
           console.log('Descuento: '+ descuentoPorcentaje +'%'),
           console.log('Precio Final: $'+precioFinal)
}

const p1 = 2500
const pd1 = 25

precioDescuento(p1, pd1)
