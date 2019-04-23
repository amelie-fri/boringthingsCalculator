class display {
    constructor (w,h,e){
        
        this.w = w;
        this.h = h;
        this.e = e;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }
    show(x,y) {
        this.x = x;
        this.y = y;
        rectMode(CENTER);
        noStroke();
        fill(this.r, this.g, this.b);
	    rect(this.x, this.y, this.w, this.h);
    }

    color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    text (t, xt, yt) {
        this.t = t;
        this.xt = xt;
        this.yt = yt;
        fill('black');
        textFont('Georgia');
        textSize(25);
        text(str(this.t), xt, yt);
        //text(str(this.t), 515, 427);
    }

}