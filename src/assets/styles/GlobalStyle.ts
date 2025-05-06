import { StyleSheet } from "react-native";

export const colors = {
  primary: "#CDD5AE",
  secondary: '#E9EDCA',
  light: '#FEF9E1',
  light_2: "#FAEDCD",
  dark: '#d3a373'
}
export const colorsFeedback = {
  primary: "#3498db",
  secondary: "#2ecc71",
  accent: "#e74c3c",
  background: "#ecf0f1",
  surface: "#ffffff",
  textPrimary: "#2c3e50",
  textSecondary: "#95a5a6",
  border: "#dcdcdc",
  disabled: "#bdc3c7",
  error: "#e74c3c",
  warning: "#f39c12",
  info: "#3498db",
  success: "#2ecc71",
  lightGray: "#f5f5f5",
  gray: "#e0e0e0",
  darkGray: "#333333",
  white: "#ffffff",
  black: "#000000",
} as const;

export type Colors = typeof colorsFeedback;

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
export const fontFamilies = {
  regular: "Rubik-Regular",
  medium: "Rubik-Medium",
  bold: "Rubik-Bold",
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
} as const;

export const typography = {
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['3xl'],
  },
  h2: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['2xl'],
  },
  h3: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.xl,
  },
  body: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
  },
  bodyBold: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.md,
  },
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.sm,
  },
  button: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.md,
  },
} as const;

export type Typography = typeof typography;
export type FontFamily = typeof fontFamilies;
export type FontSize = typeof fontSizes;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.dark
  }
})