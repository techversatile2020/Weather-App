import React, { FC, Ref, useState } from "react";
import {
  Image,
  ImageProps,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Images } from "../../config";
import { useTheme } from "../../hooks";
import { Fonts } from "../../styles";
import { SD } from "../../utils";
import Text from "../text";


export type CustomInputProps = TextInputProps & {
  customStyle?: TextInputProps["style"];
  containerStyle?: ViewStyle;
  onEyePress?: () => void;
  hidepswdState?: boolean;
  secondaryIcon?: boolean;
  source?: ImageProps["source"];
  eye?: boolean;
  isIcon?: boolean;
  iconImage?: ImageProps["source"];
  onBtnPress?: () => void;
  isPressableIcon?: boolean;
  iconStyle?: ImageProps["style"];
  error?: string;
  touched?: boolean;
  inputRef?: Ref<TextInput>;
  onBlur?: () => void;
  focusBorderColor?: string;
  isSecondary?: boolean;
  isDropdown?: boolean;
  dropdownContent?: string[];
};

export const CustomInput: FC<CustomInputProps> = ({
  customStyle,
  containerStyle,
  onEyePress,
  hidepswdState,
  secondaryIcon,
  source,
  eye,
  isIcon,
  iconImage,
  onBtnPress,
  isPressableIcon,
  iconStyle = {},
  error,
  touched,
  inputRef,
  onBlur,
  focusBorderColor,
  isSecondary,
  editable = true,
  ...rest
}) => {
  const { AppTheme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <View
        style={[
          styles.textContainer(AppTheme, isSecondary),
          isFocused && {
            borderColor:
              focusBorderColor || AppTheme.TextInputBorderColorFocused,

            // borderRadius:SD.hp(10),
          },
          containerStyle,
        ]}
      >
        <TextInput
          onPressIn={() =>
            !editable && isPressableIcon && onBtnPress && onBtnPress()
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (onBlur) onBlur();
            setIsFocused(false);
          }}
          selectionColor={AppTheme.Primary}
          style={[styles.textInput(AppTheme), customStyle]}
          placeholderTextColor={AppTheme.InActiveTabBar}
          ref={inputRef}
          editable={editable}
          {...rest}
        />
        {eye && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.eyeStyle(AppTheme)}
            onPress={onEyePress}
          >
            {hidepswdState ? (
              <Image
                source={Images.EyeAbleIcon}
                style={{
                  width: "45%",
                  height: "45%",
                  // tintColor: AppTheme.InActiveTabBar,
                }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.EyeDisableIcon}
                style={{
                  width: "45%",
                  height: "45%",
                  // tintColor: AppTheme.InActiveTabBar,
                }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        )}
        {isIcon && (
          <TouchableOpacity
            activeOpacity={0.6}
            disabled={!isPressableIcon}
            style={[styles.eyeStyle(AppTheme), iconStyle]}
            onPress={() => isPressableIcon && onBtnPress && onBtnPress()}
          >
            <Image
              source={iconImage}
              style={{
                width: "45%",
                height: "45%",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      {touched && error && <Text color={AppTheme.ErrorTextColor}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create<any>({
  textContainer: (AppTheme: any, isSecondary: boolean) => ({
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
    borderColor: isSecondary
      ? AppTheme.TextInputSecondaryBorderColor
      : AppTheme.TextInputBorderColor,
    alignItems: "center",
    paddingLeft: SD.wp(20),
    paddingRight: SD.wp(16),
    // marginHorizontal:SD.hp(10),
  }),
  textInput: (AppTheme: any) => ({
    color: AppTheme.PrimaryTextColor,
    fontSize: SD.customFontSize(14),
    fontFamily: Fonts.Regular,
    height: "100%",
    width: "90%",
    // borderWidth: 1,
    // backgroundColor: AppTheme.TextInputBaseColor,
    // backgroundColor: AppTheme.TextInputBaseColor,
  }),

  eyeStyle: (AppTheme: any) => ({
    width: "12%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: AppTheme.TextInputBaseColor,
    // borderWidth:1,
    // borderColor:'red',
    // borderRadius: SD.hp(50),
  }),
});
