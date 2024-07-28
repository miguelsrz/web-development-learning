// NUMERO 1
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
let products =
[                
		'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
]

for (var i = 0; i <= products.length; i++) { // number 2
  // number 3
	const productsString = products.join(',').split(',')
	const singleProduct= productsString [i]
	const datosProduct = singleProduct.split(':')
	const nombre = datosProduct[0]
	const precio = Number(datosProduct[1])

  // number 4
  total += precio
  // number 5
  itemText = nombre + ' ---- ' + precio;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);


//NUMERO 2

var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // Solo permitiremos que se ingrese un término si la entrada de búsqueda no está vacía.
  if (searchInput.value !== '') {
    // number 1
	myHistory.unshift(searchInput.value)

    // Vacíe la lista para no mostrar entradas duplicadas. La pantalla
    // se regenera cada vez que se ingresa un término de búsqueda.
    list.innerHTML = '';

    // recorrer el arreglo y mostrar todos los términos de búsqueda en la lista
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, elimine el término de búsqueda más antiguo
    if (myHistory.length >= 5) {
	myHistory.pop()
    }

    // vacíe la entrada de búsqueda y enfóquela, listo para ingresar el siguiente término
    searchInput.value = '';
    searchInput.focus();
  }
}
