async function load(url){
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('irr');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)


}
async function load(ur){
    const response = await fetch(ur);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('irr2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)


}
load("https://raw.githubusercontent.com/Notxsomeone/helli8-backend/master/api.txt");

