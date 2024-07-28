let listaActividades = ['Comer', 'Jugar', 'Dormir', 'Pelear', 'Cocinar']

for(i=0; i<listaActividades.length; i++)
{
    console.log(`Elemento numero ${i+1}: ${listaActividades[i]}`)
    i+1==listaActividades.length ? console.log('------------- \nFin del recorrido') : console.log('-------------')
}