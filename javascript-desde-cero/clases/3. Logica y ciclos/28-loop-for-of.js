let ejemploColores = ['Rojo', 'Azul', 'Verde', 'Amarillo']

for(color of ejemploColores)
{
    console.log(`${ejemploColores.indexOf(color)+1}. Color: ${color}`)
}

const textoIterable = 'Hola Jajaja'

for(letra of textoIterable)
{
    console.log(`Letra: ${letra}`)
}