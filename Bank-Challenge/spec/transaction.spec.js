import Transaction from '../src/transaction.js';
import BankAccount from '../src/bankAccount.js';

describe(`transaction tests`, () => {
    let bankAccount;
    let transaction;
    let transaction2;
    let transaction3;

    beforeEach(() => {
        bankAccount = new BankAccount();
        transaction = new Transaction(new Date("01/10/2012"), 1000, 0, 'deposit');
        transaction2 = new Transaction(new Date("01/13/2012"), 2000, 0, 'deposit');
        transaction3 = new Transaction(new Date("01/14/2012"), 0, 500, 'withdrawal');
    });

    afterEach(() => {
        bankAccount = undefined;
    });

    it(`Test that statement array has a length of 1 after new transaction `, () => {
        //arrange
        //act
        bankAccount.creditOrDebitTransaction(transaction)
        const result = bankAccount.getStatement();
        //assert
        expect(result).toHaveSize(1);
    });
    it(`Test that statement array has a length of 2 after another new transaction `, () => {
        //arrange
        //act
        bankAccount.creditOrDebitTransaction(transaction)
        bankAccount.creditOrDebitTransaction(transaction2)
        const result = bankAccount.getStatement();
        //assert
        expect(result).toHaveSize(2);
    });
    it("Test that I can view the date of a transaction", () => {
        let result = "10/01/2012";
        transaction.getDate();

        expect(transaction.getDate()).toEqual(result);
    });
    it("Test that I can view the currentBalance of a transaction", () => {
        //arrange
        bankAccount.creditOrDebitTransaction(transaction2);
        let transactions = bankAccount.getStatement();
        //act
        let result = 2000;
        //assert
        expect(transactions[0].getCurrentBalance()).toEqual(result);
    });
    it("Test that I can see what date the transaction was", () => {
        let result = "10/01/2012";
        transaction.getDate();

        expect(transaction.getDate()).toEqual(result);
    });
    it("Test that I can return the type of transaction", () => {
        const testType = "deposit";
        expect(transaction.getType()).toBe(testType);
    });
    it("Test that the third transaction was type 'withdrawal' ", () => {
        let result = 'withdrawal';

        bankAccount.creditOrDebitTransaction(transaction);

        expect(transaction3.getType()).toEqual(result);
    });
});