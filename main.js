function preload() {
	world_start=loadSound("world_start.wav");
	coin_collect=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	jump=loadSound("jump.wav");
	kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.position(405,1320);
	video.size(450,250);
	//video.parent("GameConsole");//
	instializeInSetup(mario);

	posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log(" MoDeL lOaDeD");
  }
  function gotPoses(results){
	console.log(results);
	if(results.length>0){
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	}
  }
function draw() {
	game();
}