import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Icon} from '@ui-kitten/components';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BackIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="arrow-ios-back-outline" fill="#2C3A42" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
