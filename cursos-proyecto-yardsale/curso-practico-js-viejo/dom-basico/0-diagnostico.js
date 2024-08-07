/*
Variables y operaciones

1️⃣ Responde las siguientes preguntas:
¿Qué es una variable y para qué sirve?
R// Una variable es un espacio de memoria que se designa para almacenar 
algun tipo de dato, sea primitivo o complejo.

¿Cuál es la diferencia entre declarar e inicializar una variable?
R// Declarar una variable es la asignacion del espacio de memoria, la declaracion 
obligatoriamente requiere su identificador unico, su nombre. Si lo deseamos se puede 
asignar un dato, asignandole asi el tipo de dato que esta variable almacenara.

La inicializacion de una variable es cuando esta es llamada despues de declararse,
llamar se refiere a acceder al dato que se almacena en la variable

¿Cuál es la diferencia entre sumar números y concatenar strings?
R// A una variable se realiza se almacena la suma de dos datos tipo numero, 
resultando en otro numero distinto.
Concatenar strings se realiza cuando a una variable se le asigna, la 
concatenacion de dos o mas strings por diversos metodos.
Realizando la union de estos strings en uno nuevo

¿Cuál operador me permite sumar o concatenar?
R// El operador + permie sumar o concatenar dependiendo el tipo de dato que se tenga,
sea numero o cadena.
Si es combinacion entre los dos, el numero se convertira a string y se concatena con 
el otro string

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
=> string name;

Apellido
=> string surname;

Nombre de usuario en Platzi
=> Symbol platziName;

Edad
=> num age;

Correo electrónico
=> string userMail;

Mayor de edad
=> boolean isAdult;

Dinero ahorrado
=> num moneySaved;

Deudas
=> num moneyDebt;

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja 
tu código en los comentarios.
*/

const name = 'Miguel';
const surname = 'Suarez';
const platziName = Symbol('_miguelsrz');
console.log(platziName.description);
const age = 18;
const userMail = 'suarezmontielm@gmail.com';
const isAdult = true;
const moneySaved = 3000000;
const moneyDebt = 12035;

const completeName = name + ' ' + surname;
const moneyBalance = moneySaved - moneyDebt;
console.log(completeName, moneyBalance);

/*
Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
R// Segmento de codigo reutilizable, se llama cada vez que se requiera

¿Cuándo me sirve usar una función en mi código?
R// Cuando tenemos codigo que se repite una y otra vez, o que consideramos
que se puede utilizar varias veces en nuestro programa en diferentes contextos

¿Cuál es la diferencia entre parámetros y argumentos de una función?
R// Parametros, son guidelines. Establecen que recibira la funcion
Argumentos son aquellas variables que se asignan a cada parametro

function ABC (param1, param2)
{}

ABC(arg1, arg2); Aca arg1 ocupa espacio param1 y arg2 de param2;\

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea 
necesario las variables 
constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function miNombre(nameParam, lastNameParam, nicknameParam)
{
    completeNameFunction = nameParam + ' ' + lastNameParam;
    console.log("Mi nombre es " + completeNameFunction + ", pero prefiero que me digas " + nicknameParam + ".")
}

miNombre('Miguel','Suarez','Miguelo')

/*
Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
R// Estructura de codigo que ejecuta ciertas instrucciones dependiendo de sus 
condiciones(requisitos)

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R// if, else if, else: Si se presenta una condicion se ejecuta, sino salta a 
siguiente condicional, hasta llegar a modo default. Si solo tiene if y no se cumple, se salta condicional
switch: Una situacion puede presentar diversos casos, si no se cumple ningun 
caso en la situacion, se pasa a un default. Como por ejemplo, al recibir el input  de teclado, hay cada caso para cada letra posible con su codigo a ejecutar. Si es una letra que no presenta caso, se ejecuta un default

¿Puedo combinar funciones y condicionales?
R// Si. Si requiero un condicional que se ejecute cuando sea llamado, se le 
asigna a una funcion

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
*/
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Basic")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion = "Expert")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");  
}else if(tipoDeSuscripcion = "ExpertPlus")
{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else
{
    console.log("Solo puedes tomar los cursos gratis");
}

/*
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, 
pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar 
cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
*/

function tipoSuscripcionFunction(tipo)
{
    arrayOpcionesSubscripcion = [['Free',"Solo puedes tomar los cursos gratis"],['Basic',"Puedes tomar casi todos los cursos de Platzi durante un mes"],['Expert',"Puedes tomar casi todos los cursos de Platzi durante un año"],['ExpertPlus',"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]];
    arrayOpcionesSubscripcion.forEach(element => {
        if(element[0]===tipo)
        {
            console.log(element[1]);
        }
    });
}
tipoSuscripcionFunction(tipoDeSuscripcion);

/*
Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
R// Bloque de codigo que se ejecuta repetidamente hasta cumplir una condicion

¿Qué tipos de ciclos existen en JavaScript?
R// For y While, cada uno con sus variaciones

¿Qué es un ciclo infinito y por qué es un problema?
R// Un ciclo infinito es aquel que se repite indefinidamente ya que su 
condicion para terminar nunca se cumplira.
Es un problema al ser una situacion no esperada y no deseada, que rompe 
el funcionamiento del programa

¿Puedo mezclar ciclos y condicionales?
R// Si, si se refiere a almacenar condicionales en ciclos y viceversa, 
ambas se pueden realizar

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
*/

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while(i<5)
{
    console.log("El valor de i es: " + i);
    i++;
}

let g = 10;
while(g>=2)
{
    console.log("El valor de i es: " + g);
    g--;
}

/*
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, 
volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
*/

console.log('////////////////////////////');
let isCorrect = false;

/*
while(!isCorrect)
{
    let resultadoPrompt = prompt('INTRODUCE RESULTADO DE LA SUMA: 2 + 2');
    if(parseInt(resultadoPrompt)==4)
    {
        isCorrect = true;
        alert('CORRECTO :D')
    }else
    {
        alert('INCORRECTO! :(')
    }
}

EN COMENTARIO MIENTRAS TERMINO
*/

/*
Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
R// Coleccion de datos, accesible por medio de indices

¿Qué es un objeto?
R// Coleccion de datos, creados por medio de pares clave/valor. Accesibles por 
medio de la clave

¿Cuándo es mejor usar objetos o arrays?
R// Considero el uso de arrays cuando se trabajan datos del mismo contexto 
(nombres, num telefonos, etc)
Mientras el uso de objetos almacena datos de un mismo contexto pero en distintas 
areas (Persona objeto tendra claves como nombre, altura, etc)

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R// Si, ambas maneras es posible, cada una brinda beneficios para almacenar 
datos mas complejos y por ende completos

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e 
imprima su primer elemento.
*/

const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9]
function arrayPrimerIndice(array)
{
    console.log(array[0]);
}
arrayPrimerIndice(arrayEjemplo);

/*
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e 
imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
*/

function arrayTodosElementos(array)
{
    array.forEach(element => {
        console.log('---')
        console.log(element)
    });
}

arrayTodosElementos(arrayEjemplo);

const objetoEjemplo = {
    1: 'Uno',
    2: 'Dos',
    3: 'Tres',
    4: 'Cuatro',
    5: 'Cinco'
}

/*
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e 
imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/
function objetoTodosElementos(objeto)
{
    for(clave in objeto) {
      console.log(`CLAVE: ${clave} - VALOR: ${objeto[clave]}`);
    }
}

objetoTodosElementos(objetoEjemplo);