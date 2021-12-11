import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { WeatherData } from "../../interfaces/index";

export interface WeatherState {
  data: WeatherData[];
  status: "loading";
}

const initialState: WeatherState = {
  data: [],
  status: "loading",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export const selectWeather = (state: RootState) => state.weather.data;

export default weatherSlice.reducer;
