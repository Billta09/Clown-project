noseX=0;
noseY=0;

function preload() {
clown_nose=loadImage("https://i.postimg.cc/9f5vymyZ/clown-removebg-preview.png")
}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modeLoaded);
poseNet.on('pose', gotPoses);
}
function modeLoaded() {
console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}
function draw() {
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose,noseX-10,noseY-10,20,20)
}
function take_snapshot(){
save('myFilterImage.png');
}

