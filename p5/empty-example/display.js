class display {
    constructor (w,h,e,rf){
        
        this.w = parseInt(w/rf);
        this.h = parseInt(h/rf);
        this.e = parseInt(e/rf);
        this.resizeFactor = rf
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }
    show(x,y,t) {
        this.x = x;
        this.y = y;
        rectMode(CENTER);
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h, this.e);
        this.text(t);
    }

    color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    text(t) {
        let tSize = parseInt(25/this.resizeFactor);
        fill('black');
        textFont('Verdana');
        textSize(tSize);
        textAlign(CENTER,CENTER);
        text(str(t), this.x, this.y);
    }

}
