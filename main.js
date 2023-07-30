mustacheX=0
mustacheY=0

function preload(){

    mustache=loadImage('https://i.postimg.cc/rp95Lx59/mustache-cartoon-isolated-vector-23490826-removebg-preview.png')
}

function setup(){

    canvas=createCanvas(300,300)
    canvas.position(625,150)
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){

    console.log("PoseNet is Intialized")
}
function gotPoses(results){

    if(results.length>0){

        console.log(results)
        mustacheX=results[0].pose.nose.x-40
        mustacheY=results[0].pose.nose.y  
    }
    

}

function draw(){

    image(video,0,0,300,300)
    image(mustache,mustacheX,mustacheY,80,50)
}

function takeSnapshot(){

    save("mustache_face.png")
}
