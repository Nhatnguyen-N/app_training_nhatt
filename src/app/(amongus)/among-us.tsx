import { globalStyles } from "@/src/assets/styles/GlobalStyle";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const AmongUs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", position: "absolute" }}>
        <View style={styles.body}>
          <View style={styles.face}></View>
        </View>
        <View style={styles.back}></View>
      </View>
      <View style={styles.containerFoot}>
        <View style={styles.footLeft}></View>
        <View style={styles.footLeft}></View>
      </View>
    </SafeAreaView>
  );
};

export default AmongUs;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: "center",
    justifyContent: "center",
  },
  face: {
    backgroundColor: "gray",
    width: width * 0.35,
    height: 53,
    marginTop: 60,
    borderWidth: 6,
    borderRadius: 50,
    marginRight: 60,
  },
  body: {
    backgroundColor: "red",
    width: width * 0.45,
    height: height * 0.28,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderTopWidth: 7,
    borderRightWidth: 7,
    borderLeftWidth: 7,
    // borderBottomWidth: 5,
    alignItems: "center",
  },
  back: {
    width: 25,
    height: height * 0.12,
    backgroundColor: "red",
    top: 75,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderBottomWidth: 7,
  },
  containerFoot: {
    // marginTop: 10,
    flexDirection: "row",
    width: width * 0.45,
    justifyContent: "space-between",
    position: "absolute",
    top: 505,
    right: 116,
  },
  footLeft: {
    width: width * 0.15,
    height: height * 0.07,
    backgroundColor: "red",
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 7,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
