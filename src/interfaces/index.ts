export interface WeatherData {
  day: string;
  temp: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  };
}
