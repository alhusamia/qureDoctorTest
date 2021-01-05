import React, { useState } from "react";

// Screen Names
import { SIGNUP, HOME } from "../../Navigation/screenName";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import { login } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  const [state, setState] = useState({ username: "", password: "" });
  const errors = useSelector((state) => state.errors.errors);
  const dispatch = useDispatch();

  const goToMainList = () => navigation.navigate(HOME, { screen: HOME });
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
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
        onChangeText={(username) => setState({ ...state, username })}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setState({ ...state, password })}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => dispatch(login(state, goToMainList))}
      >
        <Text style={styles.authButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.authOther} onPress={() => navigation.replace(SIGNUP)}>
        Click here to register!
      </Text>
    </View>
  );
};

export default Login;
