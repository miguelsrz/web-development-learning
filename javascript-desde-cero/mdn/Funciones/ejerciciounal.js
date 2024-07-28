function CurvaLogistica(t)
{
    const contagiados = (10000)/(5+(1245*(Math.E**(-0.97*t))));
    return console.log(contagiados);
}

/*CurvaLogistica(1);
CurvaLogistica(2);
CurvaLogistica(3);
CurvaLogistica(5);
CurvaLogistica(10);
CurvaLogistica(20);




*(Factorizar(total-i)))
*/

function Factorizar(numero)
{
    if(numero<0)
        {
            console.log('NUMERO NEGATIVO');
        }
    else if(numero==0)
        {
            return 1;
        }
    else 
        {
            let fact = 1;
            for(g=1; g<=numero; g++)
                {
                    fact *= g;
                }
            return fact
        }
}


function CombinatoriaBestia(total, desde)
{
    let arrayCombinatoria = []
    for(i=desde; i<=total; i++)
        {
            let factorizado = (Factorizar(total))/((Factorizar(i))*(Factorizar(total-i)));
            
            console.log('---------------- \n' + factorizado);
            arrayCombinatoria.push(factorizado)
        }
    const resultadoTotal = arrayCombinatoria.reduce((a, b) => a + b, 0)
    console.log('///////// \n' + resultadoTotal)
}
CombinatoriaBestia(20,4)

