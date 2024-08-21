import Snackbar from "react-native-snackbar";

import { ThemeColors } from "../styles";
import Toast from "react-native-toast-message";
import { Platform } from "react-native";

// function success(message: string) {
//   Snackbar.show({
//     text: message || 'Success',
//     duration: Snackbar.LENGTH_LONG,
//     backgroundColor: '#00AC28',
//   });
// }

// function fail(message: string) {
//   Snackbar.show({
//     text: message || 'Error',
//     duration: Snackbar.LENGTH_LONG,
//     backgroundColor: ThemeColors.Red,
//   });
// }

function success(message: string) {
  Toast.show({
    text1: message || "Something Went Wrong",
    type: "success",
    topOffset: Platform.OS === "android" ? 10 : 60,
    visibilityTime: 4000,
  });
}

function fail(message: string) {
  Toast.show({
    text1: message || "Something Went Wrong",
    type: "error",
    topOffset: Platform.OS === "android" ? 10 : 60,
    visibilityTime: 4000,
  });
}

export const toast = {
  success,
  fail,
};
