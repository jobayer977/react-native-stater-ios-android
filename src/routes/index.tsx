import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import AfterLoginStack from "./AfterLoginStack";
import BeforeLoginStack from "./BeforeLoginStack";
import EventEmitter from "react-native-eventemitter";
import LoaderAnimation from "../components/LoaderAnimation";
import { getLocalDate } from "../lib/app_prefs";
import { useDispatch } from "react-redux";
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export const Routes = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [appLoading, setAppLoading] = useState(false);
  const [isDashboardStack, setIsDashboardStack] = useState(false);
  useEffect(() => {
    checkAppDashboardRedirection();
    EventEmitter.on("STACK_CHANGE", (data) => {
      setIsDashboardStack(data.isDashboardStack);
    });
  }, []);
  const checkAppDashboardRedirection = async () => {
    try {
      setAppLoading(true);
      const token = await getLocalDate("TOKEN");
      if (token) {
        setIsDashboardStack(true);
      }
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };
  return (
    <NavigationContainer theme={navigatorTheme}>
      {!appLoading && <BeforeLoginStack />}
      {appLoading && <LoaderAnimation />}
    </NavigationContainer>
  );
};
