// Behavioral design pattern "Mediator"
//
// It defines an object that encapsulates how a set of objects interact.
// Communication between objects is encapsulated within a mediator object.
// Objects no longer communicate directly with each other, but instead
// communicate through the mediator. This reduces the dependencies between
// communicating objects, thereby reducing coupling.

class SomeStorage {
	#val: any;
	setVal(val: any) {
		this.#val = val;
	}
	getVal() {
		return this.#val;
	}
}

class Mediator {
	#storages: Map<string, SomeStorage> = new Map();

	setValue(name: string, val: any) {
		const storage = this.#storages.get(name) ?? new SomeStorage();
		storage.setVal(val);
	}

	getValue(name: string) {
		return this.#storages.get(name)?.getVal();
	}
}

// ----- Usage -----
console.clear();

const medi = new Mediator();
medi.setValue("Alex", 34);
medi.setValue("Dash", 32);
console.log("Alex is ", medi.getValue("Alex"));