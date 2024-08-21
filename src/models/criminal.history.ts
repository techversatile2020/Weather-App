import { CriminalHistoryDataTypes } from "../screens/homeScreens/searched-person-criminal-history";

export type CriminalHistoryListType = {
  id: string;
  criminalHistoryData: CriminalHistoryDataTypes[];
  onPress: () => void;
}[];
