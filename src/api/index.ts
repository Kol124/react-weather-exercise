import { WeatherDataType } from "../interfaces";
import { kelvinToCelcius } from "../utils";

// const API_URL = process.env.REACT_APP_WEATHER_API_KEY;
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const API_URL = "http://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = "789b76c5bd81163d5aa1ea31cb39d34a";

export const fetchWeatherData = async (city: string) => {
  let url = `${API_URL}q=${city}&appid=${API_KEY}&cnt=40`;
  return await (await fetch(url)).json();
};

export const ParseWeatherData = (res: any) => {
  const forecastData: WeatherDataType[] = [];
  let list = res.list;
  for (let i = 0; i < list.length; i += 8) {
    forecastData.push({
      day: new Date(list[i + 5].dt_txt),
      temp: {
        temp_max: kelvinToCelcius(list[i].main.temp_max),
        temp_min: kelvinToCelcius(list[i].main.temp_min),
      },
      weather: {
        id: list[i].weather[0].id,
        main: list[i].weather[0].main,
      },
    });
  }

  return { forecastData };
};
