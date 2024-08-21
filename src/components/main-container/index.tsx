import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ToucableFeedback } from "..";
import { useTheme } from "../../hooks";
import { SD } from "../../utils";

type MainContainerProps = {
  children?: ReactNode;
  customeStyle?: StyleProp<ViewStyle>;
  hidden?: boolean;
  mainContainerStyle?: StyleProp<ViewStyle>;
  barStyle?: "default" | "light-content" | "dark-content";
  barBg?: string;
  isFlatList?: boolean;
};

export const MainContainer: React.FC<MainContainerProps> = ({
  children,
  customeStyle,
  hidden = false,
  mainContainerStyle,
  barStyle = "light-content",
  barBg,
  isFlatList,
}) => {
  const { AppTheme } = useTheme();
  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS == "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={10}
    // >
      <SafeAreaView
        style={[
          { flex: 1, backgroundColor: AppTheme.Base },
          mainContainerStyle,
        ]}
      >
        <StatusBar
          hidden={hidden}
          barStyle={barStyle}
          backgroundColor={barBg || AppTheme.Base}
        />
        {!isFlatList ? (
          <ToucableFeedback>
            <View style={[styles.container, customeStyle]}>{children}</View>
          </ToucableFeedback>
        ) : (
          <View style={[styles.container, customeStyle]}>{children}</View>
        )}
      </SafeAreaView>
      // {/* <NoInternet isOffline={true} /> */}
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SD.wp(20),
    paddingVertical: SD.hp(10),
    // borderWidth: 1,
    // backgroundColor: 'white',
  },
});
