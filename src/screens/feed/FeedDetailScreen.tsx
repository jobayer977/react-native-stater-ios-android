import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";

import { AppSafeAreaLayout } from "../../components/safe-area-layout.component";
import { PostDetails } from "./components/post-detail";
import React from "react";
import { StyleSheet } from "react-native";

const PostDetailsScreen = ({ navigation }): React.ReactElement => {
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction onPress={navigation.goBack} />
  );

  return (
    <AppSafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title="" accessoryLeft={renderBackAction} />
      <PostDetails />
    </AppSafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostDetailsScreen;
