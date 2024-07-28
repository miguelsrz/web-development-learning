function randomNum()
{
   return numSecreto = Math.floor(Math.random() * 10 + 1)
}

function introducirNum()
{
    let numValido = false
    let numJugador
    while (numValido == false)
    {    
        numJugador = parseInt(prompt('Bienvenido. Introduzca un numero del 1 al 10 que crea sea el ganador ;)'))

        if (numJugador > 10 || numJugador < 1 || numJugador !== parseInt(numJugador))
        {
            alert('Numero invalido. Ingresa otro numero.') 
        } else
        {
            numValido = true
        }
        
    }
    return numJugador
}

function juegoCompleto ()
{
    let juegoJugadorNum 
    let finJuego = false
    let buclePagina = true
    do
    {
        do{
            finJuego = false
            let juegoRandomNum = randomNum()
            juegoJugadorNum = introducirNum()
            if(juegoJugadorNum != juegoRandomNum)
            {
                alert(`El numero correcto era ${juegoRandomNum}, intenta de nuevo.`)
            }else
            {
                finJuego = true
            }

        }while(finJuego == false)

        buclePagina = confirm(`El numero ${juegoJugadorNum} es correcto! Desea jugar de nuevo?`)
        
    }while(buclePagina)
}

juegoCompleto()
