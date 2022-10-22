import { Avatar, Icon, Input, List } from "@ui-kitten/components";
import { Div, Text } from "react-native-magnus";

import { AppSafeAreaLayout } from "../../components/safe-area-layout.component";
import FeedItem from "./components/feed-item.component";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import offers_story_svg from "../../assets/svg/offers_story_svg";

const stories = [
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
  {
    image: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg",
    title: "Jon Dose",
  },
  {
    image: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg",
  },
  {
    image: "https://i.ibb.co/NVRDQ96/image-style-1.jpg",
  },
];
const FeedScreen = (): React.ReactElement => {
  return (
    <AppSafeAreaLayout style={styles.container} insets="top">
      <Div
        px={16}
        py={10}
        row
        alignItems="center"
        justifyContent="space-between"
      >
        <Div row alignItems="center">
          <SvgXml xml={offers_story_svg} height={30} width={30} />
          <Text color="primary" fontSize={16} fontWeight={"500"}>
            Offer Story
          </Text>
        </Div>
        <Div row justifyContent="space-between" alignItems="center">
          <Div mr={10}>
            <Icon
              fill="#8F9BB3"
              name="search-outline"
              style={{ height: 24, width: 24 }}
            />
          </Div>
          <Div mr={10}>
            <Icon
              fill="#8F9BB3"
              name="message-circle-outline"
              style={{ height: 24, width: 24 }}
            />
          </Div>
          <Div>
            <Icon
              fill="#8F9BB3"
              name="bell-outline"
              style={{ height: 24, width: 24 }}
            />
          </Div>
        </Div>
      </Div>
      <ScrollView>
        <Div px={6} py={10} row>
          <List
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={stories}
            style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
            horizontal={true}
            renderItem={({ item, index }: any) => (
              <Div mx={10}>
                <Avatar
                  style={{ borderWidth: 2, borderColor: "#3366FF" }}
                  size="large"
                  source={{ uri: item.image }}
                />
                {/* <Text category="label">{item.title}</Text> */}
              </Div>
            )}
          />
        </Div>
        <FeedItem
          name="Jon Doe"
          avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
          body={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
          }
          bodyImage="https://images.unsplash.com/photo-1658855216762-1dac75de591c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <FeedItem
          name="Mickey"
          avatar="https://i.ibb.co/JzL7BPL/image-profile-3.jpg					"
          body={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
          }
          bodyImage="https://images.unsplash.com/photo-1658868681174-9822268efa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        <FeedItem
          name="Emily"
          avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
          body={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
          }
          bodyImage="https://images.unsplash.com/photo-1658761635388-156ce5cfd807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        />
        <FeedItem
          name="Jon Doe"
          avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
          body={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
          }
          bodyImage="https://images.unsplash.com/photo-1654584240523-6b8d3f6c33b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=80"
        />
        <FeedItem
          name="Jon Doe"
          avatar="https://i.ibb.co/NVRDQ96/image-style-1.jpg"
          body={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
          }
          bodyImage="https://images.unsplash.com/photo-1658786364932-7e3bf5be2bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </ScrollView>
    </AppSafeAreaLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FeedScreen;
