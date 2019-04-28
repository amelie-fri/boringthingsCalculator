class numberObj{
    constructor(nArraySize){
        this.n = [];
        for (let i = 0; i < nArraySize; i++){
            this.n.push(0);
        }
        
        this.active = false;
    }
    generateRandomNumbers(){
        for (let i = 0; i < this.n.length; i++) { 
            this.n[i] = parseInt(random(999999));
          }
    }
    setNumber(n,value){
        if(n < this.n.length){
            this.n[n] = parseInt(value);
        }
    }
    getNumber(n){
        if(n < this.n.length){
            return this.n[n];
        }
    }

}