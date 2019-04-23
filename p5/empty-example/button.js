class button {
    constructor (d,img){
        
        this.d = d;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.angle =0;
        this.img = img
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
    rotate(direction){
        if (direction){
            this.angle = this.angle + 36;
        }
        else {
            this.angle = this.angle - 36;
        }
        
        if ((this.angle >=360)||(this.angle<-360)){
            this.angle=0;
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

    isPressed() {
	    if (dist(mouseX, mouseY, this.x, this.y) < (this.d/2)) {
            buttonSound.setVolume(0.4);
            buttonSound.play();
            return true;
        }
        else {
            return false;
        }
    }

}