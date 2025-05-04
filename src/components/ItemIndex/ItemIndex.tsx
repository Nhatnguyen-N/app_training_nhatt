import {
  colors,
  FONTS,
  globalStyles,
  TEXTSIZE,
} from "@/src/assets/styles/GlobalStyle";
import { ScreenType } from "@/src/types/screen";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ItemIndex = ({ item }: { item: ScreenType }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(item.link)}
      style={styles.container}
    >
      <Text style={styles.text}>{item.name}</Text>
      <AntDesign name="arrowright" size={32} color={colors.dark} />
    </TouchableOpacity>
  );
};

export default ItemIndex;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: colors.primary,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.rubikMedium,
    fontSize: TEXTSIZE.xl,
    ...globalStyles.text,
  },
});
