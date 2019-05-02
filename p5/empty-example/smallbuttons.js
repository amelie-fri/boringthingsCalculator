class infoButton {
    constructor (c,e){
        this.xc = 0;
        this.yc = 0;
        this.w = 0;
        this.h = 0;
        this.e = e;
        this.color = c;
        this.textString = '';
    }

    update(x,y,w,h,e){
        this.xc = x;
        this.yc = y;
        this.w = w;
        this.h = h;
    }

    show(){
        fill(this.color);
        rectMode(CENTER)
        rect(this.xc, this.yc, this.w,this.h, this.e);
        this.showText();
    }

    showText() {
        fill('black');
        textFont('Courier');
        textSize(28);
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