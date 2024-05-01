
async function fetchJson(uri) {
    const res = await fetch(uri);
    const json = await res.json();
    return json;
}
    
async function load() {
    const config = await fetchJson("../config.json");
    var table = await fetchJson(config.api_endpoint + '/arb');
    const t = document.getElementById("table");
    
    var nobitex_image = document.createElement("img");
    nobitex_image.src = config.nobitex_image;
    nobitex_image.width = 100;

    var ramzinex_image = document.createElement("img");
    ramzinex_image.src = config.ramzinex_image;
    ramzinex_image.width = 100;

    var bitpin_image = document.createElement("img");
    bitpin_image.src = config.bitpin_image;
    bitpin_image.width = 100;

    for (let i = 0; i < table.length; i++) {
	var row = document.createElement("tr");

	let cell_coin = document.createElement("th");
	cell_coin.innerHTML = table[i].currency_name;
	let coin_image = document.createElement("img");
	coin_image.src = "images/coins/" + cell_coin.innerHTML.toUpperCase() + ".svg";
	coin_image.classList.add("right-image")
	coin_image.width = 50;
	cell_coin.appendChild(coin_image);

	let cell_broker_buy = document.createElement("th");
	switch(table[i].broker_buy) {
	    case "nobitex":
		cell_broker_buy.appendChild(nobitex_image.cloneNode(true));
	    break;
	    case "bitpin":
		cell_broker_buy.appendChild(bitpin_image.cloneNode(true));
	    break;
	    case "ramzinex":
		cell_broker_buy.appendChild(ramzinex_image.cloneNode(true));
	    break;
	}
	let cell_broker_sell = document.createElement("th");
	switch(table[i].broker_sell) {
	    case "nobitex":
		cell_broker_sell.appendChild(nobitex_image.cloneNode(true));
	    break;
	    case "bitpin":
		cell_broker_sell.appendChild(bitpin_image.cloneNode(true));
	    break;
	    case "ramzinex":
		cell_broker_sell.appendChild(ramzinex_image.cloneNode(true));
	    break;
	}

	let cell_price_buy = document.createElement("th");
	cell_price_buy.innerHTML = toMyFixed(table[i].price_buy, 5).toLocaleString();
	let cell_price_sell = document.createElement("th");
	cell_price_sell.innerHTML = toMyFixed(table[i].price_sell, 5).toLocaleString();

	if (table[i].quote_currency == "usdt") {
	    cell_price_buy.innerHTML += "$";
	    cell_price_sell.innerHTML += "$";
	} else {
	    cell_price_buy.innerHTML += "ريال";
	    cell_price_sell.innerHTML += "ريال";
	}

	let cell_arb_buy_sell = document.createElement("th");
	cell_arb_buy_sell.innerHTML = (table[i].arb_buy_sell * 100.0).toFixed(2) + "%"
	let cell_arb_sell_buy = document.createElement("th");
	cell_arb_sell_buy.innerHTML = (table[i].arb_sell_buy * 100.0).toFixed(2) + "%"
	
	row.appendChild(cell_arb_sell_buy);
	row.appendChild(cell_arb_buy_sell);
	row.appendChild(cell_price_sell);
	row.appendChild(cell_broker_sell);
	row.appendChild(cell_price_buy);
	row.appendChild(cell_broker_buy);
	row.appendChild(cell_coin);

	t.appendChild(row);
    }

    $(`img[src*="BTC"]`).parents('th').css("background-color", "#ed9b53");
    $(`img[src*="USDT"]`).parents('th').css("background-color", "#16a085");
    $(`img[src*="ETH"]`).parents('th').css("background-color", "#4f515c");
    $(`img[src*="TRX"]`).parents('th').css("background-color", "#eb7575");
    $(`img[src*="SHIB"]`).parents('th').css("background-color", "#fc9403");
    $(`img[src*="MATIC"]`).parents('th').css("background-color", "#ce93f5");
    $(`img[src*="DOGE"]`).parents('th').css("background-color", "#dbb265");
    $(`img[src*="SOL"]`).parents('th').css("background-color", "#52ccc8");
    $(`img[src*="TON"]`).parents('th').css("background-color", "#25bddb");
}

load();

function toMyFixed(n, d) {
    return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d));
}

