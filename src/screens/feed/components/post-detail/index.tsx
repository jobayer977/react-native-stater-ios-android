import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { ImageBackground, Platform, TouchableOpacity } from "react-native";

import { Article } from "./extra/data";
import { CommentList } from "./extra/comment-list.component";
import { Div } from "react-native-magnus";
import { KeyboardAvoidingView } from "./extra/keyboard-avoiding-view.component";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const data: Article = Article.howToEatHealthy();

const keyboardOffset = (height: number) =>
  Platform.select({
    android: 0,
    ios: height,
  });

export const PostDetails = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [inputComment, setInputComment] = React.useState<string>();
  const navigation = useNavigation();

  const renderCommentsLabel = React.useCallback(
    (evaProps) => (
      <Text {...evaProps} style={styles.commentInputLabel}>
        Comments
      </Text>
    ),
    []
  );

  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header} level="1">
      <TouchableOpacity onPress={() => {}}>
        <Div row justifyContent="space-between" px={16}>
          <Div row>
            <Avatar
              source={{ uri: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg" }}
            />
            <Div ml={10}>
              <Text style={{ fontWeight: "700" }} category="s1">
                Jon Doe
              </Text>
              <Text category="label">5min ago</Text>
            </Div>
          </Div>
          <Button size="small" appearance="ghost">
            Follow
          </Button>
        </Div>
      </TouchableOpacity>
      <Text style={styles.descriptionLabel} category="s1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus
        dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui
        quibusdam facere culpa cupiditate quisquam consectetur. Corrupti
        perspiciatis accusamus voluptas cum repellendus quia!
      </Text>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        }}
      />
      <Text style={styles.contentLabel}>{data.content}</Text>
      <Div row justifyContent="space-between">
        <Button
          appearance="ghost"
          accessoryLeft={
            <Icon style={{ paddingLeft: 0 }} name="heart-outline" />
          }
        >
          132
        </Button>
        <Button
          appearance="ghost"
          accessoryLeft={
            <Icon style={{ paddingLeft: 0 }} name="message-circle-outline" />
          }
        >
          321
        </Button>
        <Button
          appearance="ghost"
          accessoryLeft={
            <Icon style={{ paddingLeft: 0 }} name="share-outline" />
          }
        >
          322
        </Button>
      </Div>
      <Input
        style={styles.commentInput}
        label={renderCommentsLabel}
        placeholder="Write your comment"
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView style={styles.container} offset={keyboardOffset}>
      <CommentList
        style={styles.list}
        data={data.comments}
        ListHeaderComponent={renderHeader()}
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 240,
  },
  titleLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  dateLabel: {
    marginHorizontal: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "text-basic-color",
  },
  commentInput: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 20,
  },
});
