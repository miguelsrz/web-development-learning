// Dato no primitivo. Utilizan estructura key: value

const EjemploObjeto = 
{
    string: 'Valor string',
    int: 10,
    objeto: {
        clave: 'Valor'
    },
    metodo()
    {
        console.log(`Funcion dentro del objeto (METODO). Contiene el string ${this.string}`)
    },

    keyQueSeVaABorrar: ':(',
    funcionQueSeBorra()
    {
        console.log(':((')
    } 
}

EjemploObjeto.metodo()
console.log(EjemploObjeto) //Imprime objeto con sus keys/values
console.log(EjemploObjeto.string) //Imprime valor key string
console.log(EjemploObjeto.objeto) //Imprime valor key objeto (Es otro objeto, muestra sus keys/values)
console.log(EjemploObjeto.objeto.clave) //En el objeto dentro objeto se imprime el key clave

EjemploObjeto.nuevoKey = 'Nuevo key creado en objeto' //Se agrega nueva key y se asigna valor
console.log(EjemploObjeto.nuevoKey) 

EjemploObjeto.nuevaFuncion = () =>
{
    console.log('Nueva funcion agregada a objeto')
} // Se agrega nueva key, se asigna como funcion y se define esta

EjemploObjeto.nuevaFuncion() //Se prueba nueva funcion

delete EjemploObjeto.keyQueSeVaABorrar //Borrar key
delete EjemploObjeto.funcionQueSeBorra //Borrar metodo

console.log(EjemploObjeto) //Ver todos los cambios realizados al objeto

