import React from "react";
import { List, Content } from "native-base";
import { patients } from "../../Data";

// Component
import Item from "./Item";
const AppointmentList = ({ navigation }) => {
  const AppList = patients.map((patient) => (
    <Item
      patient={patient}
      key={patient.firstName + patient.lastName}
      navigation={navigation}
    />
  ));
  return (
    <Content>
      <List>{AppList}</List>
    </Content>
  );
};

export default AppointmentList;
