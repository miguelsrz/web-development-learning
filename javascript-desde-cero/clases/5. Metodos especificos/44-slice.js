// Metodo slice(): NO modifica array original
// Crea copia de una parte del array en nuevo array, con seccion que se especifique
//La copia puede modoficar el original!!

const numeroSlice = [1,2,3,4,5,6,7,8,9,10]

console.log(numeroSlice.slice(2,7)) //Muestra indices 2 hasta 7-1=(6)
console.log(numeroSlice.slice(-3)) //Si es negativo, cuenta desde atras
//hacia adelanta. El ultimo elemento seria -1, el penultimo -2...

console.log(numeroSlice.slice(4,-2)) //En este caso arranca desde indice 4
//Hata indice -2, es decir, penultimo

//RECORDAR que el ultimo valor (como 7), NO mostrara aquel con indice 7, sino
//el menor, aquel con indice 6

//