class Jugador
{
    constructor(nombre,edad,pais,club)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.club = club;
    }

    metodoInformacion()
    {
        console.log(`NOMBRE JUGADOR: ${this.nombre} \nEDAD: ${this.edad} \nPAIS: ${this.pais} \nCLUB: ${this.club}`)
    }
}

const jugadorA = new Jugador('JUAN', 24, 'COLOMBIA', 'EQUIDAD');

jugadorA.metodoInformacion();