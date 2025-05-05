import { globalStyles, TEXTSIZE } from "@/src/assets/styles/GlobalStyle";
import React, { useRef, useState } from "react";
import {
  Alert,
  Animated,
  Button,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ANIMATION_CONFIG = {
  duration: 1000,
  useNativeDriver: true,
};
const AnimationTutorial = () => {
  const fadeAnim = useAnimatedValue(1);
  const posX = useRef(new Animated.Value(0)).current;
  const posY = useRef(new Animated.Value(0)).current;
  const rotateAim = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<Animated.CompositeAnimation | null>(null); // Tham chiếu đến animation
  const animationRef_2 = useRef<Animated.CompositeAnimation | null>(null); // Tham chiếu đến animation

  const startRotateAnimation = () => {
    if (animationRef_2.current) {
      animationRef_2.current.stop();
      animationRef_2.current = null;
    }
    rotateAim.setValue(0);
    animationRef_2.current = Animated.timing(rotateAim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
    animationRef_2.current.start(({ finished }) => {
      if (finished) {
        startRotateAnimation();
      }
    });
  };
  const startSquareAnimation = () => {
    // Dừng animation hiện tại nếu có
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null;
    }

    posX.setValue(0);
    posY.setValue(0);

    const moveRight = Animated.timing(posX, {
      ...ANIMATION_CONFIG,
      toValue: 55,
      easing: Easing.inOut(Easing.ease),
    });

    const moveDown = Animated.timing(posY, {
      ...ANIMATION_CONFIG,
      toValue: 0,
      easing: Easing.in(Easing.ease),
    });

    const moveLeft = Animated.timing(posX, {
      ...ANIMATION_CONFIG,
      toValue: -55,
      easing: Easing.inOut(Easing.ease),
    });

    const moveLeft_2 = Animated.timing(posX, {
      ...ANIMATION_CONFIG,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    });

    const moveUp = Animated.timing(posY, {
      ...ANIMATION_CONFIG,
      toValue: -110,
      easing: Easing.out(Easing.ease),
    });
    // Tạo sequence và lưu vào ref
    animationRef.current = Animated.sequence([
      moveLeft,
      moveUp,
      moveRight,
      moveDown,
      moveLeft_2,
    ]);
    animationRef.current.start(({ finished }) => {
      if (finished) {
        startSquareAnimation();
      }
    });
  };
  const rotateInterpolate = rotateAim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const toggleAnimation = () => {
    if (isAnimating) {
      // Dừng animation
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current = null;
      }
      if (animationRef_2.current) {
        animationRef_2.current.stop();
        animationRef_2.current = null;
      }
      setIsAnimating(false);
    } else {
      // Bắt đầu animation
      startSquareAnimation();
      startRotateAnimation();
      setIsAnimating(true);
    }
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      return Alert.alert("success", "Your Animation Success");
    });
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      return Alert.alert("success", "Your Animation Success");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.transAnimContainer}>
        <TouchableOpacity onPress={toggleAnimation} style={styles.button}>
          <View style={styles.butotnContent} />
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.transContainer,
            {
              transform: [
                { rotate: rotateInterpolate },
                { translateX: posX },
                { translateY: posY },
              ],
            },
          ]}
        />
      </View>
      <Animated.View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          transform: [{ rotate: rotateInterpolate }],
        }}
      />
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

export default AnimationTutorial;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: "center",
    justifyContent: "center",
  },
  transAnimContainer: {
    // width: 400,
    // height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  transContainer: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    // position: "absolute",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: TEXTSIZE.lg,
  },
  button: {
    width: 60,
    height: 60,
    padding: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    // marginBottom: 10,
  },
  butotnContent: {
    width: 20,
    height: 20,
    backgroundColor: "white",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
