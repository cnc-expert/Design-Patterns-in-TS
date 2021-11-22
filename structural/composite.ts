// Structural design pattern "Composite"
//
// A partitioning design pattern. Describes a group of objects that are treated
// the same way as a single instance of the same type of object.
// The intent of a composite is to "compose" objects into tree structures
// to represent part-whole hierarchies. Implementing the composite pattern
// lets clients treat individual objects and compositions uniformly

interface Equipment {
	getPrice(): number;
	getMass(): number;
}

// "Composite"
class Assembly implements Equipment {
	constructor(private parts: Equipment[]) {}

	getPrice() {
		return this.parts.map(p => p.getPrice()).reduce((a, b) => a + b);
	}

	getMass() {
		return this.parts.map(p => p.getMass()).reduce((a, b) => a + b);
	}
}

// "Leaf"
class Part implements Equipment {

	constructor(private mass: number, private price: number) {}

	getPrice() { return this.price; }

	getMass() { return this.mass; }
}

// ----- Usage -----
console.clear();

const piston = new Part(0.2, 1000);
const crankshaft = new Part(4, 6000);
const sparkPlug = new Part(0.1, 200);
const sensor = new Part(0.2, 1000);
const starter = new Part(1.2, 3000);
const generator = new Part(1.2, 3000);
const motorOil = new Part(3, 3000);
const motor = new Assembly([
	piston,
	crankshaft,
	sparkPlug,
	sensor,
	starter,
	generator,
	motorOil,
]);

const gear = new Part(1, 3000);
const bearing = new Part(0.1, 1000);
const shaft = new Part(1, 2000);
const transmisOil = new Part(3, 3000);
const transmission = new Assembly([gear, bearing, shaft, transmisOil]);

const body = new Part(600, 300000);
const wheel = new Part(4, 6000);
const wires = new Part(4, 6000);
const fuelPump = new Part(1, 4000);
const stearingWheel = new Part(1, 1000);
const car = new Assembly([body, motor, transmission, wheel, wires, fuelPump, stearingWheel]);

console.log(car.getMass());
console.log(car.getPrice());
