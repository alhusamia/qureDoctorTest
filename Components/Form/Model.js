import React, { useState } from "react";
import { TextInput, View, Modal, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { add } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";

export default function Model({ show, setShow }) {
  const [medicin, setMedicin] = useState({
    type: "",
    quantity: "",
    description: "None",
  });
  const dispatch = useDispatch();
  return (
    <Modal transparent={true} visible={show}>
      <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 20,
            padding: 40,
            borderRadius: 10,
            marginTop: "50%",
          }}
        >
          <View style={{ flexDirection: "row-reverse" }}>
            <Feather
              name="x-square"
              size={24}
              color="#7A95A5"
              onPress={() => {
                setShow(false);
              }}
            />
          </View>
          <TextInput
            style={styles.TextInput}
            placeholder="Type"
            placeholderTextColor="#A6AEC1"
            onChangeText={(type) => setMedicin({ ...medicin, type })}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Quantity"
            placeholderTextColor="#A6AEC1"
            onChangeText={(quantity) => setMedicin({ ...medicin, quantity })}
          />
          <TextInput
            style={styles.TextInput}
            multiline={true}
            numberOfLines={4}
            placeholder="Description"
            placeholderTextColor="#A6AEC1"
            onChangeText={(description) =>
              setMedicin({ ...medicin, description })
            }
          />

          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              dispatch(add(medicin));
              setShow(false);
            }}
          >
            <Text style={styles.ButtonText}>add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
