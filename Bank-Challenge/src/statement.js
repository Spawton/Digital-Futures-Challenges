export default class Statement {
    static print(transactions) {
        console.log("date       || credit  || debit  || balance");
        for (let i = transactions.length - 1; i >= 0; i--) {
            if (transactions[i].getCredit() > 0) {
                console.log(transactions[i].getDate() + " || " + parseFloat(transactions[i].getCredit()).toFixed(2) + " ||" + "      " + "  || " + parseFloat(transactions[i].getCurrentBalance()).toFixed(2))
            } else {
                console.log(transactions[i].getDate() + " || " + "       " + " || " + parseFloat(transactions[i].getDebit()).toFixed(2) + " || " + parseFloat(transactions[i].getCurrentBalance()).toFixed(2))
            }
        }
    }
};