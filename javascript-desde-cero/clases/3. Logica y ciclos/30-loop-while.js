let numeroJugador = parseInt(prompt('Ingrese un numero POSITIVO para sumar'))
let sumaTotal = 0
while(numeroJugador>0)
{
    sumaTotal = sumaTotal + numeroJugador
    confirmar = confirm(`Suma total: ${sumaTotal}\nIngresar otro numero?`)
    confirmar ? numeroJugador=parseInt(prompt('Ingrese un numero POSITIVO para sumar')) : numeroJugador = -1
}
alert('Fin del programa') 