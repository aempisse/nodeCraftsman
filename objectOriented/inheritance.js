// Object.create() = function(o) {
// 	var F = function() {};
// 	F.prototype = o;
// 	return new F();
// }

{
	var Vehicle = function() {};

	Vehicle.prototype.drive = function() {
		console.log("vroom...");
	};

	var Car = function() {};

	Car.prototype = new Vehicle();
	Car.prototype.honk = function() {
		console.log("honk honk");
	};

	var myCar = new Car();

	myCar.drive();
	myCar.honk();

	console.log(myCar.prototype);
}

{
	var Vehicle = function() {};

	Vehicle.drive = function() {
		console.log("vroom...");
	};

	var Car = Object.create(Vehicle);

	Car.honk = function() {
		console.log("honk honk");
	}

	var myVehicle = Object.create(Vehicle);
	var myCar1 = Object.create(Car);
	var myCar2 = Object.create(Car);

	console.log(myVehicle.prototype);
	console.log(myCar1.prototype);
	console.log(myCar2.prototype);

	console.log(Vehicle.prototype);
	console.log(Car.prototype);
}