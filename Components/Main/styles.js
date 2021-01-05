import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "rgb(82, 87, 94)",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
  },
  time: {
    color: "rgb(82, 87, 94)",
    fontSize: 10,
    fontWeight: "bold",
    opacity: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    opacity: 0.5,
    height: "100%",
    width: "100%",
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 170,
    flexDirection: "row",
  },
  transparent: {
    backgroundColor: "#A3C7DD",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    borderRadius: 25,
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1,
  },
});
export default styles;
