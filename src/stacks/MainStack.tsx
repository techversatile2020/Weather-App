import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { HomeStack, HomeStackParamList } from "./HomeStack";

// import {useSelector} from 'react-redux';
// import {RootState} from '../redux/reducers'; // Replace with the actual file where RootState is defined

type RootStackParamList = HomeStackParamList;

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const HomeScreens = HomeStack?.map((stack) => (
    <Stack.Screen
      key={stack?.name}
      name={stack?.name}
      component={stack?.component}
    />
  ));

  return (
    <Stack.Navigator
      // initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      }}
    >
      {HomeScreens}
    </Stack.Navigator>
  );
};
