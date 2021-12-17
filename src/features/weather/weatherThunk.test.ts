import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../../api";
import { fetchWeather } from "./weatherSlice";
import { WeatherDataType } from "../../interfaces";
import { useAppDispatch } from "../../app/hooks";

jest.mock("../../api");
jest.mock("../../app/hooks");

describe("weather thunk", () => {
  let api: jest.Mocked<typeof fetchWeatherData>;
  let hooks: jest.Mocked<typeof useAppDispatch>;

  beforeAll(() => {
    api: fetchWeatherData as any;
    hooks: useAppDispatch as any;
  });

  afterAll(() => {
    jest.unmock("../../api");
    jest.unmock("../../app/hooks");
  });

  describe("fetchWeatherData", () => {
    let action: AsyncThunkAction<any, string, {}>;
    let dispatch: Dispatch;
    let getState: () => unknown;

    let arg: string;
    let result: WeatherDataType[];

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();

      // fetchWeatherData().mockClear();
      // fetchWeatherData().mockResolvedValue(result);

      arg = "Munich,de";
      result = [
        {
          day: "17 Fri",
          avg_temp: 4,
          weather: {
            id: 800,
            main: "Clear",
          },
        },
        {
          day: "18 Sat",
          avg_temp: -1,
          weather: {
            id: 802,
            main: "Clouds",
          },
        },
        {
          day: "19 Sun",
          avg_temp: 1,
          weather: {
            id: 804,
            main: "Clouds",
          },
        },
        {
          day: "20 Mon",
          avg_temp: 1,
          weather: {
            id: 500,
            main: "Rain",
          },
        },
        {
          day: "21 Tue",
          avg_temp: 0,
          weather: {
            id: 801,
            main: "Clouds",
          },
        },
      ];

      action = fetchWeather(arg);
    });

    it("successfully gets weather data", () => {
      action(dispatch, getState, undefined);
      expect(fetchWeatherData).toHaveBeenCalledWith(arg);
    });
  });
});
