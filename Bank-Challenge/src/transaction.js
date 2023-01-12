export default class Transaction {
    #date;
    #credit;
    #debit;
    #currentBalance;
    #statement = [];
    #type;


    constructor(date = new Date(), credit, debit, type) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
        this.#type = type;
    }
    statement() {
        return this.#statement;
    }
    getCurrentBalance() {
        return this.#currentBalance;
    }
    setCurrentBalance(balance) {
        this.#currentBalance = balance;
    }
    getCredit() {
        return this.#credit;
    }
    getDebit() {
        return this.#debit;
    }
    getDate() {
        return this.#date.toLocaleDateString('en-GB', {
            month: '2-digit', day: '2-digit', year: 'numeric'
        });
    }
    getType() {
        return this.#type;
    }

}
