import React from "react";
import { View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
} from "native-base";

// Style
import styles from "./styles";

const Item = ({ patient, navigation }) => {
  return (
    <View>
      <View style={styles.overlay} />
      <ListItem
        button
        style={styles.listitem}
        onPress={() => navigation.navigate("AppointmentForm", { patient })}
      >
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{
                  uri:
                    "https://e7.pngegg.com/pngimages/210/728/png-clipart-medicine-health-care-physician-credentialing-patient-medicine-health-care-thumbnail.png",
                }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>
                {patient.firstName} {patient.lastName}
              </Text>
            </Left>
            <Right>
              <Text style={styles.time}>{patient.appointmentTime}</Text>
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    </View>
  );
};

export default Item;
