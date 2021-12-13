import { WeatherDataType } from "../interfaces";
import { kelvinToCelcius, getDays } from "../utils";
require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherData = async (city?: string) => {
  let url = `${API_URL}q=${city}&appid=${API_KEY}&cnt=40`;
  return await (await fetch(url)).json();
};

export const ParseWeatherData = (res: any) => {
  let list: any = {};
  const nextFiveDays = getDays();
  const forecastData: WeatherDataType[] = [];

  res.list.forEach((item: any) => {
    const dateTime = new Date(item.dt * 1000);
    const day = dateTime.getDate();
    const time = dateTime.getHours();

    // check if list map has it
    if (!list[day]) list[day] = [];
    list[day].push({ ...item, day, time });
  });

  const keys = Object.keys(list);
  if (keys.length === 6) keys.pop();

  keys.forEach((i: any, index: number) => {
    forecastData.push({
      day: nextFiveDays[index],
      temp: {
        temp_max: kelvinToCelcius(list[i][index].main.temp_max),
        temp_min: kelvinToCelcius(list[i][index].main.temp_min),
      },
      weather: {
        id: list[i][index].weather[0].id,
        main: list[i][index].weather[0].main,
      },
      // temperatures: [],
    });
  });

  return { forecastData };
};
