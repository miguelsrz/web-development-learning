var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');
const thirthyOneMonthArray = ['January', 'March','May','July','August','October','December']

select.onchange = function() {
  var choice = select.value;

  // AÑADIR CONDICIONAL AQUÍ
if(thirthyOneMonthArray.includes(choice))
{
	createCalendar(31, choice);
}else if(choice=='February')
{
	createCalendar(28, choice);
}else
{
	createCalendar(30, choice);

}

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

createCalendar(31,'Enero');