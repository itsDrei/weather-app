const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const date = document.getElementById('date');
const toggle = document.getElementById('toggle-mode');
const icon = document.getElementById('icon-mode');
const container = document.querySelector('.main-weather-container');


const apiKey = 'fbd174d2296499652af4d9cc691f86a8';

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            throw new Error('Something Went Wrong');
        }
    } catch (error) {
        console.log(error);
    }
}



//display default city weather
async function displayDefaultWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            throw new Error('Something Went Wrong');
        }
    } catch (error) {
        console.log(error);
    }
}
displayDefaultWeather();


function displayWeather(data) {
    const cityElement = document.querySelector('.city-name');
    const tempElement = document.querySelector('.weather-temp');
    const iconContainer = document.getElementById('weather-icon');
    const desc = document.querySelector('.weather-desc');
    
    cityElement.textContent = data.name;
    tempElement.textContent = `${data.main.temp}°C`;
    desc.textContent = data.weather[0].description;
    
    // Clear previous icon if any
    iconContainer.innerHTML = '';
    
    // Create and append new icon
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = 'weather-icon';
    iconContainer.appendChild(icon);
}

function showDate() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    date.textContent = today.toLocaleDateString('en-PH', options);
}
showDate();


//display random city weather
const cities = [
    'Manila', 'Tokyo', 'New York', 'London', 'Paris', 'Berlin', 'Sydney', 'Seoul', 'Beijing', 'Moscow',
    'Los Angeles', 'Chicago', 'Toronto', 'Vancouver', 'Mexico City', 'Buenos Aires', 'Sao Paulo', 'Rio de Janeiro', 'Lima', 'Bogotá',
    'Madrid', 'Barcelona', 'Rome', 'Milan', 'Amsterdam', 'Brussels', 'Vienna', 'Zurich', 'Copenhagen', 'Stockholm',
    'Oslo', 'Helsinki', 'Warsaw', 'Prague', 'Budapest', 'Athens', 'Istanbul', 'Dubai', 'Doha', 'Riyadh',
    'Cairo', 'Johannesburg', 'Cape Town', 'Nairobi', 'Casablanca', 'Algiers', 'Tunis', 'Addis Ababa', 'Accra', 'Dakar',
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Karachi', 'Lahore', 'Islamabad', 'Dhaka',
    'Bangkok', 'Phnom Penh', 'Hanoi', 'Ho Chi Minh City', 'Jakarta', 'Kuala Lumpur', 'Singapore', 'Hong Kong', 'Macau', 'Taipei',
    'Shenzhen', 'Guangzhou', 'Chengdu', 'Xi’an', 'Wuhan', 'Hangzhou', 'Tianjin', 'Fukuoka', 'Nagoya', 'Osaka',
    'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Auckland', 'Wellington', 'Christchurch', 'Suva', 'Port Moresby', 'Honiara',
    'San Francisco', 'Seattle', 'Boston', 'Miami', 'Washington D.C.', 'Philadelphia', 'Dallas', 'Houston', 'Denver', 'Las Vegas'
];


async function getRandomWeather() {
    try {
        const randomIndex = Math.floor(Math.random() * cities.length);
        const city = cities[randomIndex];

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayRandomWeather(data, city);
        
        } else {
            throw new Error(data.message || 'Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
}
const cities1 = [
    'Manila', 'Tokyo', 'New York', 'London', 'Paris', 'Berlin', 'Sydney', 'Seoul', 'Beijing', 'Moscow',
    'Los Angeles', 'Chicago', 'Toronto', 'Vancouver', 'Mexico City', 'Buenos Aires', 'Sao Paulo', 'Rio de Janeiro', 'Lima', 'Bogotá',
    'Madrid', 'Barcelona', 'Rome', 'Milan', 'Amsterdam', 'Brussels', 'Vienna', 'Zurich', 'Copenhagen', 'Stockholm',
    'Oslo', 'Helsinki', 'Warsaw', 'Prague', 'Budapest', 'Athens', 'Istanbul', 'Dubai', 'Doha', 'Riyadh',
    'Cairo', 'Johannesburg', 'Cape Town', 'Nairobi', 'Casablanca', 'Algiers', 'Tunis', 'Addis Ababa', 'Accra', 'Dakar',
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Karachi', 'Lahore', 'Islamabad', 'Dhaka',
    'Bangkok', 'Phnom Penh', 'Hanoi', 'Ho Chi Minh City', 'Jakarta', 'Kuala Lumpur', 'Singapore', 'Hong Kong', 'Macau', 'Taipei',
    'Shenzhen', 'Guangzhou', 'Chengdu', 'Xi’an', 'Wuhan', 'Hangzhou', 'Tianjin', 'Fukuoka', 'Nagoya', 'Osaka',
    'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Auckland', 'Wellington', 'Christchurch', 'Suva', 'Port Moresby', 'Honiara',
    'San Francisco', 'Seattle', 'Boston', 'Miami', 'Washington D.C.', 'Philadelphia', 'Dallas', 'Houston', 'Denver', 'Las Vegas'
];

async function getRandomWeather1() {
    try {
        const randomIndex = Math.floor(Math.random() * cities1.length);
        const city = cities1[randomIndex];

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayRandomWeather1(data, city);
        
        } else {
            throw new Error(data.message || 'Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayRandomWeather(data, city) {
    const cityElement = document.querySelector('#other-city');
    const tempElement = document.querySelector('#other-temp');
    const iconContainer = document.querySelector('#other-weather-icon');
    
    cityElement.textContent = city;
    tempElement.textContent = `${data.main.temp}°C`;

    // Clear previous icon if any
    iconContainer.innerHTML = '';

    // Create and append new icon
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;
    iconContainer.appendChild(icon);
}
function displayRandomWeather1(data, city) {
    const cityElement = document.querySelector('#other-city-1');
    const tempElement = document.querySelector('#other-temp-1');
    const iconContainer = document.querySelector('#other-weather-icon-1');
    
    cityElement.textContent = city;
    tempElement.textContent = `${data.main.temp}°C`;

    // Clear previous icon if any
    iconContainer.innerHTML = '';

    // Create and append new icon
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;
    iconContainer.appendChild(icon);
}

// Call the function to display random weather
getRandomWeather();
getRandomWeather1();


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
    const city = search.value;
    if (city) {
        getWeatherData(city);
        search.value = '';
    } else {
        alert('Please enter a city name');
    }
});

toggle.addEventListener('click', () => {
    const isDarkMode = container.classList.toggle('dark-mode');
    if (isDarkMode) {
        icon.src = '/images/Sun_fill.svg';
    } else {
        icon.src = '/images/Moon_alt_fill.svg';
    }
});