import { FeedNavigator } from "./feed-navigator";
import { HomeBottomNavigation } from "./components/home-bottom-navigation.component";
import PeoplesScreen from "../screens/peoples/PeoplesScreen";
import { ProfileNavigator } from "./profile-navigator";
import React from "react";
import VideosScreen from "../screens/videos/VideosScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export const HomeNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={(v: any) => {
      return {
        headerShown: false,
      };
    }}
    initialRouteName={"feed"}
    tabBar={(props) => <HomeBottomNavigation {...props} />}
  >
    <BottomTab.Screen name="feed" component={FeedNavigator} />
    <BottomTab.Screen name="PeoplesScreen" component={PeoplesScreen} />
    <BottomTab.Screen name="VideosScreen" component={VideosScreen} />
    <BottomTab.Screen name="ProfileNavigator" component={ProfileNavigator} />
  </BottomTab.Navigator>
);
