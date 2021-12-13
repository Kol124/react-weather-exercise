export interface WeatherDataType {
  day: any;
  temp: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  };
  temperatures?: number[];
}
