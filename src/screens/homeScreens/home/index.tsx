import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, Keyboard, View } from "react-native";
import {
  CustomInput,
  Dropdown,
  Loader,
  MainContainer,
} from "../../../components";
import { Images } from "../../../config";
import { QueryKeys } from "../../../constants";
import { useTheme, useTypedSelector } from "../../../hooks";
import { useGetCityForecast, useGetCityList } from "../../../hooks/api";
import { LocationCities } from "../../../models";
import { CommonUtils } from "../../../utils";
import WeatherCard from "../../../components/weather-card";

export const HomeScreen = ({}) => {
  const { AppTheme } = useTheme();
  const queryClient = useQueryClient();
  const cityForecast = useTypedSelector((state) => state.home.cityForecastData);
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState<{
    id: number;
    city: string;
  }>({ id: 0, city: "Dallas" });

  const {
    data: citiesList,
    isFetching: isFetchingCitiesList,
    refetch: refetchCitiesList,
  } = useGetCityList({
    enabled: false,
    city: city,
  });

  const {
    
    isFetching: isFetchingCityForecast,
   
  } = useGetCityForecast({
    enabled: !!selectedCity?.city,
    cityData: selectedCity,
  });

  // Create a debounced function
  const debouncedSearch = useCallback(
    () => CommonUtils.debouncedFunction(refetchCitiesList),
    []
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      CommonUtils.debouncedFunction.cancel();
    };
  }, [debouncedSearch]);

  // Handle input change
  const handleInputChange = (text: string) => {
    setCity(text);
    if (text.length > 2) {
      debouncedSearch();
    } else {
      queryClient.setQueryData([QueryKeys.GET_CITIES], []);
    }
  };

  const handleShowForecast = (item: LocationCities) => {
    console.log("handleShowForecast=>", item);
    Keyboard.dismiss();
    setSelectedCity({ id: item.id, city: item.name });
    setCity("");
  };

  console.log("cityForecast=>", cityForecast);

  return (
    <ImageBackground source={Images.HomeGradient} style={{ flex: 1 }}>
      <MainContainer
        mainContainerStyle={{ backgroundColor: AppTheme.Transparent }}
      >
        <View
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <CustomInput
            value={city}
            onChangeText={handleInputChange}
            autoFocus
            placeholder="Search City"
            isIcon
            iconImage={Images.FilledSearch}

            // isPressableIcon
            // onBtnPress={() => console.log("onBtnPress")}
          />
          <View
            style={{
              position: "absolute",
              zIndex: 100,
              top: 70,
              right: 0,
              width: "100%",
            }}
          >
            {city?.length > 2 && (
              <Dropdown
                citiesdata={citiesList}
                isFetchingCitiesList={isFetchingCitiesList}
                onPress={(item) => handleShowForecast(item)}
              />
            )}
          </View>
        </View>
        <View
          style={{
            // borderWidth: 1,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isFetchingCityForecast ? (
            <Loader isVisible withModal={false} />
          ) : cityForecast ? (
            <WeatherCard data={cityForecast} />
          ) : (
            <></>
          )}
        </View>
      </MainContainer>
    </ImageBackground>
  );
};
