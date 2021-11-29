// var x = "hello world!";

// function makeMultiplier (multiplier){
// 	var myfunc = function(x) {
// 		console.log("x = " + x); 
// 		return multiplier * x;
// 	};
// 	return myfunc;
// }

// var multiplier3 = makeMultiplier(3);
// // console.log(multiplier3(10));

// function doOperation (x, opt){
// 	return opt(x);
// }





// var result = doOperation(5, multiplier3);
// console.log(retsult);


// function test(){
// 	console.log(this);
// 	this.name = "parisa";
// }

// test();
// console.log(window.name);




// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();


var names = ["pari", "arham", "amir"];
for(var name in names){
	console.log(name);
}
