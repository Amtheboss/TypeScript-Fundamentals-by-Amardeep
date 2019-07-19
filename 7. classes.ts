/* So in the interface section we have used a interface to define the shape of the point. But there is a problem 
with this implementation.

In OOP, we have a concept call cohesion which basically mean things which are related to each other, must be part of 
one unit, and they should go together.

Back to our interface example, we have a interface point and we have a standalone function drawPoint, this is where we violated the principle of cohesion

Since drawPoint is highly correlated to Point it should be part of interface Point, and not hanging alone 
*/

/**
 * Note:- Interface cannot have any function defination/implementation, it can have properties and function signature
 */
interface Point{
    x:number,
    y:number,
    drawPoint:()=>void
}

//Func def
let drawPoint = (point) => {
    //do  something...
}

/**
 * In above case still func def is hanging outside, so we need to use concept of classes
 */

 /**
  * Class:- Groups variables (properties) and functions (methods) that are highly related
  */

  class Point{
      x:number;
      y:number;
      drawPoint(){
          //..
          console.log("X:" + this.x + "Y:"+this.y);
          //..  
      }

      //Distance from some another point
      getDistance(another: Point){
          //..
      }
  }

  //Now let create object of the class
  // let point: Point; // Will give error
  let point = new Point();
  point.x =1;
  point.y =2;
  point.drawPoint();