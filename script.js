async function load(url) {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        }
    });
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('irr');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.eth.irr_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
load("192.168.100.47:5555").json()

async function dave(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('irr2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.eth.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
dave("192.168.100.47:5555").json()
async function loadData(url, broker, isTheter, coinName, isSell) {
    const isSellStr = isSell ? "_sell" : "_buy";
    const isTheterStr = isTheter? "_usdt" : "_irr"
    let brokerObj;
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();
    switch (broker) {
        case "ramzinex":
            brokerObj = ramzinex;
            break;
        case "nobitex":
            brokerObj = nobitex;
            break;
        case "bitpin":
            brokerObj = bitpin;
            break;
    }

    const table = document.getElementById(coinName);
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = brokerObj.eth[coinName + + isSellStr];
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}

async function david(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('usdt');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.eth.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
david("192.168.100.47:5555").json()

async function larry(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('usdt2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.eth.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
larry("192.168.100.47:5555").json()

async function dad(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit irr');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.irr_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
dad("192.168.100.47:5555").json()

async function mom(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit irr2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
mom("192.168.100.47:5555").json()

async function bro(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit usdt');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)


}
bro("192.168.100.47:5555").json()

async function sis(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit usdt2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = ramzinex.btc.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)


}
sis("192.168.100.47:5555").json()

async function brother(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob irr');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.eth.irr_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)


}
brother("192.168.100.47:5555").json()

async function sister(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob irr2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.eth.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
sister("192.168.100.47:5555").json()

async function jim(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob usdt');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.eth.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
jim("192.168.100.47:5555").json()

async function jimmy(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob usdt2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.eth.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
jimmy("192.168.100.47:5555").json()

async function man(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob bit irr');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.innerText = bitpin.btc.irr_buy;
    newRow.appendChild(newCell);
    table.appendChild(newRow);
}
man("192.168.100.47:5555").json()

async function woman(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob bit irr2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.btc.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
woman("192.168.100.47:5555").json()

async function men(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob bit usdt');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.btc.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
men("192.168.100.47:5555").json()

async function women(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('nob bit usdt2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = bitpin.btc.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
women("192.168.100.47:5555").json()

async function omen(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.eth.irr_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
omen("192.168.100.47:5555").json()

async function ome(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit1');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.eth.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
ome("192.168.100.47:5555").json()

async function bitpin(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit2');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.eth.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
bitpin("192.168.100.47:5555").json()

async function bitpi(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit3');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.eth.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
bitpi("192.168.100.47:5555").json()

async function bitp(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit4');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.btc.irr_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
bitp("192.168.100.47:5555").json()

async function bit(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit5');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.btc.usdt_buy;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
bit("192.168.100.47:5555").json()

async function bi(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit6');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.btc.irr_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
bi("192.168.100.47:5555").json()

async function b(url) {
    const response = await fetch(url);
    const { ramzinex, nobitex, bitpin } = await response.json();

    const table = document.getElementById('bit7');
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.innerText = nobitex.btc.usdt_sell;
    newRow.appendChild(newCell)
    table.appendChild(newRow)
}
b("192.168.100.47:5555").json()