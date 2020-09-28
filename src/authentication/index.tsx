import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../components/Navigation";

import Login from "./login";

import { Onboarding, Welcome } from ".";
export { Onboarding } from "./onboarding";
export { Welcome } from "./welcome";

const AuthenticationStack = createStackNavigator<Routes>();

const { Screen, Navigator } = AuthenticationStack;

export const AuthenticationNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Onboarding" component={Onboarding} />
    <Screen name="Welcome" component={Welcome} />
    <Screen name="Login" component={Login} />
  </Navigator>
);
