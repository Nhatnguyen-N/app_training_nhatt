import images from "@/src/constants/images";
import { resetAndNavigate } from "@/src/utils/Helpers";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default function Main() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasNavigated, setHasNavigated] = useState(false);
  // const animOpacity = useSharedValue(0);
  const translateY = useSharedValue(-1000);
  const scale = useSharedValue(0.5);
  useEffect(() => {
    if (!hasNavigated) {
      const timeOutId = setTimeout(() => {
        resetAndNavigate("/(index)/home");
      }, 3500);
      return () => clearTimeout(timeOutId);
    }
  }, [hasNavigated]);
  // useEffect(() => {
  //   animOpacity.value = withTiming(1, {
  //     duration: 1000,
  //     easing: Easing.inOut(Easing.ease),
  //   });
  // }, []);
  useEffect(() => {
    translateY.value = withSequence(
      withTiming(500, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      }),
      withSpring(0, {
        damping: 5,
        stiffness: 100,
      })
    );
    scale.value = withSequence(
      withTiming(1.2, { duration: 300 }),
      withSpring(1, { damping: 3, stiffness: 100 })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const animatedStyle = useAnimatedStyle(() => ({
  //   opacity: animOpacity.value,
  // }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container]}>
      <Animated.Image
        style={[styles.img, animatedStyle2]}
        source={images.logo}
      />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  img: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.3,
  },
});
