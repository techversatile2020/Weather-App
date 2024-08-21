import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type CustomTouchableProps = {
  children?: ReactNode;
  toucableRef?: any;
} & TouchableOpacityProps;

export const CustomTouchable: React.FC<CustomTouchableProps> = ({
  activeOpacity,
  children,
  toucableRef,
  ...rest
}) => {
  return (
    <TouchableOpacity ref={toucableRef} activeOpacity={activeOpacity || 0.8} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
