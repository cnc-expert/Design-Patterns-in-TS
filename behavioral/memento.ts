// Behavioral design pattern "Memento"
//
// The pattern provides the ability to restore an object to its previous state
// (undo via rollback). It is implemented with three objects:
// the originator, a caretaker and a memento.
// The originator is some object that has an internal state.
// The caretaker is going to do something to the originator,
// but wants to be able to undo the change.
// The caretaker first asks the originator for a memento object.
// Then it does whatever operation it was going to do.
// To roll back to the state before the operations,
// it returns the memento object to the originator.
// The memento object itself is an opaque object.

class Memento {
	value: any;
	constructor (value: any) {
		this.value = value;
	}
}

class Originator {
	#state = "";
	set state(state: string) {
		// Busness logic may be here
		this.#state = state;
		console.log(`New state set to ${this.#state}`);
	}
	saveToMemento() {
		return new Memento(this.#state);
	}
	restoreFromMemento(mem: Memento) {
		this.state = mem.value;
	}
}

class Caretaker {
	savedStates: Memento[] = [];
	doSomeWork() {
		// Usage: business logic here
		const origin = new Originator();
		origin.state = "state1";
		origin.state = "state2";
		this.savedStates.push(origin.saveToMemento());
		origin.state = "state3";
		origin.restoreFromMemento(this.savedStates.pop() as Memento);
	}
}

console.clear();
new Caretaker().doSomeWork();