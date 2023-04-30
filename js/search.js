import { cityInput } from "./weather.js";
import { showWeatherData } from "./weather.js";

const search = document.querySelector("#search");

export const searchBtn = function () {
  search.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
  });

  cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      const city = e.target.value;

      showWeatherData(city);
    }
  });
};
