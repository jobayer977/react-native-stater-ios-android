import FeedScreen from "../screens/feed/FeedScreen";
import { Profile6Screen } from "../screens/profile/ProfileScreen";
import ProfileMenuScreen from "../screens/profile/ProfileMenuScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="FeedScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ProfileMenuScreen" component={ProfileMenuScreen} />
    <Stack.Screen name="ProfileScreen" component={Profile6Screen} />
  </Stack.Navigator>
);
