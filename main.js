function preload() {
    
}

function setup() {
    canvas=createCanvas(500,400);
    video=createCapture(VIDEO);
    video.hide();
    canvas.position(400,150);
}

function draw() {
    image(video,0,0,500,400);
}