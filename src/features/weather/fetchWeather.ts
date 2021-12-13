import { fetchWeatherData } from "../../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading } from "./weatherSlice";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({}, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(setIsLoading(true));

    try {
      const res = await fetchWeatherData();
      dispatch(setIsLoading(false));

      if (res === 200) {
        console.log("Status OK");
        console.log(res[0]);
        return res;
      }
      return rejectWithValue(res.message);
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);
