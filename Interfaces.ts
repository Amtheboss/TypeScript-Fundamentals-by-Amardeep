//what if we have a method/ function  require multiple values/ parameter 


// One way to do this is as follow:-
let drawPoint = (x,y) => {
    //do  something...
}
 
//Function call:-
drawPoint(2,3);
//Which is not a good way, what we can do is pass a object instead of passing individual parameter

//Another way 
let drawPoint1 = (point) => {
    //do  something...
}

//function Call:- 
 drawPoint1({
     x:1,
     y:3
 })

 //Limitation:-
 // we can pass anything to the drawPoint1 function, maybe wrong parameter which will cause run time error 
 drawPoint1({
    z:"Wrong parameter"
})

//So there are 2 solution to overcome this problem
//1. using inline annotations, 2. using Interfaces 


//1.using inline annotations

let drawPoint2 = (point: {x:number, y:number}) => {
    //do  something...
}

//Problems:- We cannot keep writing this "point: {x:number, y:number}" object literal everywhere, so better approach is to use Interfaces


//Steps:- 

// 1.st define interface Note:- Interfaces are in pascal case 
interface Point {
    x: number,
    y: number
} 

//2nd. pass / declare parameter as a interface  
let drawPoint3 = (point: Point) => {
    //do  something...
}

//3. function Call:- 
drawPoint3({
    x:1,
    y:4
})