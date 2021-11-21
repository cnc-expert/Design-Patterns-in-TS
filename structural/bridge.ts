// Structural design pattern "Bridge"
//
// Decouples an abstraction from its implementation
// so that the two can vary independently:
// 1) Separates an abstraction (Abstraction) from its implementation (Implementor)
// by putting them in separate class hierarchies.
// 2) Implement the Abstraction in terms of (by delegating to) an Implementor object.
// This enables to configure an Abstraction with an Implementor object at run-time.

// Implementor's
interface ICarRepair {
	repair(): string;
}

class RepairMotor implements ICarRepair {
	repair() {
		return "Motor repaired";
	}
}

class RepairTransmission implements ICarRepair {
	repair() {
		return "Transmission repaired";
	}
}

// Abastraction's
abstract class ICar {
	private repairer: ICarRepair | undefined;
	abstract carModel: string;

	setRepairer(repairer: ICarRepair) {
		this.repairer = repairer;
	}

	repairCar() {
		if (this.repairer) {
			console.log(this.repairer.repair() + " in car " + this.carModel);
		} else {
			console.log("Cannot repair. There is no repairer");
		}
	}
}

class TazCar extends ICar {
	carModel = "Taz";
}

class ZazCar extends ICar {
	carModel = "Zaz";
}



// ----- Usage -----
console.clear();

const car1 = new TazCar();
const car2 = new ZazCar();

const motorRepairer = new RepairMotor();
const transRepairer = new RepairTransmission();

car1.setRepairer(motorRepairer);
car1.repairCar();
car1.setRepairer(transRepairer);
car1.repairCar();

car2.setRepairer(motorRepairer);
car2.repairCar();
car2.setRepairer(transRepairer);
car2.repairCar();