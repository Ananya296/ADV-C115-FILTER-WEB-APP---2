function preload()
{

}

function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(650, 650);
   video.hide();

   poseNet = ml5.poseNet(video, posenetLoaded);
    poseNet.on('pose', gotPoses);

}

function posenetLoaded()
{
    console.log("Posenet loaded !")
}

function draw()
{
    image(video, 0,0, 300, 300);
}


function take_snapshot()
{
    save("PhotoWithLipstick.jpg");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      console.log("Nose x = " + results[0].pose.nose.x);
      console.log("Nose y = " + results[0].pose.nose.y);
  }
}