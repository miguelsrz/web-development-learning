// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.'

insertX= ['Willy the Goblin',
'Big Daddy',
'Father Christmas']

insertY = ['the soup kitchen',
'Disneyland',
'the White House'
]

insertZ = ['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away']

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    xItem = randomValueFromArray(insertX)
    yItem = randomValueFromArray(insertY)
    zItem = randomValueFromArray(insertZ)

    newStory = newStory.replace(/:insertX:/g, xItem)
    newStory = newStory.replace(':insertY:', yItem)
    newStory = newStory.replace(':insertZ:', zItem)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.071429) + ' stones';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrades'
    newStory = newStory.replace('94 fahrenheit', temperature)
    newStory = newStory.replace('300 pounds', weight)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}