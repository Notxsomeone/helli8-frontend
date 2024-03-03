async function load(url) {
	const res = await fetch(url);
	const json = await res.json();
	
	let table = document.getElementById("table");
	const brokers = Object.keys(json);
	
	// Row generation
	const coins = Object.keys(json[brokers[0]]);
	let index = 0;
	for (let i = 0; i < coins.length;) {
		let row = document.createElement("tr");

		for (let j = 0; j < brokers.length; j++) {
			if(index == 4) {
				i++;
				index = 0;
			}
			const prices = Object.values(json[brokers[j]][coins[i]]);
			let cell = document.createElement("th");
			cell.innerHTML = prices[index] ? prices[index] : "قیمت ناموجود";
			row.appendChild(cell);
		}

		let cell = document.createElement("th");
		let str = coins[i].toUpperCase() + '/';
		switch(index) {
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
		row.appendChild(cell);
		
		index++;
		table.appendChild(row);
	}
}
load("http://127.0.0.1:5000");
