harry_potter = "";
peter_pan = "";
function preload()
{
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600,400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}
function draw()
{
    image(video,0,0,600,400);
}
