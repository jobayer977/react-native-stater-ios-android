import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {getAsyncStoreData, setAsyncStoreData} from '../utils/async-storage';
import {setAppLanguage, setFontFamily} from '../redux/app.reducer';

import BeforeLoginStack from './BeforeLoginStack';
import RNRestart from 'react-native-restart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {localizedStrings} from '../constants/localization';
import {useDispatch} from 'react-redux';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
const Routes = () => {
  const dispatch = useDispatch();
  const [appLoading, setAppLoading] = useState(false);
  const init = async () => {
    setAppLoading(true);
    Promise.all([
      await getAsyncStoreData('APP_FONT_FAMILY'),
      await getAsyncStoreData('APP_LANGUAGE'),
    ]).then(async values => {
      const [fontFamily, language] = values;
      if (!fontFamily || !language) {
        console.log('hhhhh');
        await setAsyncStoreData('APP_FONT_FAMILY', 'Inter');
        await setAsyncStoreData('APP_LANGUAGE', 'en-US');
        dispatch(setFontFamily('Inter'));
        dispatch(setAppLanguage('en-US'));
        localizedStrings.setLanguage('en-US');
      }
      if (fontFamily && language) {
        dispatch(setFontFamily(fontFamily));
        dispatch(setAppLanguage(language));
        localizedStrings.setLanguage(language);
      }
      setAppLoading(false);
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <NavigationContainer theme={navigatorTheme}>
        <BeforeLoginStack />
      </NavigationContainer>
      {appLoading && <Text>Loading...</Text>}
    </>
  );
};
export default Routes;
const styles = StyleSheet.create({});
