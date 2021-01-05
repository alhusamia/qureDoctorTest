import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../Components/Main";
import Form from "../../Components/Form";

// Screens
import { MAIN, FORM } from "../screenName";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      initialRouteName={MAIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(104, 178, 209)",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      <Screen
        name={MAIN}
        component={Home}
        options={() => ({
          title: "Appointment list",
          headerStyle: {
            backgroundColor: "rgb(104, 178, 209)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
        })}
      />
      <Screen
        name={FORM}
        component={Form}
        options={({ route }) => {
          const { patient } = route.params;
          return {
            title: `${patient.firstName}  ${patient.lastName}`,
            headerStyle: {
              backgroundColor: "rgb(104, 178, 209)",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },

            headerTintColor: "white",
          };
        }}
      />
    </Navigator>
  );
}
