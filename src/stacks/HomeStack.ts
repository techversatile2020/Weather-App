import { HOME_ROUTES } from "../constants";
import { HomeScreen } from "../screens";

export type HomeStackParamList = {
  [HOME_ROUTES.HomeScreen]: undefined;
};

type HomeScreenStacksTypes = {
  name: HOME_ROUTES;
  component: React.FC;
}[];

export const HomeStack: HomeScreenStacksTypes = [
  {
    name: HOME_ROUTES.HomeScreen,
    component: HomeScreen,
  },
];
