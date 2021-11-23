// Structural design pattern "Proxy"
//
// A class functioning as an interface to something else.
// The proxy could interface to anything:
// a network connection, a large object in memory, a file,
// or some other resource that is expensive or impossible to duplicate.
// In short, a proxy is a wrapper or agent object
// that is being called by the client to access the real serving object
// behind the scenes.
// Use of the proxy can simply be forwarding to the real object,
// or can provide additional logic. For the client, usage of a proxy object
// is similar to using the real object, because both implement the same interface.

// Implementor's
interface IDoor {
	open(passw?: string): void;
	close(): void;
}

class Door implements IDoor {
	open() {
		console.log("Door is open");
	}
	close() {
		console.log("Door is closed")
	}
}

class SecuritySystem implements IDoor {
	constructor(private door: IDoor, private passw?: string) {}
	
	open(passw?: string) {
		if (passw == this.passw) {
			this.door.open();
		} else {
			console.log("Key is not valid");
		}
	}

	close() {
		this.door.close();
	}
}

// ----- Usage -----
console.clear();

const door = new Door();
const passw = "qwerty";

const lockedDoor = new SecuritySystem(door, passw);
lockedDoor.open();
lockedDoor.open("asdf");
lockedDoor.open("qwerty");
lockedDoor.close();
