import React, { useState } from "react";

// Screen Names
import { HOME, LOGIN } from "../../Navigation/screenName";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

import { signup } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const errors = useSelector((state) => state.errors.errors);
  const dispatch = useDispatch();

  const goToMainList = () => navigation.navigate(HOME, { screen: HOME });
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
      {!!errors.length && (
        <View className="alert alert-danger" role="alert">
          {errors.map((error) => (
            <Text key={error}>{error}</Text>
          ))}
        </View>
      )}
      <TextInput
        style={styles.authTextInput}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => dispatch(signup(user, goToMainList))}
      >
        <Text style={styles.authButtonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.authOther} onPress={() => navigation.replace(LOGIN)}>
        Click here to log in!
      </Text>
    </View>
  );
};

export default Signup;
