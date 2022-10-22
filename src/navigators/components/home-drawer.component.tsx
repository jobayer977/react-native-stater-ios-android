import {
  Divider,
  Drawer,
  DrawerElement,
  DrawerItem,
  IndexPath,
  Layout,
  Text,
} from "@ui-kitten/components";
import React, { ReactElement, useState } from "react";
import { StyleSheet, View } from "react-native";

import { SafeAreaLayout } from "../components/safe-area-layout.component";

export const HomeDrawer = ({ navigation }): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null);
  const DATA = [
    {
      title: "Libraries",
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate("Libraries");
      },
    },
    {
      title: "Documentation",
      onPress: () => {
        navigation.toggleDrawer();
      },
    },
  ];
  const renderHeader = (): ReactElement => (
    <SafeAreaLayout insets="top" level="2">
      <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          {/* <Avatar
            size="giant"
            source={require("../../assets/images/image-app-icon.png")}
          /> */}
          <Text style={styles.profileName} category="h6">
            Kitten Tricks
          </Text>
        </View>
      </Layout>
    </SafeAreaLayout>
  );
  const renderFooter = () => (
    <SafeAreaLayout insets="bottom">
      <React.Fragment>
        <Divider />
        <View style={styles.footer} />
      </React.Fragment>
    </SafeAreaLayout>
  );
  return (
    <Drawer
      header={renderHeader}
      footer={renderFooter}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {DATA.map((el, index) => (
        <DrawerItem key={index} title={el.title} onPress={el.onPress} />
      ))}
    </Drawer>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    marginHorizontal: 16,
  },
});
