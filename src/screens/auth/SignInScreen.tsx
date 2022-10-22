import {
  Button,
  Icon,
  IconElement,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { Div, Image } from "react-native-magnus";
import React, { ReactElement } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import { KeyboardAvoidingView } from "../../components/KeyboardAvoidingView";
import { SvgXml } from "react-native-svg";
import offers_story_svg from "../../assets/svg/offers_story_svg";

export const SignInScreen = ({ navigation }): React.ReactElement => {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const styles = useStyleSheet(themedStyles);
  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate("SignUp2");
  };
  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate("ForgotPassword");
  };
  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };
  const renderPasswordIcon = (props): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          <Div rounded={50} h={50} w={50}>
            <SvgXml xml={offers_story_svg} height={50} width={50} />
          </Div>
        </Text>
        <Text style={styles.signInLabel} category="s1" status="primary">
          Offer Story
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Email"
          accessoryRight={(style: any): IconElement => (
            <Icon {...style} name="person" />
          )}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder="Password"
          accessoryRight={renderPasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button style={styles.signInButton} size="giant">
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}
      >
        Don't have an account? Create
      </Button>
    </KeyboardAvoidingView>
  );
};
const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "color-primary-00",
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
