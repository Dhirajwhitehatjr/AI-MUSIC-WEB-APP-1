harry_potter = "";
peter_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
harry_potter_status =  "";
peter_pan_status =  "";
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
    harry_potter_status = harry_potter.isPlaying();
    peter_pan_status = peter_pan.isPlaying();
    fill("red");
    stroke("white");
    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        peter_pan.stop();
        if(harry_potter_status == false){
            harry_potter.play();
            document.getElementById("song_name").innerHTML = "Playing Harry Potter Song";
        }
    }
    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        harry_potter.stop();
        if(peter_pan_status == false){
            peter_pan.play();
            document.getElementById("song_name").innerHTML = "Playing Peter Pan Song";
        }
    }
}
function modelLoaded()
{
    console.log("Model is Loaded");
}
function gotposes(results)
{
    if(results.length > 0){
        console.log(results);
        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+"leftWrist_y = "+leftWrist_y);
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+"rightWrist_y = "+rightWrist_y);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log(scoreleftWrist);
        console.log(scorerightWrist);
    }
}
