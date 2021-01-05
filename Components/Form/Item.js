import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { delet } from "../../redux/actions";
import { useDispatch } from "react-redux";
// NativeBase Components
import { Card, CardItem, Text, Body } from "native-base";

// Style
import styles from "./styles";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Card>
        <CardItem bordered>
          <Body>
            <Text style={styles.TextInput}>{item.type}</Text>
          </Body>
        </CardItem>

        <CardItem bordered>
          <Body>
            <Text style={styles.TextInput}>{item.quantity}</Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.TextInput}>{item.description}</Text>
          </Body>
        </CardItem>
        <View style={{ flexDirection: "row-reverse" }}>
          <MaterialCommunityIcons
            name="delete-circle-outline"
            size={24}
            color="red"
            onPress={() => dispatch(delet(item))}
          />
        </View>
      </Card>
    </View>
  );
};

export default Item;
