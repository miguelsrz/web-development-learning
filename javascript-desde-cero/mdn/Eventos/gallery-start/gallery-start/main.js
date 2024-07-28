const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

const imageObject = {
    0: 'Image 1',
    1: 'Image 2',
    2: 'Image 3',
    3: 'Image 4',
    4: 'Image 5'
}

/* Looping through images */

imageArray.forEach(picture => {
    index = imageArray.indexOf(picture)
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${picture}`);
    newImage.setAttribute('alt', imageObject[index]);
    thumbBar.appendChild(newImage);
});

thumbBar.addEventListener('click', event => {
    if(event.target.getAttribute('src'))
        {
            displayedImage.setAttribute('src',event.target.getAttribute('src'))
            displayedImage.setAttribute('alt',event.target.getAttribute('alt'))
        }
})

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () =>
{
    if(btn.classList.contains('dark'))
    {
        btn.setAttribute('class','light')
        btn.innerHTML = 'Lighten'
        btn.style.borderColor = 'white'
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    }else if(btn.classList.contains('light'))
        {
            btn.setAttribute('class','dark')
            btn.innerHTML = 'Darken'
            btn.style.borderColor = 'black'
            overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
        }
});