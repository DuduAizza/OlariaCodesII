// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro /2;

//Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 70;

//Variáveis do Oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let wRaqueteOponente = 10;
let hRaqueteOponente = 70;
let velocidadeYOponente;

//Variáveis dos obstáculos
let xObstaculoEsq = 180
let yObstaculoEsq = 150
let wObstaculoEsq = 10
let hObstaculoEsq = 80

let xObstaculoDir = 410
let yObstaculoDir = 150
let wObstaculoDir = 10
let hObstaculoDir = 80

// Velocidade da Bolinha
let velocidadeXBolinha = 12;
let velocidadeYBolinha = 12;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  //movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  obstaculoEsquerda(xObstaculoEsq, yObstaculoEsq)
  obstaculoDireita(xObstaculoDir, yObstaculoDir)
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

 function mostraBolinha() {
   circle (xBolinha, yBolinha, diametro)
 }
     function mostraRaquete(x, y) {
    rect(x, y, wRaquete, hRaquete);   
    }
     
  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha
    yBolinha += velocidadeYBolinha
  }
 
  function obstaculoEsquerda(x,y) {
    rect(x,y, wObstaculoEsq, hObstaculoEsq)
  }

  function obstaculoDireita(x,y) {
    rect(x, y, wObstaculoDir, hObstaculoDir)
  }

  function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}

  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
  }
 
function verificaColisaoRaquete(){
    if (xBolinha - raio < wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete) { 
    velocidadeXBolinha *=-1;
    }
  }

function colisaoMinhaRaqueteBiblioteca(){
    colidiu = collideRectCircle(xRaquete, yRaquete,wRaquete, hRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
    velocidadeXBolinha *= -1;
      raquetada.play();
    }
  }

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
    velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

function incluiPlacar() {
  textAlign(CENTER);
  textSize(64);
  fill(255);
  text(meusPontos, 238, 60);
  text(pontosDoOponente, 361, 60);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
