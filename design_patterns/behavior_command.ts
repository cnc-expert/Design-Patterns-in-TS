// Behavioral design pattern "Command"
//
// An object is used to encapsulate all information needed
// to perform an action or trigger an event at a later time

class Engine {
	isItRunning = false;
	on() {
		this.isItRunning = true;
	}
	off() {
		this.isItRunning = false;
	}
}

interface IEngineCommand {
	execute: () => void;
}

class CommandEngineStart implements IEngineCommand {
	engine: Engine;
	constructor(engine: Engine) {
		this.engine = engine;
	}
	execute() {
		// Business logic here
		this.engine.on();
	}
}

class CommandEngineStop implements IEngineCommand {
	engine: Engine;
	constructor(engine: Engine) {
		this.engine = engine;
	}
	execute() {
		// Business logic here
		this.engine.off();
	}
}

class Driver {
	doThis(command: IEngineCommand) {
		command.execute();
	}
}

console.clear();

const driver = new Driver();
const engine = new Engine();
console.log(engine);

const startEngine = new CommandEngineStart(engine);
const stopEngine = new CommandEngineStop(engine);

driver.doThis(startEngine);
console.log(engine);

driver.doThis(stopEngine);
console.log(engine);
