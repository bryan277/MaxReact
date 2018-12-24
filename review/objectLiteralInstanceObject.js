//OBJECT LITERALS
//An object literal is "Flat". You create it, you add properties and methods to it, and all those porperites and methods are public.
//A javaScript object literal does not, by nature, provide private scope. But any of the members of an object literal can certainly be a
// function that is capable of private scope. Object literals are useful because they allow you to create clean name-spaced code that
// is easy to pass around and consume.

// var data = {
//     fname: "foo",
//     addOne: function(num){ return num + 1}
// }
//EXAMPLE #1
let data = {
  fname:'foo',
  addOne: (num) => num + 1,
  addTwo: (num) => num + 2
}

console.log(data.fname);
//foo
console.log(data.addOne(4));
//5
console.log(data.addTwo(4));
//6

data.fname = 'bar';
console.log(data.fname);
//bar

data.lname = 'baz';
console.log(data.lname);
//baz

data.say = () => 'this is the say function';
console.log(data.say());
//this is the say function

//INSTANCE OBJECTS
//An instance is what is reutnred when instaniting a JavaScript constructor function, using the JavaScript "new" keyword. When you say
// “var bar = new Foo()”, “bar” becomes an “instance” of the function “Foo()”. Any expressions within Foo() are executed, any
// local variables in Foo() are copied and provided in “bar”, and the value of “this” inside of “bar”, refers to “bar”. The
// function “Foo” is never changed in any way; it simply acts as a “blueprint” for “bar”, and “bar” is an “instance” of “Foo”.
// Any local variables inside of “bar” are completely private and can only be muted by privileged members of that object.
//EXAMPLE #2


var Foo = function(){
	var _color= "blue";
	console.log("welcome to your new instance object");
	this.getColor = function(){
		return _color;
	}
	this.setColor = function(newColor){
	   _color = newColor;
	}
}

var bar = new Foo();
// welcome to your new instance object
console.log(bar._color);
// undefined
console.log(bar.getColor);
//[Function] blue
bar.setColor('red');
console.log(bar.getColor);
//red
