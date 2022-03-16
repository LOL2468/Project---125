rwx = 0
lwx = 0
difference = 0

function preload()
{
    
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(650, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!!!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rwx = results[0].pose.leftWrist.x;
        lwx = results[0].pose.leftWrist.x;
        difference = floor(lwx - rwx);
        console.log("lwx = "+lwx+" rwx"+rwx+" difference"+difference);
    }
}

function draw()
{
    textSize(difference)
    document.getElementById("square_sides").innerHTML = "Font of the text will be = "+difference+"px"
    fill("pink")
    text("Himaksh", 50, 400);
}