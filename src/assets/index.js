let btn = document.getElementById('btn');
let products = []

btn.addEventListener('click', function (e) {
    e.preventDefault();

setItem()
});

const setItem = () => {
    let name = document.getElementById('name').value;
    let value = Number(document.getElementById('value').value);
    clearTableBody()
    products.push({name, value}) 
    mountTable()
}

const setNewOrder = () => {
    products.sort(compareNumbers) 
    clearTableBody()
    mountTable()
}

const compareNumbers = (a, b) => {
    return a.value - b.value;
}

const clearTableBody = () => {
    const collection = document.querySelectorAll('td')
    for (let i = 0; i < collection.length; i++) {
        collection[i].remove();
    }
}

const mountTable = () => {
    let tbody = document.querySelector('tbody')
    for(let item of products) {
        const newRow = tbody.insertRow();
        const nameCell = newRow.insertCell();
        nameCell.innerText = item.name

        const valueCell = newRow.insertCell();
        valueCell.innerText = item.value
    }
}