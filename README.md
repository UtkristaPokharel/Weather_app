# Weather App

## Overview
The Weather App is a web-based application that allows users to search for weather information for any city. It displays essential weather details, including temperature, conditions, sunrise and sunset times, humidity, rainfall, and wind speed. The app uses the Visual Crossing Weather API for fetching weather data.

## Features
- Search for weather information by city name.
- Displays:
  - Temperature in Celsius.
  - Current weather condition.
  - Sunrise and sunset times.
  - Humidity percentage.
  - Rainfall probability in mm.
  - Wind speed in km/h.
- Dynamic icons that change based on weather conditions (e.g., sunny, cloudy, rainy).
- Default city weather is displayed on page load.
- Light and user-friendly UI with responsive design.

## Tech Stack
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic behavior and API interaction.
- **Visual Crossing Weather API**: Fetching weather data.

## Project Structure
```
weather-app/
├── index.html         # Main HTML file
├── styles.css         # CSS file for styling
├── script.js          # Main JavaScript file
├── api.js             # Handles API calls
├── img/               # Contains images for icons
│   ├── search.png
│   ├── sunny.png
│   ├── cloudy_night.png
│   ├── partially_sunny.png
│   ├── rainy.png
│   ├── sunrise.png
│   ├── sunset.png
│   ├── humidity.png
│   ├── precipitation.png
│   ├── wind.png
└── README.md          # Project documentation
```

## Setup Instructions
1. Clone the repository or download the source files.
2. Open the `index.html` file in your browser.
3. Ensure all files (CSS, JS, images) are in their correct directories for proper functionality.

## Usage
1. Open the Weather App in a browser.
2. Enter the name of a city in the search box.
3. Click the search button or press `Enter`.
4. View weather details for the entered city.

## API Integration
This project uses the Visual Crossing Weather API to fetch weather data. Below is the base API URL format used:
```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=metric&contentType=json&key={apiKey}
```
- Replace `{city}` with the name of the desired city.
- Replace `{apiKey}` with your API key.

## Default Behavior
- On page load, the weather information for **Butwal** is displayed.

## Future Improvements
- Add support for geolocation to fetch the weather for the user's current location.
- Implement a "favorites" feature to save frequently searched cities.
- Enhance the UI for better responsiveness and accessibility.

## Troubleshooting
- **Images not loading**: Ensure all image files are in the `img` directory.
- **Weather data not loading**: Verify the API key in `api.js` and ensure a stable internet connection.

## Credits
- Weather API: [Visual Crossing Weather API](https://www.visualcrossing.com/)
- Icons: Custom icons for weather conditions.

## License
This project is free. Feel free to use and modify it as needed.


