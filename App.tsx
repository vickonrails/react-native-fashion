import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "./src/authentication/onboarding";
import { LoadAssets } from "./src/authentication/onboarding/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();

const { Screen, Navigator } = AuthenticationStack;

const AuthenticationNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Onboarding" component={Onboarding} />
  </Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
