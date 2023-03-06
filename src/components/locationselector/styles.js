import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 180,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  buttonContainer:{
    height: 100,
    justifyContent: "space-around",

  }
});