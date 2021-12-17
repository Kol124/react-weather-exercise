import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TempUnit } from "../../utils";
import { WeatherDataType } from "../../interfaces/index";
import { fetchWeatherData, ParseWeatherData } from "../../api/index";

export interface WeatherState {
  weatherData: WeatherDataType[];
  isLoading: boolean;
  tempUnit: TempUnit;
}

const initialState: WeatherState = {
  weatherData: [],
  isLoading: false,
  tempUnit: TempUnit.CELCIUS,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { dispatch, rejectWithValue }) => {
    dispatch(setIsLoading(true));

    try {
      const res = await fetchWeatherData(city);
      dispatch(setIsLoading(false));
      return res;
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error!!!");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setIsLoading: (state: WeatherState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    changeTempUnit: (state: WeatherState) => {
      state.tempUnit =
        state.tempUnit === TempUnit.CELCIUS
          ? TempUnit.FAHRENHEIT
          : TempUnit.CELCIUS;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = ParseWeatherData(action.payload);
        state.weatherData = res.forecastData;
        console.log(state.weatherData);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error: FetchWeather Failed");
      });
  },
});

export const { setIsLoading, changeTempUnit } = weatherSlice.actions;
export const selectWeatherData = (state: RootState) =>
  state.weather.weatherData;
export const selectIsLoading = (state: RootState) => state.weather.isLoading;
export const selectTempUnit = (state: RootState) => state.weather.tempUnit;
export default weatherSlice.reducer;
