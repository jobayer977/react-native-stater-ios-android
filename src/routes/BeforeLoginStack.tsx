import React, { useEffect, useState } from "react";
import { setAppFontFamily, setAppLanguage } from "../redux/SplashScreenReducer";

import EnterAppScreen from "../screens/EnterAppScreen";
import LoaderAnimation from "../components/LoaderAnimation";
import SignInScreen from "../screens/SignInScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getLocalDate } from "../lib/app_prefs";
import { useDispatch } from "react-redux";
const Stack = createNativeStackNavigator();
const BeforeLoginStack = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [isSplashScreenHide, setIsSplashScreenHide] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  useEffect(() => {
    checkAppSplashScreenVisibility();
    return () => {};
  }, []);
  const checkAppSplashScreenVisibility = async () => {
    try {
      setAppLoading(true);
      const appLanguage = await getLocalDate("APP_LANGUAGE");
      const appFontFamily = await getLocalDate("APP_FONT_FAMILY");
      if (appLanguage && appFontFamily) {
        dispatch(setAppFontFamily(appFontFamily));
        dispatch(setAppLanguage(appLanguage));
        setIsSplashScreenHide(true);
      }
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="EnterAppScreen" component={EnterAppScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      </Stack.Navigator>
      {appLoading && <LoaderAnimation />}
    </>
  );
};
export default BeforeLoginStack;
