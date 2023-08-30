import {Button, Icon, Input} from '@ui-kitten/components';
import {Div, Image} from 'react-native-magnus';
import {GRAY_DARK, WHITE} from '../constants/color-manager';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BackIcon from '../components/BackIcon';
import {IMAGE_ASSETS} from '../constants/assest-manager';
import {createStructuredSelector} from 'reselect';
import {getFontFamily} from '../constants/font-manager';
import {localizedStrings} from '../constants/localization';
import {selectAppFontFamily} from '../redux/app.reducer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {appFontFamily} = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    }),
  );
  const configHeader = () => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: true,
      headerShadowVisible: false,
      headerBackVisible: false,
      headerLeft: () => <BackIcon />,
    });
  };
  useEffect(() => {
    configHeader();
  }, []);
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Div flex={1}>
        <Div alignItems="center" py={53}>
          <Image
            source={IMAGE_ASSETS.securityImage}
            w={200}
            h={180}
            resizeMode="contain"
          />
        </Div>
        <Div alignItems="center">
          <Text
            style={[
              styles.forgotPasswordTitle,
              {
                fontFamily: getFontFamily(appFontFamily, 'Bold'),
              },
            ]}>
            {localizedStrings.forgotPassword}
          </Text>
          <Text
            style={[
              styles.forgotPasswordDescription,
              {
                fontFamily: getFontFamily(appFontFamily, 'Regular'),
              },
            ]}>
            {localizedStrings.enterYourEmailAddressForRecovering}
          </Text>
          <Text
            style={[
              styles.forgotPasswordDescription,
              {
                fontFamily: getFontFamily(appFontFamily, 'Regular'),
              },
            ]}>
            {localizedStrings.yourPassword}
          </Text>
        </Div>
        <Div pt={36} pb={40}>
          <Input
            accessoryLeft={() => (
              <Icon name="email-outline" fill={GRAY_DARK} style={styles.icon} />
            )}
            size="large"
            style={styles.input}
            placeholder="Email"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
        </Div>
        <Button size="large">{localizedStrings.continue}</Button>
      </Div>
      <Div row justifyContent="center" pb={20}>
        <Text
          style={[
            styles.doestHaveAccountTxt,
            {
              fontFamily: getFontFamily(appFontFamily, 'Regular'),
            },
          ]}>
          {localizedStrings.alreadyHaveAnAccount}{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text
            style={[
              styles.signUpTxt,
              {
                fontFamily: getFontFamily(appFontFamily, 'Bold'),
              },
            ]}>
            {localizedStrings.signIn}
          </Text>
        </TouchableOpacity>
      </Div>
    </SafeAreaView>
  );
};
export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
  },
  forgotPasswordTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: '#2C3A42',
  },
  forgotPasswordDescription: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#9F9F9F',
  },
  icon: {
    height: 22,
    width: 22,
    marginHorizontal: 5,
  },
  doestHaveAccountTxt: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 15,
    color: '#9F9F9F',
  },
  signUpTxt: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 15,
    color: '#1975EE',
  },
  input: {
    borderWidth: 0,
  },
});
