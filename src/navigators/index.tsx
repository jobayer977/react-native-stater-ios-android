import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import React from "react";
import { RootNavigator } from "./root.navigator";

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: "transparent",
  },
};
export const AppNavigator = (): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <RootNavigator />
  </NavigationContainer>
);
