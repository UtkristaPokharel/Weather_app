const apiKey="VMRT9NRKNJZLL3X5N3ERHPM2N";
const apiUrl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/butwal?unitGroup=us&contentType=json";

export async function checkWeather() {
	const response =await fetch(apiUrl +`&key=${apiKey}`);
	var data =await response.json();

	console.log (data);
}
