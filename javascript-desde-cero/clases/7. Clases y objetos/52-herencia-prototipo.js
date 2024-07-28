class Jugador //Clase molde padre
{
    constructor(nombre,edad)
    {
        this.nombre = nombre
        this.edad = edad
    }

    realizarJugada() //Define metodo general
    {
        console.log('EL JUGADOR REALIZA UNA GRAN JUDADA')
    }
}

class Delantero extends Jugador //Clase Delantero es una extension de clase Jugador
{
    constructor(nombre, edad, posicion, goles) //Se definen parametros, tener en cuenta aquellos a heredar
    {
        super(nombre, edad) // Con super() se hereda la construccion de estos parametros del padre
        this.posicion = posicion
        this.goles = goles //Definicion de parametros nuevos
    }

    realizarJugada() //Re-define el metodo en esta extencion, mas especfico
    {
        console.log(`EL ${this.posicion} ${this.nombre} MARCA UN GOLAZO`)
        this.goles++
    }

    golesTotal()
    {
        console.log(`EL JUGADOR ${this.nombre} HA MARCADO ${this.goles} GOLES`)

    } // Metodo propio
}

const jugador1 = new Jugador('JUAN',20);
const delantero1 = new Delantero('RONALDO',40,'DELANTERO','32') //Crea instancia
console.log(delantero1);
delantero1.realizarJugada();
delantero1.golesTotal();

delantero1.nuevoMetodoAsistencias = function()
{
    console.log(this.nombre +' NO HACE ASISTENCIAS ;)')
} // Este metodo solo se agrega en la instancia

console.log(Delantero)
console.log(delantero1.prototype) //Undefined ya que es una instancia de clase

Delantero.prototype.nuevoMetodoAsistenciasV2 = function()
{
    console.log(this.nombre +' NO HACE ASISTENCIAS ;)')
} // Al usar el prototipo de delantero

delantero1.nuevoMetodoAsistenciasV2()
jugador1.nuevoMetodoAsistenciasV2() //Da error, no esta en su prototipo

/* Segun entiendo yo por cada nivel hay un prototipo. Jugador crea un prototipo. Y delantero otro. 
Dependiendo de la clase que se asigne el prototipo este modificara su nivel. En este caso 
Delantero anade a su protipo en el 'nivel 2' el metodo asistencia... mientras que el 'nivel 1' de 
Jugador no se anade nada. Ahora la instancia delantero1 no tiene prototipo, por lo que al no encontrar
la funcion alli se va al siguiente prototipo en cadena que seria el prototipo deDelantero, si este no lo tiene se iria
al siguiente nivel que seria el prototipo de Jugador. En este caso se termina al encontrarlo en el prototipo de delantero
*/