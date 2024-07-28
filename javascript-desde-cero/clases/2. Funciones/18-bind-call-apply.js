// METODO .call

function operaciones (num1)
{
    console.log(num1 * this.numA - this.numB)
}

const setNumeros = {
    numA: 8,
    numB: 2
}

operaciones.call(setNumeros, 4)

// METODO .apply

function operaciones2 (num1)
{
    console.log(num1 * numA - numB)
}
const setNumeros2 = [setNumeros.numA, setNumeros.numB]

operaciones2.apply(setNumeros2, 2)

//METODO .bind

const nuevaFuncionBuind = operaciones.bind(setNumeros, 4)
console.log(nuevaFuncionBuind)
