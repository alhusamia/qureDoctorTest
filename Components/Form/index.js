import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { Container, Content } from "native-base";
import { useSelector } from "react-redux";
import styles from "./styles";
import Cards from "./Card";
import Model from "./Model";
import { Ionicons } from "@expo/vector-icons";
import email from "react-native-email";

const AppForm = (props) => {
  const { patient } = props.route.params;
  const lists = useSelector((state) => state.medicinList.medicinList);

  const [data, setData] = useState({
    firstName: `${patient.firstName}`,
    lastName: `${patient.lastName}`,
    age: `${patient.age}`,
  });
  const [show, setShow] = useState(false);
  let c = lists.map(
    (e) =>
      `
         type : ${e.type},
         quantity : ${e.quantity},
         description : ${e.description}
  `
  );

  const handleEmail = () => {
    const to = [`${patient.pharEmail}`];
    email(to, {
      // Optional additional arguments
      cc: [], // string or array of email addresses
      bcc: "", // string or array of email addresses
      subject: "Patient data",
      body: `
      First Name: ${data.firstName},

      Last Name : ${data.lastName},

      Age :  ${data.age},

      Medicin : ${c}
        

      
       
       D.Ali alhusamia
       tel:0777763313
       Amman/Jordan
        `,
    }).catch(console.error);
  };

  return (
    <View style={styles.formContainer}>
      <Container>
        <Text style={styles.Header}>First Name</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#A6AEC1"
          value={data.firstName}
          onChangeText={(firstName) => setData({ ...data, firstName })}
        />
        <Text style={styles.Header}>Last Name</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#A6AEC1"
          value={data.lastName}
          onChangeText={(lastName) => setData({ ...data, lastName })}
        />
        <Text style={styles.Header}>Age</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Age"
          placeholderTextColor="#A6AEC1"
          value={data.age}
          onChangeText={(age) => setData({ ...data, age })}
        />
        <Text style={styles.Header}>Medicin</Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <Ionicons
            name="md-add-circle"
            size={26}
            color="#7A95A5"
            onPress={() => setShow(true)}
          />
        </View>
        <Container>
          <Content padder>
            <Cards />
          </Content>
        </Container>
        <TouchableOpacity style={styles.Button} onPress={handleEmail}>
          <Text style={styles.ButtonText}>Send via Email</Text>
        </TouchableOpacity>

        <Model show={show} setShow={(e) => setShow(e)} />
      </Container>
    </View>
  );
};
export default AppForm;
