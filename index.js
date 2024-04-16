async function load(url) {
	const res = await fetch(url);
	const json = await res.json();
	
	let table = document.getElementById("table");
	const brokers = Object.keys(json);
	
	// Row generation
	const coins = Object.keys(json[brokers[0]]);
	let index = 0;
	for (let i = 0; i < coins.length - 1; ) {
		let row = document.createElement("tr");
		row.classList.add('styled-table')
		let img = document.createElement("img");
		img.classList.add('right-image');
		img.width = 50 ; 
		
		for (let j = 0; j < brokers.length; j++) {
			if(index == 4) {
				i++;
				index = 0;
			}
			img.src ="img/" + coins[i].toUpperCase() + ".svg"

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
		cell.appendChild(img);
		row.appendChild(cell);
		index++;
		table.appendChild(row);
	}
	var element = document.getElementById("loading");
	element.classList.remove("loading");
}
load("http://172.19.10.51:5000");
// load("http://127.0.0.1:5000");

