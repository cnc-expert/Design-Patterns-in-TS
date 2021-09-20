// Behavioral design pattern "Strategy"
//
// It is a behavioral software design pattern that
// enables selecting an algorithm at runtime. Instead of implementing
// a single algorithm directly, code receives run-time instructions
// as to which in a family of algorithms to use.

type BillingStrategy = (amount: number) => number;

const baseStrategy: BillingStrategy = (amount: number) => amount;
const premiumStrategy: BillingStrategy = (amount: number) => 0.9*amount;
const platinumStrategy: BillingStrategy = (amount: number) => 0.8*amount;

class CustomerBill {
	#strategy: BillingStrategy;
	#amount: number;
	constructor(strategy: BillingStrategy) {
		this.#strategy = strategy;
	}
	setAmount(amount: number) {
		this.#amount = amount;
	}
	checkout() {
		return this.#strategy(this.#amount);
	}
}

// ----- Usage -----
console.clear();

const bill = new CustomerBill(premiumStrategy);
bill.setAmount(1100000);
const cost = bill.checkout();
console.log(cost);