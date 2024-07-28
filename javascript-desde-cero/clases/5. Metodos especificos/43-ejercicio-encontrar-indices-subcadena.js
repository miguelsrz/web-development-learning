const arrayTexto = [
    'Mi abuela cocinó fideos con estofado',
    'El intendente fue reelecto',
    'Damián se cortó el pelo',
    'El intendente fue reelecto',
    'Me compré una bicicleta nueva',
    'Tengo turno con el dentista a las 18 horas.',
    'Mañana nos vamos de campamento',
    'El intendente fue reelecto',
    'La profesora explicó las causas de la Revolución francesa.',
    'Tengo entradas para el teatro',
    'El intendente fue reelecto']

    const objetivoCorrecto = 'El intendente fue reelecto'
    const objetivoIncorrecto = 'El intendente fue...'

function encontrarIndices(subcadena)
{
    console.log('-----------------------')
    if(arrayTexto.includes(subcadena))
    {
        primerIndice = arrayTexto.indexOf(subcadena)
        ultimoIndice = arrayTexto.lastIndexOf(subcadena)
        if(primerIndice==ultimoIndice)
        {
            console.log('Cadena se encuentra una vez en el array\nN. INDICE: '+primerIndice)
        }else
        {
            console.log('Cadena se encuentra dos o mas veces en el array\nN. PRIMER INDICE: '+primerIndice+'\nN. ULTIMO INDICE: '+ultimoIndice)
        }

    }else
    {
        console.log('Cadena no coincide con cadenas en array')
        return -1 
    }
}

encontrarIndices(objetivoCorrecto)
encontrarIndices(objetivoIncorrecto)