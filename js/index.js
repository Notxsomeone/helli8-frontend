
async function fetchJson(uri) {
	const res = await fetch(uri);
	const json = await res.json();
	return json;
}

async function load() {
	const json = await fetchJson((await fetchJson("../config.json")).api_endpoint);
	let table = document.getElementById("table");
	const brokers = Object.keys(json);

	// Row generation
	const coins = Object.keys(json[brokers[0]]);
	let index = 0;
	for (let i = 0; i < coins.length;) {
		let row = document.createElement("tr");
		row.classList.add('styled-table')
		let img = document.createElement("img");
		img.classList.add('right-image');
		img.width = 50;

		for (let j = 0; j < brokers.length; j++) {
			img.src = "img/coins/" + coins[i].toUpperCase() + ".svg"

			const prices = Object.values(json[brokers[j]][coins[i]]);
			let cell = document.createElement("th");

			let priceStr = "قیمت ناموجود"
			if (prices[index]) {
				priceStr = prices[index].toLocaleString();
				index < 2 ? priceStr += 'ريال' : priceStr += '$';
			}

			cell.innerHTML = priceStr;
			row.appendChild(cell);
		}

		let cell = document.createElement("th");
		cell.classList.add('last-column');
		let str = coins[i].toUpperCase() + '/';

		switch (index) {
			case 0:
				str += 'IRR - Buy';
				break;
			case 1:
				str += 'IRR - Sell'
				break;
			case 2:
				str += 'USDT - Buy';
				break;
			case 3:
				str += 'USDT - Sell';
				break;
		}
		cell.innerHTML = str;
		cell.appendChild(img);
		row.appendChild(cell);
		table.appendChild(row);

		index++;
		if (index == 4) {
			i++;
			index = 0;
		}
	}
	var element = document.getElementById("loading");
	element.remove();

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
