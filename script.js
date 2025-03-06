const APIKey = 'bf1206f6dd8eb6006fd710d21bde1a45';
const map = L.map('map').setView([51.505, -0.09], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', onMapClick);

const searchButton = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const container = document.querySelector('.container');
const weatherDetails = document.querySelector('.weather-details');
const notFound = document.querySelector('.not-found');

searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city === '') return;
    fetchWeatherData(`q=${city}`);
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function onMapClick(e) {
    const { lat, lng } = e.latlng;
    fetchWeatherData(`lat=${lat}&lon=${lng}`);
}

function fetchWeatherData(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => handleWeatherResponse(json))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data. Please try again later.');
        });
}

function handleWeatherResponse(json) {
    if (json.cod === '404') {
        displayError();
        return;
    }

    updateWeatherUI(json);
}

function displayError() {
    weatherDetails.style.display = 'none';
    notFound.style.display = 'block';
}

function updateWeatherUI(json) {
    notFound.style.display = 'none';

    const location = document.querySelector('.weather-details .location');
    const temperature = document.querySelector('.weather-details .temperature');
    const description = document.querySelector('.weather-details .description');
    const humidity = document.querySelector('.weather-details .humidity');
    const wind = document.querySelector('.weather-details .wind');
    const weatherIcon = document.querySelector('.weather-details img');

    location.textContent = json.name ? json.name : `${json.coord.lat}, ${json.coord.lon}`;
    temperature.innerHTML = `Temperature: ${json.main.temp}<span>°C</span>`;
    description.textContent = `Weather: ${json.weather[0].description}`;
    humidity.textContent = `Humidity: ${json.main.humidity}%`;
    wind.textContent = `Wind Speed: ${json.wind.speed} Km/h`;

    switch (json.weather[0].main) {
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Snow':
            weatherIcon.src = 'images/snow.png';
            break;
        case 'Clouds':
            weatherIcon.src = 'images/cloud.png';
            break;
        case 'Haze':
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            weatherIcon.src = '';
    }

    weatherDetails.style.display = 'block';
}