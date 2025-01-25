//Api Key
const apiKey = "VMRT9NRKNJZLL3X5N3ERHPM2N";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather_condition");

//getting time for day and night
const currentHour = new Date().getHours();
const isDay = currentHour >= 6 && currentHour < 18;

//search button when clicked
searchBtn.addEventListener("click", () => {
	const city = searchBox.value.trim();
	if (city) {
		checkWeather(city);
	} else {
		alert("Please enter a city name!");
	}
});

//If enter button is clicked 
searchBox.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		const city = searchBox.value.trim();
		if (city) {
			checkWeather(city);
		} else {
			alert("Please enter a city name!");
		}
	}
});

//Asynchronous Function for fetching weather data from api
export async function checkWeather(city) {
	const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&contentType=json`;

	//for any errors arising
	try {
		const response = await fetch(apiUrl + `&key=${apiKey}`);
		if (!response.ok) {
			throw new Error("Failed to fetch weather data.");
		}

		const data = await response.json();

		// Update weather data in their respective icons
		document.querySelector(".city").innerHTML = data.address;
		document.querySelector(".temp").innerHTML = data.currentConditions.temp + "°C";
		document.querySelector(".condition").innerHTML = data.currentConditions.conditions;
		document.querySelector("#sunrise").innerHTML = data.currentConditions.sunrise + " AM";
		document.querySelector("#sunset").innerHTML = data.currentConditions.sunset + " PM";
		document.querySelector("#humidity").innerHTML = data.currentConditions.humidity + "%";
		document.querySelector("#rainfall").innerHTML = data.currentConditions.precipprob + " mm";
		document.querySelector("#wind").innerHTML = data.currentConditions.windspeed + " km/h";


		//condition for sunny, rainy, night 
		const condition = data.currentConditions.conditions.toLowerCase();
		if (condition === "clear") {
			weatherIcon.src = isDay ? "img/sunny.png" : "img/clear_night.png";
		} else if (condition === "partially cloudy") {
			weatherIcon.src = isDay ? "img/partially_sunny.png" : "img/cloudy_night.png";
		} else if (condition === "rainy") {
			weatherIcon.src = isDay ? "img/rainy.png" : "img/rainy.png";
		} else {
			weatherIcon.src = isDay ? "img/sunny.png" : "img/clear_night.png";
		}
	} //Catching error
	catch (error) {
		console.error("Error fetching weather data:", error);
		alert("Failed to fetch weather data. Please check the city name and try again.");
	}
}

// Load default city on page load
document.addEventListener("DOMContentLoaded", () => {
	const defaultCity = "Butwal";
	checkWeather(defaultCity);
});
