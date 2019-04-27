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

  /** Construct button classes. Last variable refers to the index of the connected button (to the left) button 1 is all the way to the left */
  button1 = new button(57, buttonPic,buttonSound,null);
  button2 = new button(57, buttonPic,buttonSound,0);
  button3 = new button(57, buttonPic,buttonSound,1);
  button4 = new button(57, buttonPic,buttonSound,2);
  button5 = new button(57, buttonPic,buttonSound,3);
  button6 = new button(57, buttonPic,buttonSound,4);

  /** Create button array */
  buttonArray.push(button1,button2,button3,button4,button5,button6)

  /** Construct display classes */
  display1 = new display(50, 25, 20); // round edge does not work
  display2 = new display(50, 25, 20);
  display3 = new display(50, 25, 20);
  display4 = new display(50, 25, 20);
  display5 = new display(50, 25, 20);
  display6 = new display(50, 25, 20);
  
  /** Create display array. The index refers to the button with the same index in buttonarray */
  displayArray.push(display1,display2,display3,display4,display5,display6);
}


function draw() {
	/** Draws the Background */
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
	/** Loads new random colors */
	LoadRanCol();
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
		var ConnectedButton = buttonArray[PressedButton.getConnectedIndex()];
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

function LoadRanCol()  {
	ranColor.r = random(255);
	ranColor.g = random(255);
	ranColor.b = random(255);
}