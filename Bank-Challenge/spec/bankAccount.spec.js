import BankAccount from '../src/bankAccount.js';
import Transaction from '../src/transaction.js';
import Statement from '../src/statement.js';

describe(`bank account tests`, () => {
    let bankAccount;
    let transaction;
    let transaction2;
    let transaction3;

    beforeEach(() => {
        bankAccount = new BankAccount();
        transaction = new Transaction(new Date("10/01/2012"), 1000, 0, 'deposit');
        transaction2 = new Transaction(new Date("13/01/2012"), 2000, 0, 'deposit');
        transaction3 = new Transaction(new Date("14/01/2012"), 0, 500, 'withdrawal');

    });

    afterEach(() => {
        bankAccount = undefined;
    });

    it('should instantiate with a value of 0', () => {
        //arrange
        // const testBankAccount = new BankAccount();
        //act
        // const actual = bankAccount.getBalance();
        //assert
        // expect(actual).toBe(0);
        //have created a one-line version of the test above
        expect(bankAccount.getBalance()).toBe(0);
    });
    it("Does the creditOrDebitTransaction function add transaction to balance?", () => {
        // arrange
        bankAccount.creditOrDebitTransaction(transaction);
        // act
        const result = bankAccount.getBalance();
        // assert
        expect(result).toBe(1000);
    });
    it('Test that getStatement is called once with a date and a balance', () => {
        //arrange
        let testAmount = 1000;
        let testDate = "10-01-2012";
        let creditSpy;
        const testBankAccount = new BankAccount();
        creditSpy = spyOn(testBankAccount, `getStatement`);
        //act
        const actual = testBankAccount.getStatement(testAmount, testDate);
        //assert
        expect(creditSpy).toHaveBeenCalledOnceWith(1000, '10-01-2012')
    });
    it("Does currentBalance function work", () => {
        //arrange
        bankAccount.creditOrDebitTransaction(transaction);
        let transactions = bankAccount.getStatement();
        //act
        let result = 1000;
        //assert
        expect(transactions[0].getCurrentBalance()).toEqual(result);
    });
    it("Test that the balance changes when new transactions are made", () => {
        let result = 2000;
        bankAccount.creditOrDebitTransaction(transaction);
        bankAccount.creditOrDebitTransaction(transaction);

        expect(bankAccount.getBalance()).toEqual(result);
    });
    it("Test that the balance changes when a new withdrawal is made", () => {
        let result = 2500;
        bankAccount.creditOrDebitTransaction(transaction);
        bankAccount.creditOrDebitTransaction(transaction2);
        bankAccount.creditOrDebitTransaction(transaction3);

        expect(bankAccount.getBalance()).toEqual(result);
    });
});    