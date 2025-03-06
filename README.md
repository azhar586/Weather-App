# Weather App

A beautiful and interactive weather application that provides weather information based on user input or map clicks. The app uses HTML, CSS, and JavaScript along with Leaflet.js for the map and OpenWeatherMap API for fetching weather data.

## Features

- Interactive map using Leaflet.js
- Weather information based on city name or map click
- Dark mode toggle
- Responsive design for mobile devices

## Libraries and Tools Used

- [Leaflet.js](https://leafletjs.com/) for the interactive map
- [OpenWeatherMap API](https://openweathermap.org/api) for fetching weather data
- HTML, CSS, and JavaScript for the frontend
- Google Fonts for custom fonts

## Assumptions Made During Development

- The OpenWeatherMap API key is valid and has not reached its usage limit.

- The user has a stable internet connection to fetch map tiles and weather data.

## Setup and Run the Project Locally

### Prerequisites

- A web browser (e.g., Chrome, Firefox)
- An internet connection

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Open the project folder**:
   Navigate to the project folder and open the `index.html` file in your web browser.

### File Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── clear.png
│   ├── rain.png
│   ├── snow.png
│   ├── cloud.png
│   ├── mist.png
│   └── 404.png
└── README.md
```

### Running the Project

1. **Open `index.html`**:
   Open the `index.html` file in your web browser to view the weather app.

2. **Search by City Name**:
   Enter a city name in the search box and click the "Search" button to fetch and display weather information for that city.

3. **Click on the Map**:
   Click on any location on the map to fetch and display weather information for that location.

4. **Toggle Dark Mode**:
   Click the "Dark Mode" button to switch between light and dark modes.

## Additional Notes

- Ensure that the `images` folder contains the necessary weather icons (`clear.png`, `rain.png`, `snow.png`, `cloud.png`, `mist.png`, `404.png`).
- If you encounter any issues while fetching weather data, check the console for error messages.



