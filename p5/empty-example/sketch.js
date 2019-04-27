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

var buttonArray = [];
var displayArray = [];


function LoadRanCol()  {
	ranColor.r = random(255);
	ranColor.g = random(255);
	ranColor.b = random(255);
}

function preload () {
	buttonPic = loadImage('data/Knopf3.gif');
	machinePic= loadImage('data/Rechenmaschine_neu6.gif');
	soundFormats('mp3');
	buttonSound = loadSound('data/sound.mp3');

}

function setup() {;
  createCanvas(windowWidth, windowHeight);
  imgPosX = windowWidth/2;
  imgPosY = windowHeight/2;
  // pick colors randomly
  LoadRanCol();

  calculator = new picture(imgPosX,imgPosY, machinePic);

  button1 = new button(57, buttonPic,buttonSound,null);
  button2 = new button(57, buttonPic,buttonSound,1);
  button3 = new button(57, buttonPic,buttonSound,2);
  button4 = new button(57, buttonPic,buttonSound,3);
  button5 = new button(57, buttonPic,buttonSound,4);
  button6 = new button(57, buttonPic,buttonSound,5);

  buttonArray.push(button1,button2,button3,button4,button5,button6)

  display1 = new display(50, 25, 20); // round edge does not work
  display2 = new display(50, 25, 20);
  display3 = new display(50, 25, 20);
  display4 = new display(50, 25, 20);
  display5 = new display(50, 25, 20);
  display6 = new display(50, 25, 20);

  displayArray.push(display1,display2,display3,display4,display5,display6);
}


function draw() {
	background(ranColor.r, ranColor.g, ranColor.b);
	
	/** Show the Machine */
	calculator.show()
	noStroke();
	fill('#fae');
	rect(0, 0, 150, 150);

	/* Show all the buttons */
	buttonArray.forEach(function (buttonElement, i) {
		buttonElement.show(calculator.getButtonX(i), calculator.getButtonY());
	});

	/** Goes through all the display objects */
	displayArray.forEach(function (displayElement, i) {
		displayElement.show(calculator.getButtonX(i), calculator.getButtonY()-55,str(buttonArray[i].getPosition()));
	});

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// when user clicks mouse
function mouseClicked() {
	/** Goes through all the button objects */
	buttonArray.forEach(function (buttonElement, i) {
		/** Calls the Button pressed function for each object with the connected display */
		ButtonPressed(buttonElement,displayArray[i]);
	});
}

function ButtonPressed(PressedButton,ConnectedDisplay){
	/** If the button is pressed */
	if (PressedButton.isPressed()){
		if (PressedButton.rotateRight()){
			RotateConnectedButton(PressedButton);
		}
		ConnectedDisplay.color(random(255),random(255),random(255))
	}
}
function RotateConnectedButton(PressedButton){
	/** Checks if we have connected an overflow button */
	if (PressedButton.getConnectedIndex() != null){
		/** Gets the connected button */
		var ConnectedButton = buttonArray[PressedButton.getConnectedIndex()-1];
		/** Rotate the connected button and check for overflow. Reenters the function again if the connected button overflows */
		if (ConnectedButton.rotateRight()){
			RotateConnectedButton(ConnectedButton);
		}
	}
}

function keyPressed() {
	/** If Enter is pressed */
	if (keyCode == ENTER) {
		/** Reset all buttons */
		buttonArray.forEach(function (buttonElement, i) {
			buttonElement.reset();
		});
		/** Play sound after reset */
		buttonSound.setVolume(0.4);
		buttonSound.play();
	}
}