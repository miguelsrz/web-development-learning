let ejemploJugadores = 
[
    {nombre: 'Cristiano Ronaldo', edad: '40', pais: 'Portugal'},
    {nombre: 'Lionel Messi', edad: '38', pais: 'Argentina'},
    {nombre: 'Luis Diaz', edad: '27', pais: 'Colombia'},
    {nombre: 'Falcao Garcia', edad: '41', pais: 'Colombia'}
]

ejemploJugadores.forEach((dato)=>
{
    console.log(`Jugador N${ejemploJugadores.indexOf(dato)+1} | Nombre: ${dato.nombre} | Edad: ${dato.edad} | Pais: ${dato.pais}`)
})