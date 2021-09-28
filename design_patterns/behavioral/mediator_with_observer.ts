// Behavioral design pattern "Mediator"
//
// It defines an object that encapsulates how a set of objects interact.
// Communication between objects is encapsulated within a mediator object.
// Objects no longer communicate directly with each other, but instead
// communicate through the mediator. This reduces the dependencies between
// communicating objects, thereby reducing coupling.

class SomeStorage {
	#val: any;
	setVal(val: any, medi: Mediator, name: string) {
		const oldVal = this.#val;
		this.#val = val;
		if (oldVal != val) medi.notifyObservers(name);
	}
	getVal() {
		return this.#val;
	}
}

class Mediator {
	#storages: Map<string, SomeStorage> = new Map();
	#observers = new Array<Function>();

	setValue(name: string, val: any) {
		if (!this.#storages.has(name)) this.#storages.set(name, new SomeStorage());
		this.#storages.get(name)?.setVal(val, this, name);
	}

	getValue(name: string) {
		return this.#storages.get(name)?.getVal();
	}

	addObserver(name: string, f: () => any) {
		this.#observers.push((eventName: string) => {
			if (eventName == name) f();
		});
	}

	notifyObservers(eventName: string) {
		this.#observers.forEach(f => f(eventName));
	}
}

// ----- Usage -----
console.clear();

const medi = new Mediator();
medi.setValue("Alex", 34);
medi.setValue("Dash", 32);
console.log("Alex is ", medi.getValue("Alex"));
medi.addObserver("Dash", () => {
	console.log("Value for Dash has changed to ", medi.getValue("Dash"));
});
medi.setValue("Dash", 18);