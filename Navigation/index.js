import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import UserStack from "./StackNavigators/UserStack";
import Footer from "./StackNavigators/Home/FooterStack";

// Screens
import { USER, FOOTER } from "./screenName";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen
        name={USER}
        component={UserStack}
        options={{ headerShown: false }}
      />
      <Screen
        name={FOOTER}
        component={Footer}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default RootNavigator;
