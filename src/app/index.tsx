import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { appMappings, appThemes } from "./app-theming";

import { AppNavigator } from "../navigators";
import { AppPreferences } from "./app_prefs";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeProvider as MagnusThemeProvider } from "react-native-magnus";
import { ThemeContext } from "../context";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = async () => {
    const currentMode = theme === "light" ? "dark" : "light";
    setTheme(currentMode);
    await AppPreferences.getInstance().setLocalDate("THEME", currentMode);
  };
  useEffect(() => {
    AppPreferences.getInstance()
      .getLocalDate("THEME")
      .then((theme) => {
        setTheme(theme || "light");
      });
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MagnusThemeProvider theme={{}}>
          <ApplicationProvider
            {...appMappings.eva}
            theme={appThemes.eva[theme] as any}
          >
            <AppNavigator />
          </ApplicationProvider>
        </MagnusThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
