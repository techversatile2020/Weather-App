import React, { useRef, useEffect } from "react";
import { Animated, Pressable, View, ViewStyle } from "react-native";
import { styles } from "./CardContainerStyles";
import { CardContainerProps } from "./CardContainerTypes";
import { useTheme } from "../../hooks";

// Create an animated version of Pressable
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  borderColor,
  customStyles,
  onPress,
  cardContainerRef,
  backgroundColor,
  showSimpleView = false,
}) => {
  const { AppTheme } = useTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handlePressIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.8, // Active opacity value
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    opacity: fadeAnim,
    borderColor: borderColor || AppTheme.Primary,
    backgroundColor: backgroundColor || AppTheme.ContainerBaseColor,
  };

  return showSimpleView ? (
    <View style={[styles.container(AppTheme), customStyles]}>{children}</View>
  ) : (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      ref={cardContainerRef}
      style={[styles.container(AppTheme), animatedStyle, customStyles]}
    >
      {children}
    </AnimatedPressable>
  );
};
