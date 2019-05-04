class picture {
    constructor(x,y,img,rf){
        this.img = img;
        this.xc = x;
        this.yc = y;
        this.resizeFactor = rf;
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
    getCenterX(){
        return this.xc
    }
    getCenterY(){
        return this.yc
    }
    getButtonY(){
        return parseInt(this.getHeight()*0.65)+2 + this.getY()
    }
    getButtonX(n){
        return parseInt(this.getWidth()*0.29) + this.getX() + (parseInt((68/this.resizeFactor)*n));
    }
}