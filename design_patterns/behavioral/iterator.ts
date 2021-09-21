// Behavioral design pattern "Iterator"
//
// It is a design pattern in which an iterator is used to traverse a container
// and access the container's elements.

class ObjectIterator {
	obj: {[key: string]: any};
	keys: string[];
	index: number;

	constructor (o: Object) {
		this.obj = o;
		this.keys = Object.keys(o);
		this.index = 0;
	}

	next() {
		return this.obj[this.keys[this.index++]];
	}

	get hasNext() {
		return this.index < this.keys.length;
	}
}

// ----- Usage -----
console.clear();
const it = new ObjectIterator({x: 123, y: 456, z: 789});
while (it.hasNext) {
	console.log(it.next());
}

// ----- Iterators in the core language -----

class CustomRange {
	index: number;
	stop: number;
	step: number;

	constructor(start: number, stop: number, step: number) {
		this.index = start;
		this.stop = stop;
		this.step = step;
	}

	[Symbol.iterator] = () => this;

	next() {
		const value = this.index;
		this.index += this.step;
		return { value, done: value > this.stop };
	}
}

// ----- Usage -----
// console.clear();
// for (let x of new CustomRange(4, 25, 4)) {
// 	console.log(x);
// }