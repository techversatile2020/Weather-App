import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Platform, StatusBar } from "react-native";
import KeyboardManager from "react-native-keyboard-manager";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { PaperProvider } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
import { NavigationService } from "./src/config";
import { useTheme } from "./src/hooks";
import { MainStack } from "./src/stacks/MainStack";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from 'react-native-toast-message';

if (Platform.OS === "ios") {
  KeyboardManager.setEnable(true);
}

const App: React.FC = () => {
  const { AppTheme } = useTheme();

  const toastConfig = {
    info: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: AppTheme.Primary,
          width: '80%',
          zIndex: 1000,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    success: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: 'lightgreen',
          width: '80%',
          borderLeftWidth: 6,
          zIndex: 1000,

          // ...Metrix.createShadow,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: AppTheme.ErrorTextColor,
          width: '80%',
          zIndex: 1000,
        }}
        text1Style={{
          fontSize: 13,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
  };


  const changeBottomBtnBarColor = () => {
    try {
      const response = changeNavigationBarColor(AppTheme.Base, true);
      console.log(response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };

  React.useEffect(() => {
    changeBottomBtnBarColor();
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer
      ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
      theme={{
        dark: true,
        colors: {
          background: AppTheme.Base,
          primary: AppTheme.Base,
          card: AppTheme.Base,
          text: AppTheme.Base,
          border: AppTheme.Base,
          notification: AppTheme.Base,
        },
      }}
    >
      <PaperProvider>
        <StatusBar barStyle="light-content" />
        <MainStack />
        <Toast config={toastConfig} />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
