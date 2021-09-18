// Behavioral design pattern "Observer"
//
// An object, named the subject, maintains a list of its dependents,
// called observers, and notifies them automatically of any state changes,
// usually by calling one of their methods.

class Subscriber {
    name: string;
    
    constructor(name = "Anonymous") {
        this.name = name;
    }

    inform(aboutNews: string) {
        console.log(`${this.name} knows about "${aboutNews}"`);
    };
}

class News {
    subscribers: Subscriber[] = [];

    publishNews(text: string) {
        this.subscribers.forEach(s => s.inform(text));
    }

    subscribe(s: Subscriber) {
        this.subscribers.push(s);
    }

    unsubscribe(s: Subscriber) {
        this.subscribers = this.subscribers.filter(subs => subs != s);
    }
}

// ----- Usage -----
console.clear();

const Max = new Subscriber("Max");
const Anonym = new Subscriber();
const news = new News();
news.subscribe(Max);
news.subscribe(Anonym);
news.publishNews("Web is fun");
news.unsubscribe(Max);
news.publishNews("There is too much info");