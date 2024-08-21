import { FlatList, Keyboard, StyleSheet, View } from "react-native";
import React from "react";
import { SD } from "../../utils";
import Text from "../text";
import { CustomTouchable } from "../custom-touchable";
import { LocationCities } from "../../models";
import { useTheme } from "../../hooks";
import { Loader } from "../loader";

type DropdownProps = {
  citiesdata: LocationCities[] | undefined;
  isFetchingCitiesList: boolean;
  onPress: (data: LocationCities) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  citiesdata,
  isFetchingCitiesList,
  onPress,
}) => {
  const { AppTheme } = useTheme();
  return (
    <FlatList
      data={citiesdata||[]}
      keyExtractor={(item, index) => `${item}-${index}`}
      style={{
        backgroundColor: AppTheme.WhiteHalfOpacity,
        borderRadius: SD.hp(10),
        paddingVertical: SD.hp(10),
      }}
      renderItem={({
        item,
        index,
      }: {
        item: LocationCities;
        index: number;
      }) => (
        <CustomTouchable onPress={() => onPress(item)}>
          <View
            style={{
              paddingHorizontal: SD.wp(10),
              marginBottom: SD.hp(citiesdata?.length === index + 1 ? 0 : 10),
            }}
          >
            <Text size={14} regular color={AppTheme.PrimaryTextColor}>
              {`${item?.name}, ${item.country}`}
            </Text>
          </View>
        </CustomTouchable>
      )}
      ListEmptyComponent={() =>
        isFetchingCitiesList ? (
          <Loader
            isVisible
            withModal={false}
            color={AppTheme.Base}
            style={{ paddingHorizontal: SD.hp(10) }}
          />
        ) : (
          <Text size={14} regular centered color={AppTheme.PrimaryTextColor}>
            No City Found
          </Text>
        )
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});
