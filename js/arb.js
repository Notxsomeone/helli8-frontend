async function fetchJson(uri) {
    console.log(uri);
    const res = await fetch(uri);
	const json = await res.json();
	return json;
}
async function load(){
const json = await fetchJson((await fetchJson("../config.json")).api_endpoint + '/arb');
console.log(json);
}

load();