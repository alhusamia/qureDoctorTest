import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Telcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    paddingLeft: 25,
    paddingRight: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: "center",
  },
  telIcon: {
    color: "#A3C7DD",
    fontSize: 30,
  },
  telRow: {
    flex: 6,
    justifyContent: "center",
  },
  telNumberColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 20,
    color: "rgb(82, 87, 94)",
  },
  telNameColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  telNameText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "200",
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
});

export default styles;
