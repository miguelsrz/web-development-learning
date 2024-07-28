/*
switch(expresion)
{
    case valorN1:
        //CODIGO A EJECUTAR
        break;

    case valorN1:
        //CODIGO A EJECUTAR
        break; //Termina condicional si se cumple el caso

    case valorN1:
        //CODIGO A EJECUTAR

    default: //Default si no se cumple ninguno
        //CODIGO A EJECUTAR
}
*/
//EJEMPLO

let nombre = 'Juan'

switch(nombre)
{
    case 'Juan':
        console.log('Eres un nino')
        break;
        
    case 'Pedro':
        console.log('Eres un adolescente')
        break;
    
    case 'Mario':
        console.log('Eres un adulto joven')
        break;

    case 'Miguel':
        console.log('Eres un adulto')
        break;

    case 'Pepo':
        console.log('Eres un adulto mayor')
        break;
    
    default:
        console.log('Edad no identificada')
}