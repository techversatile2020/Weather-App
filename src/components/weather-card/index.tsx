import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { WeatherResponse } from "./types";
import Text from "../text";
import { CustomImage } from "../custom-image";
import { SD } from "../../utils";
import { useTheme } from "../../hooks";

interface WeatherCardProps {
  data: WeatherResponse;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const {AppTheme} = useTheme();
  const { location, current } = data;
  const temperature = current?.temp_c;
  const description = current?.condition?.text;
  const iconUrl = `https:${current?.condition?.icon}`;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:"rgba(255, 255, 255, 0.3)", // Crystal shade background color
          borderColor: AppTheme.Primary, // Lighter border color for the crystal effect
          shadowColor: AppTheme.Primary,
        },
      ]}
    >
      <CustomImage style={styles.icon} source={{ uri: iconUrl }} />
      <Text bold size={60}>
        {`${temperature}°C`}
      </Text>
      <Text regular centered size={24} bottomSpacing={10}>
        {location?.name},{location?.region}
        {`\n`}
        {location?.country}
      </Text>
      <Text medium size={18}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderRadius: 20,
    height: "60%",
    width: "100%",
    borderWidth: 1,

    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 200, // 3D effect with shadow and elevation
  },
  icon: {
    width: SD.hp(100),
    height: SD.hp(100),
    // marginBottom: SD.hp(10),
  },
});

export default WeatherCard;
