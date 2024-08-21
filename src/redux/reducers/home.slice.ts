import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherResponse } from "../../components/weather-card/types";

export type HomeStateType = {
  cityForecastData: WeatherResponse | null;
};

export const initialState: HomeStateType = {
  cityForecastData: null,
};

const homeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCityForecastData: (
      state,
      action: PayloadAction<WeatherResponse | null>
    ) => {
      state.cityForecastData = action.payload;
    },
  },
});

export const { setCityForecastData } = homeSlice.actions;

export default homeSlice.reducer;
