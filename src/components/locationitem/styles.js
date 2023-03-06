import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 20,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize: 14,
    color: colors.text,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 10,
  },
});