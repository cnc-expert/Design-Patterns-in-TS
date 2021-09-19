// Behavioral design pattern "Template method"
//
// The template method is a method in a superclass,
// usually an abstract superclass, and defines the skeleton of an operation
// in terms of a number of high-level steps. These steps are themselves
// implemented by additional helper methods in the same class
// as the template method.

abstract class CarBuilder {
	abstract addEngine(): void;
	abstract installChassis(): void;
	abstract addElectronics(): void;
	abstract collectAccessories(): void;
	build() {
		this.addEngine();
		this.installChassis();
		this.addElectronics();
		this.collectAccessories();
	}
}

class BumerBuilder extends CarBuilder {
	addEngine(): void {
		console.log("Add turbo motor");
	}
	installChassis(): void {
		console.log("Install sport chassis");
	}
	addElectronics(): void {
		console.log("Add progressive electronics");
	}
	collectAccessories(): void {
		console.log("Collect accessories");
	}
}

class TazBuilder extends CarBuilder {
		addEngine(): void {
			console.log("Add weak motor");
		}
		installChassis(): void {
			console.log("Install hard chassis");
		}
		addElectronics(): void {
			console.log("Add passed century electronics");
		}
		collectAccessories(): void {
			console.log("No accessories available");
		}
	}
}

// ----- Usage -----
console.clear();

const bumer = new BumerBuilder();
const taz = new TazBuilder();
bumer.build();
taz.build();