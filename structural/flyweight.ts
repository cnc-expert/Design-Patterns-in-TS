// Structural design pattern "Flyweight"
//
// A classic example are the data structures used representing characters
// in a word processor. Naively, each character in a document might have
// a glyph object containing its font outline, font metrics, and other
// formatting data. However, this would use hundreds or thousands of bytes
// of memory for each character. Instead, each character can have a reference
// to a glyph object shared by every instance of the same character
// in the document.

class CarData {
	constructor(public model: string) {};
}

class CarFactory {
	private cars: { [model: string]: CarData } = {};

	create(model: string) {
		if (!this.cars[model]) this.cars[model] = new CarData(model);
		return this.cars[model];
	}

	getCarsJson() {
		return JSON.stringify(this.cars);
	}
}

// ----- Usage -----
console.clear();

const factory = new CarFactory();
const tazik = factory.create("vaz");
const bum = factory.create("bumer");
const tazz = factory.create("vaz");

console.log(tazz == tazik);
console.log(factory.getCarsJson());
