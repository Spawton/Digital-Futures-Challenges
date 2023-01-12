# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!


---
---
---

# **Solution**
Run node index.js to see final statement.


## **User story 1**

```
As a client
I want to make a deposit of 1000 on the 10-01-2012
So I can store my money in the bank
```

## **Domain model**
| Object       | Property                        | Message                            | Output   |
| ------------ | ------------------------------- | ---------------------------------- | -------- |
| bank account | statement @array [@transaction] | creditOrDebitTransaction(@integer) | @integer |
| transaction  | date                            |                                    |          |
|              | credit                          |                                    |          |
|              | debit                           |                                    |          |
|              | balance                         |                                    |          |
|              |                                 |                                    |          |

## **Tests**
#### Test 1 - Test that the bank account starts with a balance of zero
#### Test 1b - Test that I can add a deposit of 1000 to a bank account with `debit()` method
#### Test 1c - Test that you can view the date and balance of the transaction
#### Test 1d - Test that the statement has a length of 1 after I create the new transaction
#### Test 1e - Test that `currentBalance()` function works

## **User story 2**
```
As a client
I want to make a deposit of 2000 on the 13-01-2012
So I can store this money in the bank along with the previous total
```

## **Domain model**
| Object       | Property                        | Message                            | Output   |
| ------------ | ------------------------------- | ---------------------------------- | -------- |
| bank account | statement @array [@transaction] | creditOrDebitTransaction(@integer) | @integer |
| transaction  | date                            | getType()                          | @string  |
|              | credit                          |                                    |          |
|              | debit                           |                                    |          |
|              | balance                         |                                    |          |
|              | type                            |                                    |          |
|              |                                 |                                    |          |

## **Tests**
#### Test 2 - Test that balance changes when new transaction is made
#### Test 2b - Test that statement length changes when new transaction is made
#### Test 2c - Test that I can view the date of the transaction
#### Test 2d - Test that I can view the `currentBalance()` of the transaction
#### Test 2e - Test that I can view whether the transaction was credit or debit using `getType()`


## **User story 3**
```
As a client
I want to make a withdrawal of 500 on the 14-01-2012
So I can access my money in the bank to spend it
```

## **Domain model**
| Object       | Property                        | Message          | Output   |
| ------------ | ------------------------------- | ---------------- | -------- |
| bank account | statement @array [@transaction] | credit(@integer) | @integer |
|              |                                 | debit(@integer)  | @integer |
| transaction  | accountId                       | getType()        | @string  |
|              | date                            |                  |          |
|              | credit                          |                  |          |
|              | debit                           |                  |          |
|              | balance                         |                  |          |
|              | type                            |                  |          |
|              |                                 |                  |          |

## **Tests**
#### Test 3 - Test that I can withdraw from my bank account using `creditOrDebitTransaction()` and `getBalance()`
#### Test 3b - Test that the third transaction was a withdrawal type using `getType()`
#### Test 3c - Test that the balance is now 2500

## **User story 4**
```
As a client
I want to print my bank statement
So I can view all my deposits and withdrawals in one place
```

## **Domain model**
| Object       | Property                        | Message                         | Output   |
| ------------ | ------------------------------- | ------------------------------- | -------- |
| bank account | statement @array [@transaction] | credit(@integer)                | @integer |
|              |                                 | debit(@integer)                 | @integer |
|              |                                 | print @array [@transaction]     |          |
| transaction  | accountId                       | getType()                       | @string  |
|              | date                            |                                 |          |
|              | credit                          |                                 |          |
|              | debit                           |                                 |          |
|              | balance                         |                                 |          |
|              | type                            |                                 |          |
| statement    |                                 | statement @array [@transaction] |          |
|              |                                 | print @array [@transaction]     |          |
|              |                                 |                                 |          |

## **Tests**
#### Test 4 - Test that the print method prints a statement with a transaction on it including date, transaction type, and balance using `spyOn()`
#### Test 4b - Test that the console log is called for each new transaction using `spyOn()`
#### Test 4c - Test that I print my statement with all three transactions included on the statement

# **Future potential expansion of the project**
- I could add an overdraft function
- I'd like a snazzy front end so that you could input various deposit and withdrawal amounts and be able to see the current balance in real time on the browser
