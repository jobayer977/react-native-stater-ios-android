import { Animated, ViewStyle } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  Icon,
  StyleService,
} from "@ui-kitten/components";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const useVisibilityAnimation = (visible: boolean): ViewStyle => {
  const animation = React.useRef<Animated.Value>(
    new Animated.Value(visible ? 1 : 0)
  );
  React.useEffect(() => {
    Animated.timing(animation.current, {
      duration: 200,
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [visible]);
  return {
    transform: [
      {
        // @ts-ignore
        translateY: animation.current.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
    // position: visible ? null : "absolute",
  };
};
export const HomeBottomNavigation: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const focusedRoute = state.routes[state.index];
  const { tabBarVisible } = descriptors[focusedRoute.key].options;
  const safeAreaInsets = useSafeAreaInsets();
  const transforms = useVisibilityAnimation(true);
  const onSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <Animated.View
      style={[
        styles.container,
        transforms,
        // { paddingBottom: tabBarVisible ? safeAreaInsets.bottom : 0 },
      ]}
    >
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={onSelect}
      >
        <BottomNavigationTab
          icon={(props) => <Icon name="browser-outline" {...props} />}
        />
        <BottomNavigationTab
          icon={(props) => <Icon name="people-outline" {...props} />}
        />
        <BottomNavigationTab
          icon={(props) => <Icon name="play-circle-outline" {...props} />}
        />
        <BottomNavigationTab
          icon={(props) => <Icon name="menu-outline" {...props} />}
        />
      </BottomNavigation>
    </Animated.View>
  );
};
const styles = StyleService.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
