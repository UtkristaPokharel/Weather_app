const apiKey="VMRT9NRKNJZLL3X5N3ERHPM2N";
const apiUrl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Butwal?unitGroup=us&contentType=json";

export async function checkWeather() {
	const response =await fetch(apiUrl +`&key=${apiKey}`);
	var data =await response.json();

	console.log (data);

	document.querySelector(".city").innerHTML=data.address;
	document.querySelector(".temp").innerHTML=data.currentConditions.feelslike;
	document.querySelector(".condition").innerHTML=data.currentConditions.conditions;
	document.querySelector("#sunrise").innerHTML=data.currentConditions.sunrise;
	document.querySelector("#sunset").innerHTML=data.currentConditions.sunset;
	document.querySelector("#humidity").innerHTML=data.currentConditions.humidity;
	document.querySelector("#rainfall").innerHTML=data.currentConditions.precipprob;
	document.querySelector("#wind").innerHTML=data.currentConditions.windspeed;
}
