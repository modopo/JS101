function transactionsFor(id, transactionList) {
    let result = transactionList.filter(transaction => {
        return transaction['id'] === id;
    });

    return result;
}

function isItemAvailable(id, transactionList) {
    let onlyID = transactionsFor(id, transactionList)
    let avails = onlyID.reduce((sum, transaction) => {
        if (transaction.movement === 'in') {
            return sum + transaction.quantity;
        } else {
            return sum - transaction.quantity;
        }
    }, 0);

    return avails > 0;
}


let transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

console.log(transactionsFor(105, transactions));
console.log(isItemAvailable(105, transactions));
