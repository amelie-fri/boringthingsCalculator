class numberObj{
    constructor(nArraySize){
        this.n = [];
        for (let i = 0; i < nArraySize; i++){
            this.n.push(0);
        }
        
        this.active = false;
    }
    generateRandomNumbers(base,offset){
        for (let i = 0; i < this.n.length; i++) { 
            this.n[i] = parseInt(random(base)+offset);
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
    checkNumber(fvalue){
        const arrSum = arr => arr.reduce((a,b) => a + b, 0);
        if (fvalue==arrSum(this.n)){
            return true;
        }
        else{
            return false;
        }
    }

}