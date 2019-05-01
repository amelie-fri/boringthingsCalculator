class infoBoxObj {
    constructor(){
        this.xc = 0;
        this.yc = 0;
        this.w = 0;
        this.h = 0;

        this.resetButton = new infoButton(255);
        this.resetButton.setText('Reset');

        // Add the buttons to the class because we want to update them together
        this.number1 = new infoButton(255);
        this.number2 = new infoButton(255);
        this.mainNumber = new infoButton(255);

    }
    // Update values based on the size of the object to the right (calculator)
    update(x,y,w,h){
        this.xc = x-w/6;
        this.yc = y;
        this.w = w/3;
        this.h = h/2;

        // Position of buttons in infopanel is based in sizes of the panel. Can be optimized...
        this.resetButton.update(this.xc,this.yc+this.h/4,this.w/2,this.h/8);
        this.number1.update(this.xc,this.yc-this.h/4,this.w/2,this.h/8);
        this.number2.update(this.xc,this.yc-(this.h/3),this.w/2,this.h/8);
        this.mainNumber.update(this.xc,this.yc-(this.h/2),this.w/2,this.h/8);
    }
    show(){
        noStroke();
        fill(0);
        rectMode(CENTER)
        rect(this.xc, this.yc, this.w,this.h);
        this.resetButton.show();
        this.number1.show();
        this.number2.show();
        this.mainNumber.show();
    }
    getResetButton(){
        return this.resetButton;
    }
    getNumberButton(n){
        if (n == 1){
            return this.number1;
        }
        else{
            return null;
        }
    }
}

class infoButton {
    constructor(c){
        this.xc = 0;
        this.yc = 0;
        this.w = 0;
        this.h = 0;
        this.color = c;
        this.textString = '';
    }

    update(x,y,w,h){
        this.xc = x;
        this.yc = y;
        this.w = w;
        this.h = h;
    }

    show(){
        fill(this.color);
        rectMode(CENTER)
        rect(this.xc, this.yc, this.w,this.h);
        this.showText();
    }

    showText() {
        fill('black');
        textFont('Courier');
        textSize(25);
        textAlign(CENTER,CENTER)
        text(str(this.textString), this.xc, this.yc);
    }

    setText(t){
        this.textString = t;
    }
    getText(){
        return this.textString;
    }

    getX(){
        return this.xc - this.w/2;
    }
    getY(){
        return this.yc - this.h/2;
    }
    isPressed(){
        if ((mouseX <= (this.getX()+this.w)) && (mouseX >= this.getX()) && (mouseY <= (this.getY()+this.h)) && (mouseY>=this.getY())){
            return true;
        } 
        else{
            return false;
        }
    }
}