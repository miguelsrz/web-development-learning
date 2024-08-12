const valor1 = document.querySelector('.valor1');
const valor2 = document.querySelector('.valor2');
const resultado = document.querySelector('.resultado')
const botonCalcular = document.querySelector('.boton-calcular')


botonCalcular.addEventListener('click',(event)=>
{
    event.preventDefault(); // Evita que el boton dentro del form cambie de direccion url por default;
    // Se realiza porque por defecto el boton en formulario es type='submit'. Se puede solucionar el HTML cambiandole el tipo a buton
    
    const select = document.querySelector('select').value;

    switch(select) // Se accedio al select.value que es un string
    {
        case 'suma':
            resultado.innerHTML = +valor1.value + +valor2.value;
            break;

        case 'resta':
            resultado.innerHTML = +valor1.value - +valor2.value;
            break;

        case 'multiplicacion':
            resultado.innerHTML = +valor1.value * +valor2.value;
            break;

        case 'division':
            if(+valor2.value === 0)
            {
                resultado.innerHTML = 'INDEFINIDO'
            }else{
                resultado.innerHTML = +valor1.value / +valor2.value;
            }
            break;
    } // IMPORTANTE break al final de cada condicional 
})