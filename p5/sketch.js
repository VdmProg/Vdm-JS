let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 6;

let meusPontos = 0;
let pontosDoOponente = 0;

let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  moveBolinha();
  colizaoParede();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  // colizaoRaquete();
  colizaoRaqueteBiblioteca(xRaquete, yRaquete);
  colizaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  marcaPonto();
  
}
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function colizaoParede(){
  if (xBolinha > width - raio || xBolinha < 0 + raio){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height - raio || yBolinha < 0 + raio){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function colizaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colizaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos++;
    ponto.play();
  } if (xBolinha < 10){
    pontosDoOponente++;
    ponto.play();
  }
}