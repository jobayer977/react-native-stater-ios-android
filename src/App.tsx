import * as eva from '@eva-design/eva';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useEffect} from 'react';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';
import {default as customMapping} from './theme/custom-mapping.json';
import {default as customTheme} from './theme/custom-theme.json';
import {rootReducers} from './redux';

const appMapping = {
  eva: {
    mapping: eva.mapping,
    customMapping: customMapping,
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...appMapping.eva}
        theme={{...eva.light, ...customTheme}}>
        <ThemeProvider>
          <Provider store={rootReducers}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;
const styles = StyleSheet.create({});
