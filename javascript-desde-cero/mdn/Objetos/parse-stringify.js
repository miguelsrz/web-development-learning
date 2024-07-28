// PARSE
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "text"; // Recibimos una cadena de tipo "string", no JSON
request.send();

request.onload = function () {
  const superHeroesText = request.response; // Cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // La convertimos a objeto con PARSE
  populateHeader(superHeroes);
  showHeroes(superHeroes); // Ejecutan funciones que DEBEN esperar objeto JS originado de JSON
};

// STRINGIFY

const myJSON = { name: "Chris", age: "38" }; // Objeto JS
myJSON;
const myString = JSON.stringify(myJSON); // Convierte a cadena JSON
myString;
