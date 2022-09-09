status = "";

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("object_placeholder").value;
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    
}

function modelLoaded()
{
    console.log("MODEL LOADED!!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 380, 380);
}