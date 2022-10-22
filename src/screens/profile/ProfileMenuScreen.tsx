import {
  Avatar,
  Icon,
  IconElement,
  Layout,
  ListItem,
  StyleService,
  Text,
  Toggle,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import { ImageStyle, TouchableOpacity } from "react-native";

import { AppSafeAreaLayout } from "../../components/safe-area-layout.component";
import { Div } from "react-native-magnus";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ThemeContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const ProfileMenuScreen = () => {
  const navigation: any = useNavigation();
  const styles = useStyleSheet(themedStyles);
  const DATA = [
    {
      title: "My Orders",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="layers-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Favorites",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="heart-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Saved",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="bookmark-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "My Orders",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="layers-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Favorites",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="heart-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Saved",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="bookmark-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "My Orders",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="layers-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Favorites",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="heart-outline" />
      ),
      onPress: () => {},
    },
    {
      title: "Saved",
      icon: (style: ImageStyle): IconElement => (
        <Icon {...style} name="bookmark-outline" />
      ),
      onPress: () => {},
    },
  ];
  const themeContext = React.useContext(ThemeContext);
  return (
    <AppSafeAreaLayout style={styles.container} insets="top">
      <TopNavigation
        accessoryLeft={
          <Text
            category="h6"
            style={{ fontWeight: "bold", paddingHorizontal: 16 }}
          >
            My Profile
          </Text>
        }
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <Div row alignItems="center" mt={20} mb={30} px={16}>
            <Avatar
              size="giant"
              source={{ uri: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg" }}
            />
            <Div ml={16}>
              <Text style={styles.profileName} category="h6">
                Zain
              </Text>
              <Text category="s1">View your profile</Text>
            </Div>
          </Div>
        </TouchableOpacity>
        <Layout level="1">
          {DATA.map((item: any, i) => (
            <TouchableOpacity key={i}>
              <ListItem
                onPress={() => item.onPress()}
                style={{ paddingHorizontal: 16 }}
                title={`${item.title} `}
                accessoryLeft={item.icon}
                accessoryRight={(style): IconElement => (
                  <Icon {...style} name="chevron-right-outline" />
                )}
              />
            </TouchableOpacity>
          ))}
          <Toggle
            style={styles.evaToggle}
            checked={themeContext.theme === "dark"}
            onChange={themeContext.toggleTheme}
          >
            Dark Mode
          </Toggle>
        </Layout>
      </ScrollView>
    </AppSafeAreaLayout>
  );
};
export default ProfileMenuScreen;
const themedStyles = StyleService.create({
  bg: { backgroundColor: "background-basic-color-1" },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontWeight: "700",
  },
  listIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  listTitle: {
    fontWeight: "600",
    fontSize: 16,
  },
  evaToggle: {
    margin: 8,
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
});
