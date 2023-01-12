import Transaction from "./src/transaction.js";
import BankAccount from "./src/bankAccount.js";
import Statement from "./src/statement.js";

const newBankAccount = new BankAccount()

const newTransaction = new Transaction(new Date("01/10/2012"), 1000, 0, "deposit")
const newTransaction2 = new Transaction(new Date("01/13/2012"), 2000, 0, "deposit")
const newTransaction3 = new Transaction(new Date("01/14/2012"), 0, 500, "withdrawal")

newBankAccount.creditOrDebitTransaction(newTransaction)
newBankAccount.creditOrDebitTransaction(newTransaction2)
newBankAccount.creditOrDebitTransaction(newTransaction3)

Statement.print(newBankAccount.getStatement());