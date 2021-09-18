// Behavioral design pattern "State"

class OrderState {
    canOrderBeCancelled = false;
    name: string;
    orderStatusConstructor: new () => OrderState;

    constructor(name: string, orderStatusConstructor: new () => OrderState) {
        this.name = name;
        this.orderStatusConstructor = orderStatusConstructor;
        console.log(`OrderState "${name}" created`);
    }

    next() {
        return new this.orderStatusConstructor();
    }

    cancel() {
        if (this.canOrderBeCancelled) {
            console.log("Order cancelled");
        } else {
            console.log("Order cannot be cancelled");
        }
    }
}

class WaitForPayment extends OrderState {
    canOrderBeCancelled = true;
    constructor() {
        super("WaitForPayment", Shipping);
    }
}

class Shipping extends OrderState {
    constructor() {
        super("Shipping", Delivered);
    }
}

class Delivered extends OrderState {
    constructor() {
        super("Delivered", Delivered);
    }
}

class Order {
    state: OrderState = new WaitForPayment();
    
    nextState() {
        this.state = this.state.next();
    }
}

console.clear();
const ord = new Order();
ord.state.cancel();
ord.nextState();
ord.state.cancel();
ord.nextState();
ord.nextState();