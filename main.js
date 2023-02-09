pokemon_song ="";
hedwig_song = "";

function setup(){
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    pokemon_song = loadSound("Pokemon Stand Tall.mp3");
    hedwig_song = loadSound("Harry-Potter-Theme.mp3");
}

function draw(){
    image(video, 0, 0, 600, 530);
}