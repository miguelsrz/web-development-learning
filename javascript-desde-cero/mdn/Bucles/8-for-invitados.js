const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admitir: ';
refused.textContent = 'Rechazar: ';

// El bucle comienza aquí
for(i=0; i<people.length; i++)
{
	if(people[i]==='Phil' || people[i]==='Lola')
	{
		refused.textContent += people[i] + ', ';

		
	}else
	{
		admitted.textContent += people[i] + ', ';
		admitted.textContent.replace('Chris' , '.');
	}
}
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '. ';


refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '. ';
