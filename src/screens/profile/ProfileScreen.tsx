import {
  Divider,
  Icon,
  IconElement,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ImageStyle, StyleSheet } from "react-native";

import { AppSafeAreaLayout } from "../../components/safe-area-layout.component";
import { ContentView } from "./profile-6";
import React from "react";

export const Profile6Screen = ({ navigation }): React.ReactElement => {
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={(style: ImageStyle): IconElement => (
        <Icon {...style} name="arrow-ios-back" />
      )}
      onPress={navigation.goBack}
    />
  );
  return (
    <AppSafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title="Profile" accessoryLeft={renderBackAction} />
      <Divider />
      <ContentView navigation={navigation} />
    </AppSafeAreaLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
