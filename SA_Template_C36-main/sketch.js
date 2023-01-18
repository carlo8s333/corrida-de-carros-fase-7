var backgroundImg,database,form,player,game,playerCount;
var gameState,car1_img,car2_img,track;
var car1,car2;
var cars=[];
var allPlayers;
var fuelImage,powerCoinImage,lifeImage;
var fuel,powerCoin;
function preload(){
    backgroundImg = loadImage("assets/background.png");
    car1_img = loadImage("assets/car1.png");
    car2_img = loadImage("assets/car2.png");
    track = loadImage("assets/track.jpg");
    fuelImage = loadImage("assets/fuel.png");
    powerCoinImage = loadImage("assets/goldCoin.png");
    lifeImage = loadImage("assets/life.png");
}

function setup() {
    

    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background(backgroundImg);
    if(playerCount ==2){
        game.updateState(1);
    }
    if(gameState ==1){
        game.play();
    }

    if(gameState == 2){
        game.showLeaderBoard();
    }
}