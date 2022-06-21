import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { WeatherResponse } from "../../models";
import { fetchWeather } from "./weatherAPI";

interface WeatherState {
    q: string;
    weathers: WeatherResponse | null,
    loading: boolean;
    error: any
}
const initialState: WeatherState = {
    q: 'ha noi',
    weathers: null,
    loading: false,
    error: ''
}

export const getWeatherByCity = createAsyncThunk('weather/getWeatherByCity', async (q: string, { rejectWithValue }) => {
  try {
    const response = await fetchWeather(q);
    
    return response.data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }

    return rejectWithValue(error.response.data.message)
  }
})
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
          .addCase(getWeatherByCity.pending, (state) => {
            state.loading = true;
          })
          .addCase(getWeatherByCity.fulfilled, (state, action) => {
            state.loading = false;
            state.weathers = action.payload
            state.error= ''
          })
          .addCase(getWeatherByCity.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
          });
      },
})
//actions
//selectors
export const weatherSelector = (state: RootState) => state.weather
//reducers
export default weatherSlice.reducer