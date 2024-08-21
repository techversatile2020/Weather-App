import {Keyboard, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

type ToucableFeedbackProps = {
  children: React.ReactNode;
  customStyle?: ViewStyle;
};

export const ToucableFeedback: React.FC<ToucableFeedbackProps> = ({
  children,
  customStyle,
}) => {
  return (
    <TouchableWithoutFeedback
      style={[{flex: 1}, customStyle]}
      onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});
