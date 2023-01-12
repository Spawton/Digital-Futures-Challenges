import BankAccount from '../src/bankAccount.js';
import Transaction from '../src/transaction.js';
import Statement from '../src/statement.js';

describe(`bank account tests`, () => {
    let bankAccount;
    let transaction;
    let transaction2;
    let transaction3;
    let mockTransactions;

    beforeEach(() => {
        bankAccount = new BankAccount(0);

        transaction = new Transaction(new Date("10/01/2012"), 1000, 0, 'deposit');
        transaction2 = new Transaction(new Date("13/01/2012"), 2000, 0, 'deposit');
        transaction3 = new Transaction(new Date("14/01/2012"), 0, 500, 'withdrawal');
        mockTransactions = [transaction, transaction2, transaction3];
    });
    afterEach(() => {
        bankAccount = undefined;
    });

    it('should print statement', () => {
        //arrange
        const consoleLogSpy = spyOn(console, 'log');
        //act
        Statement.print(mockTransactions);
        //assert
        expect(consoleLogSpy).toHaveBeenCalledTimes(mockTransactions.length + 1);
    });
});