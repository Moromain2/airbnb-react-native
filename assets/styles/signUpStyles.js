// Modules imports
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles imports
import colors from "./colors";

export default signUpStyles = StyleSheet.create({
  pageContainer: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
  },
  pageHeader: {
    alignItems: "center",
    gap: 16,
    marginVertical: 48,
  },
  logo: {
    height: 100,
    width: 100,
  },
  heading1: {
    fontSize: 24,
    color: colors.gray
  },
  formContainer: {
    paddingHorizontal: 32,
    gap: 20,
    marginBottom: 112,
  },
  error: {
    color: colors.pink,
    alignSelf: "center",
    fontWeight: "bold",
  },
  loader: {
    alignSelf: "center",
    margin: 32,
  },
  pageFooter: {
    paddingHorizontal: 32,
    alignItems: "center",
  }
})