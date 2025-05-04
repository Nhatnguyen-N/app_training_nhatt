import {
  colors,
  FONTS,
  globalStyles,
  TEXTSIZE,
} from "@/src/assets/styles/GlobalStyle";
import ItemIndex from "@/src/components/ItemIndex/ItemIndex";
import { ScreenList } from "@/src/constants/link-screen";
import { ScreenType } from "@/src/types/screen";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  const renderTodoItem = ({ item }: { item: ScreenType }) => {
    return <ItemIndex item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Dash Board</Text>
      <FlatList
        data={ScreenList}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 10,
    backgroundColor: colors.light,
  },
  text: {
    fontSize: TEXTSIZE["3xl"],
    fontFamily: FONTS.rubikBold,
    textAlign: "center",
    marginBottom: 15,
  },
});
