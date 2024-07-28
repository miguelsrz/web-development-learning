// FUNCION CONSTRUCTORA: Funcion que crea objetos

function NuevoJugador(nombre,apellido,pais,edad,club) //Nombre en mayuscula, agregar parametros/keys del objeto a crear
{
    this.nombre = nombre //this indica asignar nombre al objeto a crear
    this.apellido = apellido
    this.pais = pais
    this.edad = edad
    this.club = club
}

const jugador1 = new NuevoJugador('Cristiano','Ronaldo','Portugal',40,'Al Nassr')
console.log(jugador1)

jugador1.nuevoKeyPosicion = 'Delantero' //Este nuevo key solo se aplica a este objeto y no a todos los creados por la funcion constructora
console.log(jugador1)

const jugador2 = new NuevoJugador('Lionel','Messi','Argentina',38,'Inter Miami')
console.log(jugador2) //No mostrara key de posicion donde juega

NuevoJugador.prototype.nuevaFuncionSaludar = function() //Declara nuevo key/metodo que aplica a TODOS LOS OBJETOS. INCLUSO YA CREADOS
{
    console.log(`\nHola! Mi nombre es ${this.nombre} ${this.apellido}. \nTengo actualmente ${this.edad} anios. \n Naci en el pais ${this.pais}. \nActualmente juego en el ${this.club}. El otro anio cumplo ${this.edad+1} anios`)
} //Usando el this en cada objeto se refiere a sus propios keys-valores

jugador1.nuevaFuncionSaludar();
jugador2.nuevaFuncionSaludar(); //Se llama funcion y corre sin problema