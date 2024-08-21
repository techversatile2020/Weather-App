import { StyleSheet } from "react-native";
import { SD } from "../../utils";

export const styles = StyleSheet.create<any>({
  container: (AppTheme: any) => ({
    // borderWidth: 1,
    padding: SD.hp(20),
    backgroundColor: AppTheme?.ContainerBaseColor,
    borderRadius: SD.hp(10),
  }),
});
