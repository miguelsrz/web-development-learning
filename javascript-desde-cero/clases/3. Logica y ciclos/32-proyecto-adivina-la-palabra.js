let nVidas = 3;
let hintLimit = 0
let finJuego = false;
let oneTime = false
let surrender = false
const hasNumber = /\d/

let random
let hintsSelected
let checkResultsText
let checkResults
let palabraOculta

const arrayPalabras = ['Basketball','Marathon' ,'Football','Volleyball','Golf', 'Tennis','Cricket' ,'Boxing','Skiing','Skateboarding']
const objectHint = {
    Basketball:['Often played indoors, this game revolves around a spherical object and a raised goal.','Originated in the late 19th century by a physical education instructor.'],
    Marathon:['A test of endurance, covering a specific long distance on foot.','Its origins trace back to an ancient battle site.'],
    Football:['A globally popular team sport, played with a round object that must not be handled.','Its premier tournament occurs every four years, drawing nations together.'],
    Volleyball:['Teams face off across a net, aiming to ground the ball on the opposing side.','Conceived as a less contact-intensive alternative to another team sport.'],
    Golf:['This sport involves a series of holes, a club, and a small ball.','Players aim to complete each hole with the fewest strokes possible.'],
    Tennis:['A racket and ball game, played individually against a single opponent or between two teams of two.','Points are earned when the opponent fails to return the ball within the prescribed dimensions.'],
    Cricket:['A bat-and-ball game with two teams taking turns to bat and field.','Originated in England, with a rich history and terminology.'],
    Boxing:['Divided into weight classes to ensure fair competition.','Known for its ring, gloves, and iconic bell signaling the start and end of rounds.'],
    Skiing:['Can be performed for recreation, transportation, or competition.','Includes variations like alpine, cross-country, and freestyle.'],
    Skateboarding:['A sport that involves riding and performing tricks on a board with wheels.','Originated as an offshoot of surfing, on land.'],
}

function randomValueFromArray(key, properties)
{
    let hintFinder = 0

    random = Math.floor(Math.random()*Object.keys(objectHint).length);
    
    for(arrayHint in objectHint)
    {
        if(hintFinder==random)
        {
            palabraOculta = arrayHint
            hintsSelected = objectHint[arrayHint]
        }
        hintFinder++
    }
}

randomValueFromArray(palabraOculta,hintsSelected)
console.log(hintsSelected)
console.log(palabraOculta)

const formButton = document.querySelector('.form-button')
let hintButton = document.getElementById('hint-button')
let nVidasTexto = document.getElementById('nVidasTexto');
let resetButton = document.querySelector('.reset-section')
nVidasTexto.innerHTML = nVidas;

formButton.addEventListener('click',checkFunction,false)
hintButton.addEventListener('click',hintFunction,false)
resetButton.addEventListener('click', reloadPage,false)



function vidasUpdate()
{
    nVidas -= 1
    nVidasTexto.innerHTML = nVidas;
    if(nVidas == 0)
    {
        gameOver()
    }
}

function oneTimeFunction()
{
    if(!oneTime)
        {
            let checkSection = document.querySelector('.result-section')
            checkSection.classList.add('check-results')
            checkResults = document.createElement('p')
            checkSection.appendChild(checkResults)
            
            oneTime = true
        }
}

function checkFunction()
{
        while(nVidas>0 && finJuego==false)
        {
            oneTimeFunction()
            let respuestaUsuario = document.getElementById('text');
            if(respuestaUsuario.value.length>=4 && !hasNumber.test(respuestaUsuario.value))
            {
                if(respuestaUsuario.value.toLowerCase()== palabraOculta.toLowerCase())
                {
                    let checkResultsText = '😁 CORRECT ANSWER. YOU WIN'
                    checkResults.innerHTML = checkResultsText
                    checkResults.style.cssText =`color: green; font-size: 24rem`
                    finJuego=true
                    resetButton.style.cssText = `display: block`
                    hintLimit = 3

                }else
                {
                    let checkResultsText = 'WRONG ANSWER. TRY AGAIN'
                    checkResults.innerHTML = checkResultsText
                    checkResults.style.color = 'red'
                    vidasUpdate()
                    break;
                }
            }else
            {
                let checkResultsText = 'INVALID ANSWER. TYPE AGAIN'
                checkResults.innerHTML = checkResultsText
                break;
            }       
        }
}

function hintFunction()
{
    let hintSection = document.querySelector('.hints')
    if(surrender)
    {
        gameOver()
    }
    if(hintLimit==0)
    {
        hintSection.classList.add('game-info')
        hintUl = document.createElement('ul')
        hintSection.appendChild(hintUl)
    }
    while(hintLimit<=1)
    {
        const hintText = document.createElement('li')
        hintText.innerHTML = hintsSelected[hintLimit]
        hintUl.appendChild(hintText)
        
        hintLimit +=1
        
        console.log(hintLimit)
        if(hintLimit==2)
        {
            hintButton.innerHTML = 'Surrender'
            hintButton.style.cssText = `background-color:#c8102E`
            surrender = true
        }
        break;
    }
}

function gameOver()
{
    oneTimeFunction()
    checkResults.innerHTML = '😪 ANSWER: ' + palabraOculta.toUpperCase()
    checkResults.style.cssText =`color: red; font-size: 24rem`
    resetButton.style.cssText = `display: block`
    nVidas = 0
}

function reloadPage()
{
    window.location.reload()
}