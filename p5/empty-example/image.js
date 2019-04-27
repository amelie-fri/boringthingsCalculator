class picture {
    constructor(x,y,img){
        this.img = img;
        this.xc = x;
        this.yc = y;
    }
    show(){
        imageMode(CENTER);
        image(this.img, this.xc,this.yc);
    }
    getX(){
        return this.xc - (this.img.width/2)
    }
    getY(){
        return this.yc - (this.img.height/2)
    }
    getWidth(){
        return this.img.width
    }
    getHeight(){
        return this.img.height
    }
    getButtonY(){
        //return parseInt(this.getHeight()*0.685) + this.getY()
        return parseInt(this.getHeight()*0.65)+2 + this.getY()
    }
    getButtonX(n){
        return parseInt(this.getWidth()*0.29) + this.getX() + 68*n
    }
}