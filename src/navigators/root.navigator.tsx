import React, { useEffect, useState } from "react";

import { AppPreferences } from "../app/app_prefs";
import { Div } from "react-native-magnus";
import { HomeNavigator } from "./bottom.navigator";
import { SignInScreen } from "../screens/auth/SignInScreen";
import { Spinner } from "@ui-kitten/components";
import SplashScreen from "../screens/splash/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export const RootNavigator = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnBoard, setIsOnBoard] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const initialLoad = async () => {
    setIsLoading(true);
    try {
      const isOnboardingCompleted =
        await AppPreferences.getInstance().getLocalDate("ONBOARDING_COMPLETED");
      setIsOnBoard(isOnboardingCompleted);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    initialLoad();
  }, []);
  return isLoading ? (
    <Div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner />
    </Div>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isOnBoard && <Stack.Screen name="splash" component={SplashScreen} />}
      {!isAuth && <Stack.Screen name="sign-in" component={SignInScreen} />}
      <Stack.Screen name="home" component={HomeNavigator} />
    </Stack.Navigator>
  );
};
