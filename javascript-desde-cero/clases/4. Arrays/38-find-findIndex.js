const arrayN1 = [1,2,3,4,5,6]
const arrayFindFirst = arrayN1.find(num => num%3==0) // find() devuelve primer valor que cumpla condicion
console.log('Value:'+arrayFindFirst)

const arrayFindIndexFirst = arrayN1.findIndex(num => num%3==0)
console.log('Index:'+arrayFindIndexFirst) //findIndex() hace lo mismo, pero devuelve num indice

// EJERCICIO: GANADOR RIFA

const participantesRifa = 
[
    {id:100, nombre:'Juan', ganador: false},
    {id:200, nombre:'Roberto', ganador: true},
    {id:300, nombre:'Juana', ganador: false},
    {id:300, nombre:'Antonio', ganador: true},
    {id:400, nombre:'Memo', ganador: true},
    {id:500, nombre:'Mome', ganador: false},
]

function verificarGanador(datoRifa)
{
    let ganadorEncontrado = false
    participantesRifa.find(array => 
        {if(array.nombre==datoRifa && array.ganador || array.id==datoRifa && array.ganador)
            {
                idGanador = array.id
                nombreGanador = array.nombre
                console.log(`------------\nFELICIDADES\nGANADOR: ${nombreGanador}\nNUM BOLETA: ${idGanador}`)
                ganadorEncontrado = true
            }
        })
    if(!ganadorEncontrado)
    {
        console.log(`------------\nNO GANADOR`)
    }
    
}

verificarGanador('Juana')
verificarGanador(300)