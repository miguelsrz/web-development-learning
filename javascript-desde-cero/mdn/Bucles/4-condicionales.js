// https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals#aprendizaje_activo_un_calendario_simple

//NUMERO 1
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
  var days
  // AÑADIR CONDICIONAL AQUÍ

switch(choice)
{
	case 'February':
		days = 28;
		break;

	case 'April':
	case 'June':
	case 'September':
	case 'November':
		days = 30;
		break;

	default:
		days = 31;
}


  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');