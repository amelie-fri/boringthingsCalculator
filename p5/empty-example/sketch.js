var img;
let imgPosX;
let imgPosY;
const numMax = 500000-1;
const numLevelMax = 10000;
var numLevel = 1;

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

	// Create number Generator
	number = new numberObj(2);
	interateNumbers();

	// Construct button classes. Last variable refers to the index
	// of the connected button (to the left) button 1 is all the way to the left
	button1 = new button(57, buttonPic,buttonSound,null,100000);
	button2 = new button(57, buttonPic,buttonSound,0,10000);
	button3 = new button(57, buttonPic,buttonSound,1,1000);
	button4 = new button(57, buttonPic,buttonSound,2,100);
	button5 = new button(57, buttonPic,buttonSound,3,10);
	button6 = new button(57, buttonPic,buttonSound,4,1);

	// Create button array 
	buttonArray.push(button1,button2,button3,button4,button5,button6);

	// Construct display classes 
	display1 = new display(50, 28, 10); // round edge does not work
	display2 = new display(50, 28, 10);
	display3 = new display(50, 28, 10);
	display4 = new display(50, 28, 10);
	display5 = new display(50, 28, 10);
	display6 = new display(50, 28, 10);

	// Create display array. The index refers to the button with the same index in buttonarray
	displayArray.push(display1,display2,display3,display4,display5,display6);

	// number pluss number
	ibutton1 = new infoButton(250,20);
	// reset button
	ibutton3 = new infoButton(250,20);
	// done button
	ibutton4 = new infoButton(250,20);
}


function draw() {
	// Draws the Background 
	background(ranColor.r, ranColor.g, ranColor.b);
	
	// Show the Machine
	calculator.show()

	//ibutton1.update(900, 60, 200, 50);
	
	// ibutton1.update(windowWidth/2, 70, 300, 50);
	ibutton1.update(imgPosX, calculator.getY()+0.16*calculator.getHeight(), 300, 50);
	
	ibutton1.setText( str(number.getNumber(0))+ '+' + str(number.getNumber(1)) + ' = ' + ' ? ' );
	ibutton1.show();

	ibutton3.update(imgPosX - (1/5)*calculator.getWidth(),calculator.getY()+(0.83)*calculator.getHeight(), 200, 50);
	ibutton3.setText('Reset');
	ibutton3.show();
	
	ibutton4.update(imgPosX + (1/5)*calculator.getWidth(),calculator.getY()+(0.83)*calculator.getHeight(), 200, 50);
	if (number.checkNumber(CalculateMainNumber())){
		ibutton4.setText('Done!');
	}
	else{
		ibutton4.setText('...');
	}
	ibutton4.show();

	
	
	ibutton4.show();

	// Show all the buttons 
	buttonArray.forEach(function (buttonElement, i) {
		buttonElement.show(calculator.getButtonX(i), calculator.getButtonY());
	});

	// Goes through all the display objects
	displayArray.forEach(function (displayElement, i) {
		displayElement.show(calculator.getButtonX(i), calculator.getButtonY()-58,str(buttonArray[i].getPosition()));
	});

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// when user clicks mouse
function mouseClicked() {
	// Goes through all the button objects
	buttonArray.forEach(function (buttonElement, i) {
		// Calls the Button pressed function for each object with the connected display
		ButtonPressed(buttonElement,displayArray[i]);
	});
	// Loads new random colors
	LoadRanCol();

	if (infoBox.getResetButton().isPressed()){
		// Reset all buttons
		buttonArray.forEach(function (buttonElement, i) {
			buttonElement.reset();
		});
		// Play sound after reset
		buttonSound.setVolume(0.4);
		buttonSound.play();
	}

	// Amelie Reset button
	if (ibutton3.isPressed()){
		buttonArray.forEach(function (buttonElement, i) {
			buttonElement.reset();
		});
	}
}

function ButtonPressed(PressedButton,ConnectedDisplay){
	// If the button is pressed
	if (PressedButton.isPressed()){
		if (PressedButton.rotateRight()){
			RotateConnectedButton(PressedButton);
		}
		ConnectedDisplay.color(random(255),random(255),random(255))
	}
}
function RotateConnectedButton(PressedButton){
	// Checks if we have connected an overflow button
	if (PressedButton.getConnectedIndex() != null){
		// Gets the connected button 
		var ConnectedButton = buttonArray[PressedButton.getConnectedIndex()];
		// Rotate the connected button and check for overflow. 
		// Reenters the function again if the connected button overflows
		if (ConnectedButton.rotateRight()){
			RotateConnectedButton(ConnectedButton);
		}
	}
}

function keyPressed() {
	// If Enter is pressed
	if (keyCode == ENTER) {
		// Generate new numbers
		interateNumbers();
	}
}

function interateNumbers(){
	number.generateRandomNumbers(numMax/(numLevelMax/numLevel),1);
	numLevel = numLevel*10;
	if (numLevel >= numLevelMax) numLevel=1;
}

function LoadRanCol()  {
	ranColor.r = random(255);
	ranColor.g = random(255);
	ranColor.b = random(255);
}

function CalculateMainNumber(){
	let value = 0;
	buttonArray.forEach(function (buttonElement, i) {
		value = value + buttonElement.getValue();
	});
	return value;
}