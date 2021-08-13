function setup() {
    canvas = createCanvas(550, 550);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
leftWristY = 0;
function play() {
    song.play();
}
function preload() {
song = loadSound("music2.mp3");
}
function draw() {
image(video, 0, 0, 600, 500);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +"leftWrist = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist = " + rightWristX +"rightWrist = " + rightWristY);
    }
}