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

// Target
interface Chuck {
	clampWorkpiece(): void;
}

// Object adapter
class ChuckAdapter1 implements Chuck {
	constructor(private chuck: SelfCenteringChuck) {}

	clampWorkpiece() {
		this.chuck.moveAllJawsSimultaneously();
	}
}

// Class adapter
class ChuckAdapter2 extends ChuckWithIndependentJaws implements Chuck {

	clampWorkpiece() {
		this.moveJaw(1);
		this.moveJaw(2);
		this.moveJaw(3);
	}
}


// ----- Usage -----
console.clear();

const c1: Chuck = new ChuckAdapter1(new SelfCenteringChuck());
c1.clampWorkpiece();

const c2: Chuck = new ChuckAdapter2();
c2.clampWorkpiece();