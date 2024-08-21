import { WEATHER_API_KEY } from "@env";
import httpService from "../https.service";

const searchCities = (city: string) => {
  return httpService().get(`search.json?key=${WEATHER_API_KEY}&q=${city}`);
};

const searchCityForecast = (city: string) => {
  return httpService().get(`current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=yes`);
};

export const HomeAPIS = {
  searchCities,
  searchCityForecast,
};
