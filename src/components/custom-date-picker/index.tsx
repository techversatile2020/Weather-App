import React, { FC, useState } from "react";
import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
// import DatePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";
import { useTheme } from "../../hooks";
import { DateUtils, SD } from "../../utils";
import Text from "../text";
import { CustomImage } from "../custom-image";
import { CustomTouchable } from "../custom-touchable";
import TextInputMask from "react-native-text-input-mask";
import { Fonts } from "../../styles";

export type CustomDatePickerProps = {
  customStyle?: ViewProps["style"];
  icon?: ImageProps["source"];
  isIcon?: boolean;
  onIconPress?: () => void;
  error?: string;
  touched?: boolean;
  date?: any;
  formatedData?: string;
  onDateChange: (date: string | undefined) => void;
  placeholder?: string;
  isSecondary?: boolean;
};

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  customStyle,
  icon,
  isIcon,
  error,
  touched,
  date,
  onDateChange,
  placeholder = "Select Date",
  isSecondary,
  formatedData,
}) => {
  const { AppTheme } = useTheme();
  const [showDatePicker, setShowDatePicker] = useState(false);

  //   const handleDateChange = (event: any, selectedDate: Date | undefined) => {
  //     setShowDatePicker(false);
  //     if (selectedDate) {
  //       onDateChange && onDateChange(selectedDate);
  //     }
  //   };

  return (
    <>
      <View
        style={[styles.dateContainer(AppTheme, isSecondary), customStyle]}
        // onPress={() => setShowDatePicker(true)}
      >
        {/* {date ? (
          <Text regular size={14}>
            {formatedData}
          </Text>
        ) : (
          <Text color={AppTheme.InActiveTabBar} regular size={14}>
            {placeholder}
          </Text>
        )} */}
        <TextInputMask
          style={styles.input(AppTheme)}
          mask="[00]/[00]/[0000]"
          value={date}
          onChangeText={(formatted) => {
            onDateChange(formatted);
          }}
          keyboardType="numeric"
          placeholder="MM/DD/YYYY"
          placeholderTextColor={AppTheme.InActiveTabBar}
        />
        {isIcon && (
          <View
            style={styles.iconContainer}
            // onPress={() => setShowDatePicker(true)}
          >
            <CustomImage
              source={icon}
              style={{
                width: "45%",
                height: "45%",
              }}
            />
          </View>
        )}
      </View>

      {/* <DatePicker
        modal={true}
        open={showDatePicker}
        theme="dark"
        date={new Date() || date}
        mode="date"
        onConfirm={(date) => {
          onDateChange(date);
          setShowDatePicker(false);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      /> */}

      {touched && error && <Text color={AppTheme.ErrorTextColor}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create<any>({
  dateContainer: (AppTheme: any, isSecondary: boolean) => ({
    borderWidth: 1,
    borderRadius: SD.hp(10),
    height: SD.hp(51),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SD.hp(10),
    backgroundColor: isSecondary
      ? AppTheme.TextInputSecondaryBaseColor
      : AppTheme.TextInputBaseColor,
    borderColor: AppTheme.TextInputBorderColor,
    alignItems: "center",
    paddingLeft: SD.wp(20),
    paddingRight: SD.wp(10),
  }),
  iconContainer: {
    width: "12%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1
  },
  input: (AppTheme: any) => ({
    // borderWidth: 1,
    width: "80%",
    color: AppTheme.PrimaryTextColor,
    fontSize: SD.customFontSize(14),
    fontFamily: Fonts.Regular,
  }),
});
