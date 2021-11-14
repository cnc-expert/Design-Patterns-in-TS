// Behavioral design pattern "Chain of responsibility"
//
// It is consisting of a source of command objects and
// a series of processing objects. Each processing object contains logic
// that defines the types of command objects that it can handle;
// the rest are passed to the next processing object in the chain.
// A mechanism also exists for adding new processing objects to the end of this chain.

class Account {
	name: string = "no name";
	next: Account | null = null;
	balance: number = 0;
	
	setNext(next: Account) {
		this.next = next;
		return this;
	}
	canPay(amount: number) {
		return this.balance >= amount;
	}
	pay(amount: number) {
		if (this.canPay(amount)) {
			console.log(`Paying with ${this.name}`);
		} else if (this.next) {
			console.log(`Cannot pay with ${this.name}`);
			this.next.pay(amount);
		} else {
			console.log("Cannot pay this amount");
		}
	}
}

class FacePal extends Account {
	constructor(balance: number) {
		super();
		this.name = "FacePal";
		this.balance = balance;
	}
}

class SubmisCard extends Account {
	constructor(balance: number) {
		super();
		this.name = "SubmisCard";
		this.balance = balance;
	}
}

class Wiqi extends Account {
	constructor(balance: number) {
		super();
		this.name = "Wiqi";
		this.balance = balance;
	}
}

// ----- Usage -----
console.clear();

const card1 = new FacePal(123);
const card2 = new SubmisCard(234);
const card3 = new Wiqi(345);
card1.setNext(card2.setNext(card3));
card1.pay(123);