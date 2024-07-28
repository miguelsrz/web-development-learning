var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
	
  // AÑADIR DECLARACIÓN SWITCH
switch(choice)
{
	case 'black':
		update('black','white');
		break;
	case 'purple':
		update('purple','white');
		break;
	case 'yellow':
		update('yellow','black');
		break;
	case 'psychedelic':
		update('brown','white');
		break;
	default:
		update('white','black');

}
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}