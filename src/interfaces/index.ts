export interface WeatherDataType {
  day: any;
  avg_temp: number;
  weather: {
    id: number;
    main: string;
  };
  temperatures?: number[];
}
