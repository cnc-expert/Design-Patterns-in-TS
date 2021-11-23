// Structural design pattern "Adapter"
//
// Allows the interface of an existing class to be used as another interface.
// It is often used to make existing classes work with others
// without modifying their source code.

class SelfCenteringChuck {
	moveAllJawsSimultaneously() {
		console.log("Workpiece clamped with round jaws");
	}
}

class ChuckWithIndependentJaws {
	moveJaw(jawId: number) {
		console.log(`Jaw ${jawId} moved`);
	}
}

interface Operator {
	clampWorkpiece(): void;
}

// Object adapter
class ChuckAdapter1 implements Operator {
	constructor(private chuck: SelfCenteringChuck) {}

	clampWorkpiece() {
		this.chuck.moveAllJawsSimultaneously();
	}
}

// Class adapter
class ChuckAdapter2 extends ChuckWithIndependentJaws implements Operator {
	clampWorkpiece() {
		this.moveJaw(1);
		this.moveJaw(2);
		this.moveJaw(3);
	}
}


// ----- Usage -----
console.clear();


const chuck1 = new SelfCenteringChuck();
const operator1: Operator = new ChuckAdapter1(chuck1);
operator1.clampWorkpiece();

const chuck2 = new ChuckWithIndependentJaws();
const operator2: Operator = new ChuckAdapter2();
operator2.clampWorkpiece();