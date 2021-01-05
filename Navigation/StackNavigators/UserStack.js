import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/SignUp";
// Screens
import { LOGIN, SIGNUP } from "../screenName";

const { Navigator, Screen } = createStackNavigator();

function User() {
  return (
    <Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#74ebd5",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "white",
        headerShown: false,
      }}
    >
      <Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
      <Screen
        name={SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default User;
