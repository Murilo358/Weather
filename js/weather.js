const cityName = document.querySelector("#city");
const temp = document.querySelector("#temperature span");
const desc = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const countryFLag = document.querySelector("#country");
const humidity = document.querySelector("#humidity span");
const wind = document.querySelector("#wind span");
const min = document.querySelector("#minTemp span");
const max = document.querySelector("#maxTemp span");
const weatherCointainer = document.querySelector("#weather-data");

export const cityInput = document.querySelector("#city-input");

export const findWeatherData = async (city) => {
  const apiKey = "fac26589775451676f8907372eb4548e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  return data;
};

export const showWeatherData = async (city) => {
  const data = await findWeatherData(city);

  if (data.message) {
    const error = document.getElementById("error");
    error.innerText = "ERRO NA BUSCA DA CIDADE!";
    error.style.marginTop = "3rem";
    error.style.padding = "1rem";
  } else {
    error.innerText = "";
    error.style.marginTop = "0";
    error.style.padding = "0";
    weatherCointainer.classList.remove("hide");
    cityName.innerText = data.name;
    temp.innerText = data.main.temp;
    desc.innerText = data.weather[0].description;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    countryFLag.setAttribute(
      "src",
      `https://flagsapi.com/${data.sys.country}/flat/64.png`
    );
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${parseInt(data.wind.speed)}Km`;

    min.innerText = data.main.temp_min;
    max.innerText = data.main.temp_max;
  }

  cityInput.value = "";
};
