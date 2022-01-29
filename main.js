harry_potter = "";
peter_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
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
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function draw()
{
    image(video,0,0,600,400);
}
function modelLoaded()
{
    console.log("Model is Loaded");
}
function gotposes(results)
{
    if(results.length > 0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+"leftWrist_y = "+leftWrist_y);
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+"rightWrist_y = "+rightWrist_y);
    }
}
