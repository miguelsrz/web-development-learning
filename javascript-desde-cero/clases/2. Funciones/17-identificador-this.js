// Identificador THIS

let car = {
    marca: 'KIA',
    modelo: 'Soul 2024',
    carInfo: function()
    {
        console.log(`Carro de la marca ${this.marca}, modelo ${this.modelo}`)
    }
} // Accede a las propiedades del objeto, mostrando la marca y el modelo del carro

car.carInfo()

// Enlace implicito

let jugadorFutbol = {
    nombre: 'Juanito Ressi',
    posicion: 'Defensa Central',
    jugadorInfo: function()
    {
        console.log(`Nombre jugador: ${this.nombre}. Posicion: ${this.posicion}`)
    }
}

jugadorFutbol.jugadorInfo() //El objeto llama el metodo, el metodo utiliza las propiedades del objeto


// Enlace explicito

function jugadorEstadisticas (nombre)
    {
        console.log(`Nombre: ${nombre}. Goles: ${this.goles}. Asistencias: ${this.asistencias}`)
    }

let estadisticas = {
    goles: 23,
    asistencias: 12,
}
nombre1 = 'Pepito Perpoza'
jugadorEstadisticas.call(estadisticas, nombre1) //La funcion no abre parentesis, solo el metodo .call
// La funcion llama directamente el objeto y este le brinda sus propiedades
// Ademas en el .call, se pueden tambier enviar los parametros de la funcion