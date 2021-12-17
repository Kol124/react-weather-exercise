export interface WeatherDataType {
  day: string;
  avg_temp: number;
  weather: {
    id: number;
    main: string;
  };
  temperatures?: number[];
}
