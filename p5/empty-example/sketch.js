var img;
let imgPosX;
let imgPosY;

//?? map function to map wheel and number together ? :)

//object oriented programming, one for every circle :) 
var ranColor = {
	r: 0,
	g: 0,
	b: 0
};


function LoadRanCol()  {
	ranColor.r = random(255);
	ranColor.g = random(255);
	ranColor.b = random(255);
}

function preload () {
	buttonPic = loadImage('data/Knopf2.gif');
	machinePic= loadImage('data/Rema5.gif');
	soundFormats('mp3');
	buttonSound = loadSound('data/sound.mp3'); // sound by Mike Koenig 

}

function setup() {;
  createCanvas(windowWidth, windowHeight);
  imgPosX = windowWidth/2;
  imgPosY = windowHeight/2;
  // pick colors randomly
  LoadRanCol();

  calculator = new picture(imgPosX,imgPosY, machinePic);

  button1 = new button(57, buttonPic);
  button2 = new button(57, buttonPic);
  button3 = new button(57, buttonPic);
  button4 = new button(57, buttonPic);
  button5 = new button(57, buttonPic);
  button6 = new button(57, buttonPic);

  display1 = new display(50, 20, 20); // round edge does not work
  display2 = new display(50, 20, 20);
  display3 = new display(50, 20, 20);
  display4 = new display(50, 20, 20);
  display5 = new display(50, 20, 20);
  display6 = new display(50, 20, 20);  

}


function draw() {
	background(ranColor.r, ranColor.g, ranColor.b);
	calculator.show()
	noStroke();
	fill('#fae');
	rect(0, 0, 150, 150);

	button1.show(calculator.getButtonX(0)-2, calculator.getButtonY());
	button2.show(calculator.getButtonX(1), calculator.getButtonY());
	button3.show(calculator.getButtonX(2), calculator.getButtonY());
	button4.show(calculator.getButtonX(3), calculator.getButtonY());
	button5.show(calculator.getButtonX(4), calculator.getButtonY());
	button6.show(calculator.getButtonX(5), calculator.getButtonY());

	display1.show(calculator.getButtonX(0)-2, calculator.getButtonY()-55);
	display2.show(calculator.getButtonX(1), calculator.getButtonY()-55);
	display3.show(calculator.getButtonX(2), calculator.getButtonY()-55);
	display4.show(calculator.getButtonX(3), calculator.getButtonY()-55);
	display5.show(calculator.getButtonX(4), calculator.getButtonY()-55);
	display6.show(calculator.getButtonX(5), calculator.getButtonY()-55);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// when user clicks mouse
function mouseClicked() {
	// Check if mouse is inside the circle
	if (button1.isPressed()) {
		//buttonSound.play();
		LoadRanCol();
		button1.color(ranColor.r, ranColor.g, ranColor.b);	
		button1.rotate(true);
		display1.color(ranColor.r, ranColor.g, ranColor.b);
		print(button1.getPosition());
		//display1.text(str(button1.getPosition()), 515, 427);
		display1.text(str(button1.getPosition()), calculator.getButtonX(0)-7, calculator.getButtonY()-50);
		 
	}
	else if (button2.isPressed()) {
		LoadRanCol();
		button2.color(ranColor.r, ranColor.g, ranColor.b);
		button2.rotate(true)
		display2.color(ranColor.r, ranColor.g, ranColor.b);
		print(button2.getPosition())
		display2.text(str(button2.getPosition()), calculator.getButtonX(1)-5, calculator.getButtonY()-50);
	}
	else if (button3.isPressed()) {
		LoadRanCol();
		button3.color(ranColor.r, ranColor.g, ranColor.b);
		button3.rotate(true)
		display3.color(ranColor.r, ranColor.g, ranColor.b);
		print(button3.getPosition())
		display3.text(str(button3.getPosition()), calculator.getButtonX(2)-5, calculator.getButtonY()-50);
	}
	else if (button4.isPressed()) {
		LoadRanCol();
		button4.color(ranColor.r, ranColor.g, ranColor.b);
		button4.rotate(true)
		display4.color(ranColor.r, ranColor.g, ranColor.b);
		print(button4.getPosition())
		display4.text(str(button4.getPosition()), calculator.getButtonX(3)-5, calculator.getButtonY()-50);
	}
	else if (button5.isPressed()) {
		LoadRanCol();
		button5.color(ranColor.r, ranColor.g, ranColor.b);
		button5.rotate(true)
		display5.color(ranColor.r, ranColor.g, ranColor.b);
		print(button5.getPosition())
		display5.text(str(button5.getPosition()), calculator.getButtonX(4)-5, calculator.getButtonY()-50);
	}
	else if (button6.isPressed()) {
		LoadRanCol();
		button6.color(ranColor.r, ranColor.g, ranColor.b);
		button6.rotate(true)
		display6.color(ranColor.r, ranColor.g, ranColor.b);
		print(button6.getPosition())
		display6.text(str(button6.getPosition()), calculator.getButtonX(5)-5, calculator.getButtonY()-50);
	}
	
}
