import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { HOME, PROFILE } from "../../screenName";
import HomeStack from "../HomeStack";
import Profile from "../../../Components/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        inactiveTintColor: "rgb(82, 87, 94)",
        style: {
          backgroundColor: "rgb(104, 178, 209)",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case PROFILE:
              iconName = "user";
              break;

            case HOME:
              iconName = "home";
              break;
          }
          return <AntDesign name={iconName} size={24} style={{ color }} />;
        },
      })}
    >
      <Screen name={HOME} component={HomeStack} />
      <Screen name={PROFILE} component={Profile} />
    </Navigator>
  );
}

export default RootTabNavigator;
