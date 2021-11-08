nosex="";
nosey="";
leftwristx="";
rightwristx="";
difference="";
function preload(){
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(80,100);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}
function draw(){
    background("lightgreen");
    fill("black");
    stroke("#581bde");
    textSize(difference);
    text("sana",nosex,nosey);
    document.getElementById("textsize").innerHTML="size of text= "+difference+"px";
}