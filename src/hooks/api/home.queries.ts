import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { HomeAPIS } from "../../api/home";
import { QueryKeys } from "../../constants";
import { useTypedSelector } from "../useTypedSelected";
import { LocationCities, WeatherApiResponse } from "../../models";
import { WeatherResponse } from "../../components/weather-card/types";
import { setCityForecastData } from "../../redux/reducers";

export const useGetCityList = ({
  enabled,
  city,
}: {
  enabled?: boolean;
  city: string;
}) => {
  return useQuery<LocationCities[]>({
    enabled: enabled,
    queryKey: [QueryKeys.GET_CITIES, city],
    queryFn: async () => {
      const { data } = await HomeAPIS.searchCities(city || "");
      const citiesListData = data;
      // console.log("citiesListData=>", citiesListData);
      if (!citiesListData) {
        return null;
      }

      return citiesListData;
    },
  });
};

export const useGetCityForecast = ({
  enabled,
  cityData,
}: {
  enabled?: boolean;
  cityData: { id: number; city: string };
}) => {
  const dispatch = useDispatch();
 

  return useQuery({
    enabled: enabled,
    queryKey: [QueryKeys.GET_CITY_FORECAST, cityData?.id],
    queryFn: async () => {
      const { data } = await HomeAPIS.searchCityForecast(
        cityData?.city || "London"
      );
      const cityForecast: WeatherApiResponse = data;
      console.log("dor=>>>>>.", cityForecast);
      if (!cityForecast) {
        return null;
      }
      const transformedData: WeatherResponse = {
        location: {
          name: cityForecast.location.name,
          country: cityForecast.location.country,
          region: cityForecast.location.region,
        },
        current: {
          temp_c: cityForecast.current.temp_c,
          condition: {
            text: cityForecast.current.condition.text,
            icon: cityForecast.current.condition.icon,
          },
        },
      };
      dispatch(setCityForecastData(transformedData));
      return transformedData;
    },
  });
};
