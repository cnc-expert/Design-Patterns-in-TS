// Behavioral design pattern "Visitor"
//
// It is a way of separating an algorithm from an object structure
// on which it operates. A practical result of this separation is the ability
// to add new operations to existing object structures
// without modifying the structures.
// It is one way to follow the open/closed principle.

abstract class Car {
	abstract info(): string;
	accept(visitor: (car: Car) => void) {
		visitor(this);
	}
}

class Bumer extends Car {
	info() {
		return "It's a Bumer";
	}
}

class Reno extends Car {
	info() {
		return "It's a Reno";
	}
}

class Taz extends Car {
	info() {
		return "It's a Taz";
	}
}

const carVisitor = (car: Car) => {
	// Business logic here
	console.log(car.info());
}

// ----- Usage -----
console.clear();

const bumer = new Bumer();
const reno = new Reno();
const taz = new Taz();
bumer.accept(carVisitor);
reno.accept(carVisitor);
taz.accept(carVisitor);
