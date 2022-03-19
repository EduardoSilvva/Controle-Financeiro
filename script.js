const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
    { id: 1, name: 'salário', amount: 5000},
    { id: 2, name: 'Taxa do Condomínio', amount: -214},
    { id: 3, name: 'Escola das Crianças', amount: -700},
    { id: 4, name: 'Plano de Saúde', amount: -520}
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount <0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
       ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUl.append(li)
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
}

init()