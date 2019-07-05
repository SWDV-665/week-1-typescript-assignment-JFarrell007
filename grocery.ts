class Grocery {
    totalCost: number;
    constructor(public itemName: string, public quantity: number, public cost: number) {
        this.totalCost = quantity * cost;
    }
}

interface Item{
    itemName: string;
    quantity: number;
    cost:number;
    totalCost: number;
}

let groceryItem = [new Grocery("Milk", 2, 3.45 ),new Grocery("Eggs", 3, 1.99 ),new Grocery("Bread", 2, 2.85 )];
let myTable = (document.createElement("TABLE") as HTMLTableElement);

let nRow = myTable.insertRow(0);
    nRow.insertCell(0).outerHTML = "<th>Item Name</th>";
    nRow.insertCell(1).outerHTML = "<th>Quantity</th>";
    nRow.insertCell(2).outerHTML = "<th>Item Price</th>";
    nRow.insertCell(3).outerHTML = "<th>Total Price</th>";

for(let index = 0; index < groceryItem.length; index++){
    let row = myTable.insertRow(index + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = groceryItem[index].itemName;
    cell2.innerHTML = String(groceryItem[index].quantity);
    cell3.innerHTML = String(groceryItem[index].cost);
    cell4.innerHTML = String(groceryItem[index].totalCost);
}
document.body.appendChild(myTable);
