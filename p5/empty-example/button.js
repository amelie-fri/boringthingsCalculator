class button {
    constructor (d,img,sound,connectedIndex,base){
        
        this.d = d;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.angle =0;
        this.img = img;
        this.sound = sound;
        this.connectedIndex = connectedIndex;
        this.base = base;
    }
    show(x,y) {
        this.x = x;
        this.y = y;
        // Saves the previous context
        push();
        translate(this.x, this.y);
        rotate(PI / 180 * this.angle);
        imageMode(CENTER) 
        image(this.img, 0, 0);
        // Restores the previous context
        pop();

    }
    rotateRight(){
        this.angle = this.angle + 36;
        if (this.angle >=360) {
            this.angle=0;
            return true;
        }
        else{
            return false;
        }
    }
    getPosition(){
        return this.angle/36
    }

    color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    randColor(){
        this.color(random(255),random(255),random(255));
    }

    isPressed() {
	    if (dist(mouseX, mouseY, this.x, this.y) < (this.d/2)) {
            this.playSound()
            return true;
        }
        else {
            return false;
        }
    }

    playSound(){
        this.sound.setVolume(0.4);
        this.sound.play();
    }
    
    reset(){
        this.angle=0;
    }
    getConnectedIndex(){
        return this.connectedIndex;
    }
    getValue(){
        return this.getPosition()*this.base;
    }

}