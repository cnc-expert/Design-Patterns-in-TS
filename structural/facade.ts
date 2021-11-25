// Structural design pattern "Facade"
//
// Serves as a front-facing interface masking more complex underlying or structural code.
// A facade can:
// * improve the readability and usability of a software library
//   by masking interaction with more complex components behind a single
//   (and often simplified) API
// * provide a context-specific interface to more generic functionality
//   (complete with context-specific input validation)
// * serve as a launching point for a broader refactor of monolithic or
//   tightly-coupled systems in favor of more loosely-coupled code.

class ReadyPart {}
class Workpiece {}
class Robot {
	installWorkpiece(wp: Workpiece) {}
	removeMachinedWorkpiece(p: ReadyPart) {};
}

class CncMachine {
	turnOn() {}
	turnOff() {}

	openDoor() {}
	closeDoor() {}

	openVices() {}
	closeVices() {}

	loadProgram(p: ReadyPart) {}
	processWorkpiece(p: ReadyPart, wp: Workpiece) {}

	checkTool() {}

	checkWorkpiecePosition(wp: Workpiece) {}
	checkMachinedWorkpiece(p: ReadyPart) {}

	turnOnCoolant() {}
	turnOffCoolant() {}
}

class CncMachineFacade {
	machine: CncMachine;
	bot: Robot;
	wp: Workpiece;

	constructor(public p: ReadyPart) {
		this.machine = new CncMachine();
		this.bot = new Robot();
		this.wp = new Workpiece();
	}

	getMachinedPart() {
		this.machine.turnOn();
		this.machine.loadProgram(this.p);
		this.machine.checkTool();
		this.machine.openDoor();
		this.machine.openVices();
		this.bot.installWorkpiece(this.wp);
		this.machine.closeDoor();
		this.machine.closeVices();
		this.machine.checkWorkpiecePosition(this.wp);
		this.machine.turnOnCoolant();
		this.machine.processWorkpiece(this.p, this.wp);
		this.machine.turnOffCoolant();
		this.machine.checkMachinedWorkpiece(this.p);
		this.machine.openVices();
		this.machine.openDoor();
		this.bot.removeMachinedWorkpiece(this.p);
	}
}

// ----- Usage -----
console.clear();

const machine = new CncMachineFacade(new ReadyPart());
machine.getMachinedPart();