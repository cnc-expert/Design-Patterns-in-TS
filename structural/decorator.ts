// Structural design pattern "Decorator"
//
// Allows behavior to be added to an individual object, dynamically,
// without affecting the behavior of other objects from the same class.
// The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.[2] Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object.

interface ITypicalCar {
	getPrice(): number;
	getDescription(): string;
}

class SimpleCar implements ITypicalCar {
	constructor(private price: number, private description: string) {}
	getPrice() {
		return this.price;
	}
	getDescription() {
		return this.description;
	}
}

class Parktronic implements ITypicalCar {
	constructor(private car: ITypicalCar) { }
	getPrice(): number {
		return this.car.getPrice() + 10000;
	}
	getDescription(): string {
		return this.car.getDescription() + " with Parktronic";
	}
}

class Autopilot implements ITypicalCar {
	constructor(private car: ITypicalCar) {}
	getPrice(): number {
		return this.car.getPrice() + 120000;
	}
	getDescription(): string {
		return this.car.getDescription() + " with Autopilot";
	}
}

// ----- Usage -----
console.clear();

const acar = new SimpleCar(1e6, "Taz");
console.log(acar.getDescription());
const asupercar = new Autopilot(new Parktronic(acar));
console.log(asupercar.getDescription());