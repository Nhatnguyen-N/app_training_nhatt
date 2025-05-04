import { StyleSheet } from "react-native"

export const colors = {
  primary: "#CDD5AE",
  secondary: '#E9EDCA',
  light: '#FEF9E1',
  light_2: "#FAEDCD",
  dark: '#d3a373'
}
export const FONTS = {
  regular: "Rubik-Regular",
  rubikBold: "Rubik-Bold",
  rubikExtraBold: "Rubik-ExtraBold",
  rubikLight: "Rubik-Light",
  rubikMedium: "Rubik-Medium",
  rubikSemiBold: "Rubik-SemiBold"
}
export const TEXTSIZE = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.dark
  }
})