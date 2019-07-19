
/**
 * There are 3 access modifier Private, Public and protected in TS
 */

class Point{
    private x:number;
    private y:number;
    constructor( x?:number, y?:number){ //Optional parameter
        this.x=x, 
        this.y=y
    }
    draw(){
        //..
        console.log("X:" + this.x + "Y:"+this.y);
        //..  
    }
}

let point = new Point();
//point.x object point will not be able to access x property
point.draw();

//Access modifier in constructor parameters

class Point{
    
    constructor( private x?:number, public y?:number){ //Optional parameter by using ? mark
        this.x=x, 
        this.y=y
    }
    draw(){
        //..
        console.log("X:" + this.x + "Y:"+this.y);
        //..  
    }
}

let point = new Point();
//point.x object point will not be able to access x property
point.y
point.draw();

