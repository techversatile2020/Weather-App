import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  Modal,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../hooks";

type LoaderProps = ActivityIndicatorProps & {
  isVisible?: boolean;
  withModal?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({
  size = "large",
  isVisible,
  withModal,
}) => {
  const { AppTheme } = useTheme();
  if (isVisible) {
    if (withModal) {
      return (
        <Modal visible={isVisible} transparent={true} animationType={"fade"}>
          <View
            style={styles.mainContaienr(AppTheme.ModalContentBackgoundColor)}
          >
            <ActivityIndicator size={size} color={AppTheme.Primary} />
          </View>
        </Modal>
      );
    } else {
      return (
        <View style={styles.mainContaienr(AppTheme.Transparent)}>
          <ActivityIndicator size={size} color={AppTheme.Primary} />
        </View>
      );
    }
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create<any>({
  mainContaienr: (color: any) => ({
    flex: 1,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
    // height: "100%",
  }),
});
