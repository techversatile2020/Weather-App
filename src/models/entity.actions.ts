import { NotesEnumsTypes } from "../constants";
import { NotesDataTypes } from "../screens/homeScreens/searched-person-entity-activity/NotesFlatlist";
import { SecondaryMiniCardProps } from "../sharedUI/secondary-mini-card";

export type AccessInformationDataTypes = SecondaryMiniCardProps & {
  id: string;
};

export type AccessInformationListType = {
  id: string;
  accessInformationCardData: AccessInformationDataTypes[];
  // onPress: () => void;
}[];

export type NotesListType = {
  id: string;
  notesCardData: NotesDataTypes[];
  noteType: NotesEnumsTypes;
  // onPress: () => void;
}[];
