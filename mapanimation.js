
mapboxgl.accessToken =
"pk.eyJ1Ijoic2Ftc3dhcmluZ2VuIiwiYSI6ImNrbHh0cnV5ZDJ1cG0yb2x3MTRsOXVjZ2sifQ.UMlM0h2TgOuOddV2X73ewQ";

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081,42.365554],
    zoom: 14
});



async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();