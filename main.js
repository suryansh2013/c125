diff = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model is initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diff = floor(leftWristX - rightWristX);
        console.log(diff)
    }
}
function draw() {
    background('#0000ff');
    textSize(diff);
    fill('#ffff00');
    text('Suryansh', 30, 30)
}