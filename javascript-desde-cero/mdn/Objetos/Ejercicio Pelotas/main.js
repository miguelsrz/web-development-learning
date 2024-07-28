// setup selectors

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const ballsCounter = document.querySelector('.balls-counter');
const gameTimer = document.querySelector('.game-timer');


const menu = document.querySelector('.menu');
const menuStartButton = document.querySelector('.mb');

const containerBottom = document.querySelector('.containerbottom');
const bottomDeco = document.querySelector('.bottomDeco');

const sectW = document.querySelector('.sect-w');
const sectL = document.querySelector('.sect-l');
const timerW = document.querySelector('.timer-w');
const ballsL = document.querySelector('.balls-l');


const playButton = document.querySelectorAll('.play-button');
const menuAgainButton = document.querySelectorAll('.menu-button');


const width = (canvas.width = parseInt(window.getComputedStyle(canvas).width));
const height = (canvas.height = parseInt(window.getComputedStyle(canvas).height)); 




const sfx = {
  gameMusic: new Howl({
    src: ['gameMusic.mp3']
  }),
  colission: new Howl({
    src: ['colission.mp3']
  })
}


// Width y heighth son iguales al canvas, a su vez, estas se asignan a las dimensiones de 
// la ventana...

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function timer(sec)
{
  gameTimer.innerHTML=sec;

    let timer = setInterval(()=>
      {
        if(!isStopped)
        {
          gameTimer.innerHTML=sec;
          sec--;

          if(sec<10)
          {
            gameTimer.style.color = randomRGB()
          }

          if(sec<0)
          {
            isOver = true;
            clearInterval(timer);
          }
          
        }else
        {
          clearInterval(timer);
          timerW.innerHTML = (totalSeconds - sec)
        }
       
      },1000)
}
// Clase padre Shape

class Shape
{
  x;
  y;
  velX;
  velY;
  color;
  size;

  constructor(x, y, velX, velY, color, size)
  {
    this.x = x; 
    this.y = y; // 0 hasta limite navegador/ventana
    this.velX = velX;
    this.velY = velY; // Se anaden a las coordenadas para simular movimiento
    this.color = color;
    this.size = size; // Radio en pixels
    //Propiedades de los objetos Bola, posicion, velocidad, color y tamanio
  }
}

// Clase hija Ball hereda de Shape
class Ball extends Shape{
  exists;
  constructor(x, y, velX, velY, color, size, exists)
  {
    super(x, y, velX, velY, color, size);
    this.exists = exists;
  }
}

// Metodo a prototipo Ball()

Ball.prototype.draw = function()
{
  if(this.exists)
  {
    ctx.beginPath(); // Se llama contexto ctx, es decir "Vamos a dibujar". Mas especificamente con el beginPath declaramos un nuevo dibujo
    ctx.fillStyle = this.color; // Establecer el color a usar, se guarda, no se usa todavia
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // Metodo arc, traza un arco: (X, Y, radio, Inicio arco, Final arco)... Inicio y final de arco son en radianes, en este caso, de 0 a 2PI es una circunferencia completa
    ctx.fill(); // Se rellena arco/circulo con color guardado previamente
  }
}

// Metodo actualizar posicion en prototipo Ball()

Ball.prototype.update = function()
{
  if(this.exists)
  {
    if(this.x + this.size >= width)
      {
        this.velX = -this.velX; //Si posicion pelota es mayor que ancho pantalla (DERECHA), se invierte la velocidad para que rebote
      }
      if(this.x - this.size <= 0)
      {
        this.velX = -this.velX; //Si posicion pelota es menor que ancho pantalla (IZQUIERDA), se invierte la velocidad para que rebote
      }
    
      if(this.y + this.size >= height)
      {
        this.velY = -this.velY; //Si posicion pelota es mayor que altura pantalla (ABAJO), se invierte la velocidad para que rebote
      }
      if(this.y - this.size <=0)
      {
        this.velY = -this.velY; //Si posicion pelota es menor que altura pantalla (ARRIBA), se invierte la velocidad para que rebote
      }
  }
  
  this.x += this.velX;
  this.y += this.velY; // Ya con los posibles cambios realizados, se realiza cambio en posicion de acuerdo a la velocidad
}



// Metodo deteccion colisiones en prototipo Ball()

