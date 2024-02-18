noseX = 0;
noseY = 0;
difference = 0;
left_wrist_x = 0;
right_wrist_x =0;

function setup() {
    video = createCapture(VIDEO);
    video.size (550, 500);
    canvas = createCanvas(550,500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function draw() {
        background('#969A97');
        fill("#F90093");
        document.getElementById("font_size").innterHTML = "font size of the text will be" + difference + "px";
        textSize(difference);
        text("Zyra", 50, 400);
    }
    
    function modelLoaded() {
     console.log('PoseNet Is Initialized') 
    }
    
    function gotPoses(results)
    {
        if(results.length > 0 )
        {
            console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrsit_x = results[0].pose.rightWrist.x
        difference = floor(left_wrist_x - right_wrist_x);
        }
    }