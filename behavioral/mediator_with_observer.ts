// Behavioral design pattern "Mediator"
//
// It defines an object that encapsulates how a set of objects interact.
// Communication between objects is encapsulated within a mediator object.
// Objects no longer communicate directly with each other, but instead
// communicate through the mediator. This reduces the dependencies between
// communicating objects, thereby reducing coupling.

class StorageWithNotify {
	#val: any;
	setVal(val: any, medi: MediatorWithNofify, name: string) {
		const oldVal = this.#val;
		this.#val = val;
		if (oldVal != val) medi.notifyObservers(name);
	}
	getVal() {
		return this.#val;
	}
}

class MediatorWithNofify {
	#storages: Map<string, StorageWithNotify> = new Map();
	#observers = new Array<Function>();

	setValue(name: string, val: any) {
		if (!this.#storages.has(name)) this.#storages.set(name, new StorageWithNotify());
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

const media = new MediatorWithNofify();
media.setValue("Alex", 34);
media.setValue("Dash", 32);
console.log("Alex is", media.getValue("Alex"));
media.addObserver("Dash", () => {
	console.log("Value for Dash has changed to", media.getValue("Dash"));
});
media.setValue("Dash", 18);