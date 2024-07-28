let arrayEquipos =
[
    'Equipo A',
    'Equipo B',
    'Equipo C'
]

let arrayPartidos = []
let arrayResultados = []
let arrayTabla = []
let masVictorias = 0
let masGanadores = false

function simularTorneo(array)
{
    decidirGanador(jugarPartidos(creacionPartidos(array)))
}

function creacionPartidos(argEquipos)
{
    argEquipos.forEach(
        (equipo) =>
        {
            for(i=0; i<argEquipos.length; i++)
            {
                if(equipo!==argEquipos[i])
                {
                    arrayPartidos.push([equipo, argEquipos[i]])

                }
            }
            arrayTabla.push([equipo,0])

        }
    ) //Creacion partidos y creacion tabla resultados finales
    return argEquipos
}

function jugarPartidos()
{
    arrayPartidos.forEach(
        (partido) =>
        {
            ganadorPartido = Math.floor(Math.random() * (2 - 0) + 0)
            if(ganadorPartido===0)
            {
                arrayResultados.push([partido[0], ganadorPartido])
                for(i=0; i<arrayTabla.length; i++)
                {
                    for(j=0; j<arrayTabla.length; j++)
                    {
                        if(arrayTabla[i][j]===partido[0])
                        {
                            arrayTabla[i][1]++
                        }
                    }
                }                
            }else
            {
                arrayResultados.push([partido[1], ganadorPartido])
                for(i=0; i<arrayTabla.length; i++)
                {
                    for(j=0; j<arrayTabla.length; j++)
                    {
                        if(arrayTabla[i][j]===partido[1])
                        {
                            arrayTabla[i][j+1]++
                        }
                    }
                }    
            }
        }
    )
    console.log('--------------------------------------\nPARTIDOS A DISPUTAR')
    console.table(arrayPartidos)
    console.log('--------------------------------------\nRESULTADO DE PARTIDOS DISPUTADOS')
    console.table(arrayResultados)
    return arrayTabla
}

function decidirGanador()
{
    console.log('--------------------------------------\nTABLA DE RESULTADOS')
    console.table(arrayTabla)

    arrayTabla.forEach(
        resultadoEquipo =>    
        {
            if(resultadoEquipo[1]>masVictorias)
            {
                masVictorias = resultadoEquipo[1]
                ganador = [...arrayTabla[arrayTabla.indexOf(resultadoEquipo)]]
            }else if(resultadoEquipo[1]==masVictorias)
            {
                masGanadores = true
            }
        }
    )
    if(masGanadores)
    {
        console.log('MAS DE DOS GANADORES. FIN')
    }else
    {
        console.log(`GANADOR: ${ganador[0]} NUMERO DE VICTORIAS: ${ganador[1]}`)
    }
}

simularTorneo(arrayEquipos)
