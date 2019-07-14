














// ----------------------------- //
function a() {
	console.log('In fn a')

	function b() {
		console.log('In fn b');

		function c() {
			console.log('In fn c')
		}

		c()
	}

	b()
}

a();
// ----------------------------- //

var name = "Alaa";
var handle = "@alaa";

function getURL(handle) {
	var twitterURL = "https://twitter.com/";

	return twitterURL + handle;
}

getURL(handle);

// ----------------------------- //

function foo() {
	var bar = "Declared in foo";
}

foo();

console.log(bar);

// ----------------------------- //

function first() {
	var name = "Ali";
	console.log(name);
}

function second() {
	var name = "Hossam";
	console.log(name);
}

console.log(name);        // undefined

var name = "Muhammed";

first();       // Ali
second();      // Hossam
  
console.log(name);    // Muhammed

// ---------------------------- //

var name1 = "Kamal";

function logName() {
	console.log(name1);
}

logName();

// ---------------------------- //

var count = 0;

function makeAdder(x) {
	return function inner(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
count += add5(2);



