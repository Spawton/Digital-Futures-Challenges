export default class BankAccount {
    #balance;
    #statement;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#statement = [];
    }
    getBalance() {
        return this.#balance;
    }
    getStatement() {
        return this.#statement;
    }
    creditOrDebitTransaction(transaction) {
        this.#balance += (transaction.getCredit() ? transaction.getCredit() : -transaction.getDebit());
        transaction.setCurrentBalance(this.#balance);
        this.#statement.push(transaction);

    }
} 