Ball.prototype.collisionDetect = function()
{
  for(var j=0; j<ballsArray.length; j++) // Se recorre arra de bolas, se asigna a j ya que en el loop, esta dentro de un for con variable i
  {
    if(!(this === ballsArray[j])) // Condicional se ejecuta cuando la bola NO es la misma
    {
      // Se ejecuta con TODAS las otras bolas, no importa la distancia

      var distanceX = this.x - ballsArray[j].x; // Diferencia posicion X
      var distanceY = this.y - ballsArray[j].y; // Diferencia posicion Y
      var distanceXY = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      // Saca hipotenusa para saber distancia en diagonal, o si es recta u horizontal tambien sirve, no afecta la operacion


      if(distanceXY < this.size + ballsArray[j].size)
      {
        ballsArray[j].color = this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
      }

      
      // La distancia debe ser mayor que el area de ambos circulos, si no lo es, significa que se superponen
      // No son 'fisica' como tal, usar librerias como PhysicsJS entre otros
      // Solo se realiza cambio de color a ambas bolas.
      // Segun entiendo, como cada objeto realiza esta funcion, bola1 cambia color bola2, bola2 cambia color bola1.
      // O simplemente bola1 cambia su color y el de bola2 y al reves. Lo que genera el efecto 'glitch'
    }
  }
}

// Clase hija Player hereda de Shape

class Player extends Shape
{
  timer;
  playerHitbox;
  superRadius;
  cooldown;
  cooldownTimeout;
  borderColor;
  borderWidth;
  constructor(x, y, size)
  {
    super(x, y, undefined, undefined, undefined, size);
    this.velX = 20;
    this.velY = 20;
    this.color = `rgb(0,0,0)`
    this.borderColor = `rgb(255,255,255)`
    this.borderWidth = 5;
    this.superRadius = 50;
    this.playerHitbox = size;
    this.cooldown = false;
    this.cooldownTimeout = null;
    this.timer = null;

    window.addEventListener('keydown', this.handleEvent.bind(this), false);
    window.addEventListener('keyup', this.handleEventSuper.bind(this), false);
  }

  
}

Player.prototype.drawPlayer = function()
{
      ctx.beginPath();
      ctx.fillStyle = this.color
      ctx.strokeStyle = this.borderColor; // Color a borde
      ctx.lineWidth = this.borderWidth;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
}


Player.prototype.handleEvent = function (event)
{
  if(!isStopped)
  {
    if(event.key == 'w' && !(this.y - this.size <=0))
      {
        this.y-=this.velY;
        console.log('A')
  
      } else if(event.key == 's' && !(this.y + this.size >= height))
      {
        this.y+=this.velY;
        console.log('B')
      }else if(event.key == 'a' && !(this.x - this.size <= 0))
      {
        this.x -= this.velX
        console.log('C')
      }else if(event.key == 'd' && !(this.x + this.size >= width))
      {
        this.x += this.velX
        console.log('D')
      }
  }
}

Player.prototype.handleEventSuper = function (event)
{
  if(!isStopped && !this.cooldown)
  {
    if(event.key == ' '  )
      {
        this.toggleSuper()
        console.log('F')
        
      }
  }
}


Player.prototype.toggleSuper = function()
{
    this.activateSuper();
    console.log('FF')
}

Player.prototype.activateSuper = function()
{
  clearTimeout(this.cooldown);
  clearInterval(this.timer);
  this.cooldown = true;
  this.timer = setInterval(()=>this.super(),35);
  setTimeout(()=> this.deactivateSuper(), 5000);
}

Player.prototype.deactivateSuper = function()
{
  clearInterval(this.timer);
  cooldownTimeout = setTimeout(()=>this.cooldown=false,7500)
}

Player.prototype.super = function()
{
  console.log('g');

    for(i=35; i<this.superRadius; i+=5)
      {
        ctx.beginPath();
        ctx.strokeStyle = randomRGB(); // Color a borde
        ctx.lineWidth = this.borderWidth;
        ctx.arc(this.x, this.y, this.size+i, 0, 2 * Math.PI);
        ctx.stroke();
    
        this.playerHitbox += i;
        this.collisionDetect();
        this.playerHitbox = this.size;
      }
}

Player.prototype.collisionDetect = function()
{
  for(var j=0; j<ballsArray.length; j++) // Se recorre arra de bolas, se asigna a j ya que en el loop, esta dentro de un for con variable i
  {
    if(ballsArray[j].exists)
    {
      var distanceX = this.x - ballsArray[j].x; // Diferencia posicion X
      var distanceY = this.y - ballsArray[j].y; // Diferencia posicion Y
      var distanceXY = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
      if((distanceXY < this.playerHitbox + ballsArray[j].size))
        {
          sfx.colission.play()
          ballsArray[j].exists = false;
          console.log('COLISION');
          ballsTotal -=1
        }
      }
    }
}

// Configuracion Basica
let ballsArray = [];

