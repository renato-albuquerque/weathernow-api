// variables 

const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04";
const apiCountryURL = "https://flagsapi.com//flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const countryElement = document.querySelector("#country")
const temperatureElement = document.querySelector("#temperature span")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

// functions

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    temperatureElement.innerText = (data.main.temp).toFixed(0);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}

// events

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const city = cityInput.value;
    
    showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) => {
    const city = e.target.value;
    
    showWeatherData(city);
    
})