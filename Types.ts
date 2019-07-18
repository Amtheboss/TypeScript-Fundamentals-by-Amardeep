let a:number;
let b: boolean;
let c:string;
let d: any;
let e: number[];
let f: any[];
let g: any[]=[1,'adds',true];

//Type Enum

/* Let say we are working with group of 
 realated constants like colors, So in plain or vanialla js we define color as follows:-
 const ColorRed = 0;
 const ColorGreen = 1;
 const ColorYellow =2; , which is little bit verbose.

 In All OOLanguages there is a way to put all related Constant into a container using
 enum keyword, same thing goes here */

 enum Color { Red , Green, Yellow }  //Note:-  the 1st element i.e RED automatically get the value 0, Green 1, Yellow 2, and so on but we can explicitly set the value
 

