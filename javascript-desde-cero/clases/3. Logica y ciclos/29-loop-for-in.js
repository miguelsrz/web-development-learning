const objetoCapitales = {
    Colombia: 'Bogota',
    Argentina: 'Buenos Aires',
    Peru: 'Lima',
    Venezuela: 'Caracas',
    Uruguay: 'Montevideo'
}

for(pais in objetoCapitales)
{
    console.log(pais + '\n') //Lo que hace es convertir en objeto en un array iterable
    // Por lo que cada propiedad se le atribuye un numero (0,1,2...)
    //Al llamar al indice se muestra la propiedad asi nomas
}

for(pais in objetoCapitales)
{
    console.log('------------')
    console.log(pais)
    console.log(objetoCapitales[pais].indexOf())
    //pais es un indice, por lo que la propiedad equivale a un numero
    //Como en un array, asignarle el numero de indice al array,
    //me arroja el valor del indice, en este caso la capital
}