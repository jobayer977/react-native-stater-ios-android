import {Button, Icon, Input} from '@ui-kitten/components';
import {Div, Image, ScrollDiv} from 'react-native-magnus';
import {GRAY_BLACK, GRAY_DARK, WHITE} from '../constants/color-manager';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {IMAGE_ASSETS} from '../constants/assest-manager';
import React from 'react';
import {createStructuredSelector} from 'reselect';
import {getFontFamily} from '../constants/font-manager';
import {localizedStrings} from '../constants/localization';
import {selectAppFontFamily} from '../redux/app.reducer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {appFontFamily} = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    }),
  );
  const [value, setValue] = React.useState('');
  console.log({appFontFamily});
  return (
    <SafeAreaView style={styles.container}>
      <ScrollDiv flex={1} showsVerticalScrollIndicator={false}>
        <Div px={20}>
          <Image
            mt={68}
            mb={32}
            source={IMAGE_ASSETS.logo}
            w={88}
            h={39}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontFamily(appFontFamily, 'Bold'),
              },
            ]}>
            {localizedStrings.create}
          </Text>
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontFamily(appFontFamily, 'Bold'),
              },
            ]}>
            {localizedStrings.yourAccount}
          </Text>
        </Div>
        <Div px={20} pt={53}>
          <Div mb={24}>
            <Input
              accessoryLeft={() => (
                <Icon
                  name="person-outline"
                  fill={GRAY_DARK}
                  style={styles.icon}
                />
              )}
              size="large"
              placeholder="Name"
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
            />
          </Div>
          <Div mb={24}>
            <Input
              accessoryLeft={() => (
                <Icon
                  name="email-outline"
                  fill={GRAY_DARK}
                  style={styles.icon}
                />
              )}
              size="large"
              placeholder="Email"
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
            />
          </Div>
          <Div mb={42}>
            <Input
              accessoryLeft={() => (
                <Icon
                  name="lock-outline"
                  fill={GRAY_DARK}
                  style={styles.icon}
                />
              )}
              accessoryRight={() => (
                <Icon name="eye-outline" fill={GRAY_DARK} style={styles.icon} />
              )}
              size="large"
              placeholder="Password"
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
            />
          </Div>
          <Div mb={26}>
            <Button size="large">{localizedStrings.register}</Button>
          </Div>

          <Div bg={'#D9D9D9'} h={1} position="relative" mb={36}>
            <Div
              position="absolute"
              top={-10}
              row
              justifyContent="center"
              w={'100%'}>
              <Div bg={WHITE} w={200} row justifyContent="center">
                <Text>{localizedStrings.continueWith}</Text>
              </Div>
            </Div>
          </Div>

          <Div row justifyContent="center" mb={60}>
            <Image
              source={IMAGE_ASSETS.googleLoginIcon}
              w={73}
              h={46}
              resizeMode="contain"
            />
            <Div mx={13} />
            <Image
              source={IMAGE_ASSETS.fbLoginIcon}
              w={73}
              h={46}
              resizeMode="contain"
            />
          </Div>
          <Div row justifyContent="center" pb={67}>
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
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    color: GRAY_BLACK,
  },
  icon: {
    height: 22,
    width: 22,
    marginHorizontal: 5,
  },
  forgotPassTxt: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 15,
    color: '#1975EE',
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
});
