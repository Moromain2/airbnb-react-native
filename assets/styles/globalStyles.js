// Modules imports
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// Styles imports
import colors from "./colors";

export default globalStyles = StyleSheet.create({
  pageContainer: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogo: {
    height: 32,
    width: 32,
  },
})