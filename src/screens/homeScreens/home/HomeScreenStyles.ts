import { StyleSheet } from "react-native";
import { SD } from "../../../utils";

export const styles = StyleSheet.create({
  rowContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: SD.wp(146),
    height: SD.hp(31),
  },
  hamburger: {
    width: SD.wp(30),
    height: SD.hp(30),
  },
  imageStyles: {
    width: "100%",
    height: "100%",
  },
  addIocnTouchableStyle: {
    position: "absolute",
    bottom: SD.hp(21),
    right: SD.wp(23),
    width: SD.wp(75),
    height: SD.hp(75),
  },
  listContainer: {
    // borderWidth: 1,
    flex: 2,
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  existingCaseNumberContainer: {
    // borderWidth: 1,
    height: SD.hp(110),
    width: "100%",
    position: "absolute",
    top: SD.hp(50),
    zIndex: 100,
    paddingBottom: SD.hp(10),
  },
  caseNumberItem: {
    paddingTop: SD.hp(10),
    paddingBottom: SD.hp(5),
    // paddingLeft: SD.hp(10),
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
});
