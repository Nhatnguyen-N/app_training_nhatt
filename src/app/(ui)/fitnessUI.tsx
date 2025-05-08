import {
  colorsFeedback,
  fontFamilies,
  typography,
} from "@/src/assets/styles/GlobalStyle";
import images from "@/src/constants/images";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("screen");
const iconLibraryMap = {
  like2: {
    component: AntDesign,
    name: "like2",
  },
  dribbble: {
    component: AntDesign,
    name: "dribbble",
  },
  "angle-double-up": {
    component: FontAwesome,
    name: "angle-double-up",
  },
  notification: {
    component: AntDesign,
    name: "notification",
  },
} as const;

type IconType = keyof typeof iconLibraryMap;

interface ItemType {
  title: string;
  subtitle: string;
  isActive: boolean;
  icon: IconType;
}
const items: ItemType[] = [
  {
    title: "Lift Weights",
    subtitle: "Lorem Ipsum",
    isActive: false,
    icon: "dribbble",
  },
  {
    title: "Boost Your Cardio Endurance",
    subtitle: "Lorem Ipsum",
    isActive: false,
    icon: "like2",
  },
  {
    title: "Lift Weights",
    subtitle: "Lorem Ipsum",
    isActive: false,
    icon: "angle-double-up",
  },
  {
    title: "Boost Your Cardio Endurance",
    subtitle: "Lorem Ipsum",
    isActive: false,
    icon: "notification",
  },
];

const FitnessUI = () => {
  const [value, setValue] = useState<number>();

  const IconRenderer = ({
    icon,
    color,
    size,
  }: {
    icon: IconType;
    color: string;
    size: number;
  }) => {
    const { component: IconComponent, name } = iconLibraryMap[icon];
    if (IconComponent === AntDesign) {
      return (
        <AntDesign
          name={name as React.ComponentProps<typeof AntDesign>["name"]}
          color={color}
          size={size}
        />
      );
    }
    return (
      <FontAwesome
        name={name as React.ComponentProps<typeof FontAwesome>["name"]}
        color={color}
        size={size}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <Image
        source={images.background}
        resizeMode="cover"
        style={styles.background}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          What is the mail goal you&apos;re trying to achueve?
        </Text>
        {items.map((item: ItemType, index) => {
          const isActive = index === value;
          return (
            <TouchableOpacity
              onPress={() => setValue(index)}
              key={index}
              style={[isActive && styles.radioActive, styles.radio]}
            >
              <View style={styles.radioIcon}>
                <IconRenderer size={24} icon={item.icon} color="white" />
              </View>
              <View style={styles.radioBody}>
                <Text style={styles.radioTitle}>{item.title}</Text>
                <Text style={styles.radioSubtitle}>{item.subtitle}</Text>
              </View>
              {isActive && (
                <View style={[styles.radioCheck, styles.radioCheckActive]}>
                  <AntDesign name="check" size={24} color="white" />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FitnessUI;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  content: {
    marginTop: "auto",
    alignSelf: "stretch",
    paddingHorizontal: 14,
  },
  title: {
    ...typography.h1,
    color: colorsFeedback.white,
    marginBottom: 12,
    paddingRight: 40,
  },
  radio: {
    position: "relative",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  radioActive: {
    backgroundColor: "rgba(255,255,255,0.13)",
  },
  radioTitle: {
    ...typography.body,
    color: colorsFeedback.white,
    marginBottom: 2,
    fontFamily: fontFamilies.bold,
  },
  radioIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colorsFeedback.black,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  radioBody: {
    padding: 2,
  },
  radioSubtitle: {
    ...typography.caption,
    color: "#878787",
    fontFamily: fontFamilies.bold,
  },
  radioCheck: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    marginLeft: "auto",
    display: "none",
  },
  radioCheckActive: {
    display: "flex",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#007bff",
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: colorsFeedback.white,
  },
});
