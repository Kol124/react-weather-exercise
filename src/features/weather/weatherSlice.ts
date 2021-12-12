import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { WeatherDataType } from "../../interfaces/index";
import { fetchWeatherData, ParseWeatherData } from "../../api/index";

// const API_URL = process.env.REACT_APP_WEATHER_API_KEY;
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export interface WeatherState {
  data: WeatherDataType[];
  isLoading: boolean;
}

const initialState: WeatherState = {
  data: [],
  isLoading: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = ParseWeatherData(action.payload);
        state.data = res.forecastData;
        console.log(state.data);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        console.log("Error: FetchWeather Reducer Action");
      });
  },
});

export const { setIsLoading } = weatherSlice.actions;
// export const selectWeather = (state: RootState) => state.weather.data;
export default weatherSlice.reducer;
