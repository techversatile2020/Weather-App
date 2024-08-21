import React from "react";
import { ImageBackground } from "react-native";
import { MainContainer } from "../../../components";
import { Images } from "../../../config";
import { useTheme } from "../../../hooks";

export const HomeScreen = ({}) => {
  const { AppTheme } = useTheme();

  return (
    <ImageBackground source={Images.HomeGradient} style={{ flex: 1 }}>
      <MainContainer
        mainContainerStyle={{ backgroundColor: AppTheme.Transparent }}
      ></MainContainer>
    </ImageBackground>
  );
};
