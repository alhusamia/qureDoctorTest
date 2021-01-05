import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
  },
  TextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(20,90,100)",
    borderBottomColor: "rgb(20,90,100)",
    borderBottomWidth: 1,
  },
  Header: {
    fontSize: 15,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  inputdate: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595",
  },
  inputcvv: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 50,
    marginBottom: 30,
    color: "rgb(20,90,100)",
    borderWidth: 1,
    borderColor: "rgb(20,90,100)",
    borderRadius: 10,
  },
  Name: {
    color: "red",
  },

  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  Button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(104, 178, 209)",
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  ButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default styles;
