import { Div, Text } from "react-native-magnus";
import { FlatList, StyleSheet } from "react-native";

import { AppPreferences } from "../../app/app_prefs";
import React from "react";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import splash_hero_svg from "../../assets/svg/splash_hero_svg";
import splash_next_black_svg from "../../assets/svg/splash_next_black_svg";
import splash_next_light_svg from "../../assets/svg/splash_next_light_svg";
import splash_svg from "../../assets/svg/splash_svg";
import { useNavigation } from "@react-navigation/native";
const SplashScreen = () => {
  const appPref = AppPreferences.getInstance();
  const navigator = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref: any = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(
      contentOffsetX / AppPreferences.getInstance().windowWidth
    );
    setCurrentSlideIndex(currentIndex);
  };
  const slides = [
    {
      title: "Socially",
      subTitle: "A new way to manage your life",
      image: splash_hero_svg,
      nextImage: splash_next_black_svg,
      onNext: async () => {
        ref?.current?.scrollToIndex({ index: 1, animated: true });
      },
    },
    {
      title: "Socially",
      subTitle: "A new way to manage your life",
      image: splash_hero_svg,
      nextImage: splash_next_light_svg,
      onNext: async () => {
        await AppPreferences.getInstance().setLocalDate(
          "ONBOARDING_COMPLETED",
          true
        );
        navigator.navigate("home");
      },
    },
  ];
  return (
    <Div>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          height: AppPreferences.getInstance().windowHeight,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => (
          <Div
            style={{
              width: AppPreferences.getInstance().windowWidth,
              height: appPref.windowHeight,
            }}
          >
            <Div position="absolute" h={"100%"} w={"100%"} top={-50} left={0}>
              <SvgXml
                xml={splash_svg}
                height={appPref.windowHeight}
                width={appPref.windowWidth}
              />
            </Div>
            <Div h="100%" w="100%" alignItems="center" mt={80}>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Div mt={30}>
                <SvgXml xml={item.image} />
              </Div>
            </Div>
            <Div position="absolute" right={0} bottom={0}>
              <TouchableOpacity onPress={item?.onNext}>
                <SvgXml xml={item.nextImage} />
              </TouchableOpacity>
            </Div>
          </Div>
        )}
      />
    </Div>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  subTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#4E4E4E",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 39,
    lineHeight: 58,
    color: "#000000",
  },
});
