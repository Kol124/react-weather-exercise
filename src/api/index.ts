const API_URL = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherData = async () => {
  let url = `${API_URL}&appid=${API_KEY}`;

  return await (await fetch(url)).json();
};
