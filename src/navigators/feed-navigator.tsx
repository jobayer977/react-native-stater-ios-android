import FeedScreen from "../screens/feed/FeedScreen";
import { Profile6Screen } from "../screens/profile/ProfileScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export const FeedNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="FeedScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="FeedScreen" component={FeedScreen} />
  </Stack.Navigator>
);