const playerSize = 12;
var playerObject = new Player(
  random(0 + playerSize, width - playerSize), // Coordenada X
  random(0 + playerSize, height - playerSize), // Coordenada Y
  playerSize,
  canvas)

var ballsTotal = (ballsStart = 25);
var isStopped = false
var superTimeout = false;
var isOver = false;
let seconds = (totalSeconds = 45);
var gameStartCooldown;
let restart = false;


// Animacion de las pelotas y player

function firstStartGame()
{
  fullGame();
}

function goBackMenu()
{
  menu.style.display ='flex';
  bottomDeco.style.display = 'flex';
  containerBottom.style.display = 'none';
  sectW.style.display = 'none';
    sectL.style.display = 'none';
}

function startGame()
{
  menu.style.display ='none';
  bottomDeco.style.display = 'none';
  containerBottom.style.display = 'flex';

  if(restart)
  {
    clearTimeout(this.cooldown);
    clearInterval(this.timer);
    
    isStopped = false;
    isOver = false;
    ballsArray = [];

    console.log('RESTART');
    sectW.style.display = 'none';
    sectL.style.display = 'none';
    ballsTotal = ballsStart;
  }

  playerObject.cooldown = false;
  sfx.gameMusic.play();
  console.log('START');

  

  while(ballsArray.length<ballsStart) // Habran 25 bolas en total
  {
    var size = random(7, 15); // Se define primero el tamanio por aparte, ya que al general la posicion al azar es necesario que la pelota este completamente por dentro del recuadro y no a medias para no generar errores...
    var ball = new Ball(
      random(0 + size, width - size), // Coordenada X
      random(0 + size, height - size), // Coordenada Y
      random(-10,10), // simbolo determina direccion en X
      random(-10,10), // simbolo determina direccion en Y
      randomRGB(), // Color XYZ
      size,// Tamanio ya generado se asigna aca
      true // Existe o no
    );

    ballsArray.push(ball); // Se mete la bola en el array
  } // FINALIZA WHILE

  timer(seconds);
}

function gameEnd(opt)
{

  document.querySelector('.cb2h1').classList.remove('super-active');
  
  clearInterval(playerObject.timer);
  clearTimeout(playerObject.cooldownTimeout);
    
  setTimeout(()=>{
    containerBottom.style.display = 'none'
    bottomDeco.style.display = 'flex'
    ctx.fillStyle = 'rgba(0,0,0)'
    ctx.fillRect(0, 0, width, height);
    if(opt==0)
    {
      sectW.style.display = 'block'
    }else
    {
      ballsL.innerHTML = ballsTotal;
      sectL.style.display = 'block'
    }
    sfx.gameMusic.stop();
  },400)
}


function loop()
{
  console.log(playerObject.cooldown);
  if(!playerObject.cooldown)
  {
    document.querySelector('.cb2h1').classList.add('super-active');
  }else if(playerObject.cooldown)
  {
    document.querySelector('.cb2h1').classList.remove('super-active');
  }
  

  playerObject.collisionDetect();

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height); // Define recuadro del tamanio de la ventana, con relleno negro semitransparente ;)
  
  playerObject.drawPlayer();

  for(i=0; i<ballsArray.length; i++)
  {
    
    ballsArray[i].draw();
    ballsArray[i].update();
    ballsArray[i].collisionDetect();
    // Por cada bola se ejecutan los tres metodos, se dibuja y se actualiza
  }

  ballsCounter.innerHTML = ballsTotal;

  if(ballsTotal==0)
    {
      gameEnd(0);
      isStopped = true;
      restart = true;
    }else if(isOver)
    {
      gameEnd(1);
      isStopped = true;
      restart = true;
    }

  if(!isStopped)
  {
    requestAnimationFrame(loop);
  }

  
  // Callback function. Le dice al navegador que se desea realizar una animacion, llamando a la funcion nuevamente.
  // Como esta funcion es de un solo uso, meterla dentro de la misma funcion genera un bucle que hace que siempre se ejecute la funcion hasta que un medio externo la detenga.
  // La primera vez sera la unica que genere las 25 bolas, de ahi para alla solo se actualzia el recuadro negro y los metodos de las bolas
  // Al siempre crear un recuadro nuevo, se pone encima de el recuadro anterior junto con las bolas, generando un efecto de movimiento 'destellado'
}

function fullGame()
{
  startGame();
  loop();
}




// Event listener
  menuStartButton.addEventListener('click',()=>firstStartGame())

  menuAgainButton.forEach(e =>{
    e.addEventListener('click', ()=>goBackMenu())
  })
  playButton.forEach(e => {
    e.addEventListener('click', ()=>fullGame());
 });
 
