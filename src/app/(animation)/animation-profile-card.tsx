import { colors, FONTS, globalStyles } from "@/src/assets/styles/GlobalStyle";
import images from "@/src/constants/images";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimationProfileCard = () => {
  const [expanded, setExpended] = useState(true);
  const anim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const toggleExpand = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(anim, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(colorAnim, {
      toValue,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setExpended(!expanded);
  };
  const heightInterpolate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 250],
  });
  const rotateInterpolate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const backgroundColorInterpolate = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", colors.secondary],
  });
  return (
    <SafeAreaView style={{ ...globalStyles.container }}>
      <Animated.View
        style={[
          styles.card,
          {
            height: heightInterpolate,
            backgroundColor: backgroundColorInterpolate,
          },
        ]}
      >
        <TouchableOpacity onPress={toggleExpand} activeOpacity={0.9}>
          <View style={styles.header}>
            <Image source={images.avatar} style={styles.avatar} />
            <View style={styles.headerText}>
              <Text style={styles.name}>Nhat Owl</Text>
              <Text style={styles.title}>Moblie Developerr</Text>
            </View>
            <Animated.View
              style={{ transform: [{ rotate: rotateInterpolate }] }}
            >
              <Text style={styles.arrow}>🔻</Text>
            </Animated.View>
          </View>
          {expanded && (
            <View style={styles.content}>
              <Text style={styles.bio}>I&apos;m a Moblie Developer</Text>
              <View style={styles.contactInfo}>
                <Text style={styles.contactText}>
                  📧 nhatnguyen13213@gmail.com
                </Text>
                <Text style={styles.contactText}>📞 0987654321</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </Animated.View>
      <View style={{ ...globalStyles.container }}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false } // <-- Đảm bảo có dòng này
          )}
        >
          <Animated.View
            style={[
              styles.header2,
              {
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, 300],
                      outputRange: [0, -100],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <Image source={images.newYork} style={styles.headerImage} />
          </Animated.View>
          <View style={styles.content2}>
            {[...Array(200)].map((_, i) => (
              <Text key={i}>Item {i}</Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AnimationProfileCard;

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  content: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  bio: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: FONTS.regular,
  },
  contactInfo: { marginTop: 10 },
  contactText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    fontFamily: FONTS.regular,
  },
  header: { flexDirection: "row", alignItems: "center" },
  avatar: {
    width: 60,
    height: 60,
    // borderRadius: 30,
    marginRight: 15,
  },
  headerText: { flex: 1 },
  name: { fontSize: 18, fontFamily: FONTS.rubikBold, color: colors.dark },
  title: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    fontFamily: FONTS.regular,
  },
  arrow: { fontSize: 20 },
  headerImage: { height: "100%", width: "100%", resizeMode: "cover" },
  content2: { padding: 20, backgroundColor: "white" },
  header2: { height: 300, overflow: "hidden" },
});
