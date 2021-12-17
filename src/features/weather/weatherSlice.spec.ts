import weatherReducer, {
  WeatherState,
  setIsLoading,
  changeTempUnit,
} from "./weatherSlice";
import { TempUnit } from "../../utils";

describe("weather reducer", () => {
  const initialState: WeatherState = {
    weatherData: [
      {
        day: "17 Fri",
        avg_temp: 6,
        weather: {
          id: 800,
          main: "Clear",
        },
      },
      {
        day: "18 Sat",
        avg_temp: -1,
        weather: {
          id: 801,
          main: "Clouds",
        },
      },
      {
        day: "19 Sun",
        avg_temp: 1,
        weather: {
          id: 803,
          main: "Clouds",
        },
      },
      {
        day: "20 Mon",
        avg_temp: 1,
        weather: {
          id: 804,
          main: "Clouds",
        },
      },
      {
        day: "21 Tue",
        avg_temp: 1,
        weather: {
          id: 802,
          main: "Clouds",
        },
      },
    ],
    isLoading: false,
    tempUnit: TempUnit.CELCIUS,
  };

  it("should handle initial state", () => {
    expect(weatherReducer(undefined, { type: "unknown" })).toEqual({
      weatherData: [],
      isLoading: false,
      tempUnit: TempUnit.CELCIUS,
    });
  });

  it("should change temperature unit", () => {
    const state = weatherReducer(initialState, changeTempUnit());
    expect(state.tempUnit).toEqual(TempUnit.FAHRENHEIT);
  });

  it("should change loading status", () => {
    const state = weatherReducer(initialState, setIsLoading(true));
    expect(state.isLoading).toEqual(true);
  });
});
