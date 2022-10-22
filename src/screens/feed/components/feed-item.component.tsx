import {
  Avatar,
  Button,
  Icon,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { Div, Image } from "react-native-magnus";
import { TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";
interface IFProps {
  name?: string;
  body?: string;
  bodyImage?: any;
  follow?: boolean;
  avatar?: string;
}
const FeedItem: React.FC<IFProps> = ({
  name,
  avatar,
  body,
  bodyImage,
  follow = true,
}) => {
  const styles = useStyleSheet(themedStyle);
  const navigation = useNavigation();
  return (
    <View style={styles.listContent}>
      <TouchableOpacity onPress={() => {}}>
        <Div row justifyContent="space-between">
          <Div row>
            <Avatar source={{ uri: avatar }} />
            <Div ml={10}>
              <Text style={{ fontWeight: "700" }} category="s1">
                {name}
              </Text>
              <Text category="label">5min ago</Text>
            </Div>
          </Div>
          {follow && (
            <Button size="small" appearance="ghost">
              Follow
            </Button>
          )}
        </Div>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Div mt={10}>
          <Text category="s2">{body}</Text>
        </Div>
        <Div>
          <Image
            minH={200}
            w={"100%"}
            mt={10}
            rounded={5}
            source={{
              uri: bodyImage,
            }}
          />
        </Div>
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
      </TouchableOpacity>
    </View>
  );
};
export default FeedItem;
const themedStyle = StyleService.create({
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
