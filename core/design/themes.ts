import { colors, bestContrast } from "./colors";
export const themes = {
  light: {
    colors: {
      primary: colors.orange.main,
      secondary: colors.purple.dark,
      success: colors.green.main,
      danger: colors.red.dark,
      warning: colors.orange.lighter,
      info: colors.blue.dark
    },
    background: colors.white.main,
    cardBackground: colors.white.main,
    textColor: colors.black.main,
    invertedTextColor: colors.white.main
  },
  dark: {
    colors: {
      primary: colors.purple.main,
      secondary: colors.orange.light,
      success: colors.green.main,
      danger: colors.red.dark,
      warning: colors.orange.lighter,
      info: colors.blue.dark
    },
    background: colors.black.light,
    cardBackground: colors.black.lighter,
    textColor: colors.white.main,
    invertedTextColor: colors.black.main
  }
};
export type ThemeColors = keyof typeof themes.dark.colors;
export const findBestContrast = (withColor: ThemeColors, theme: typeof themes.dark): string => {
  const baseColor = theme.colors[withColor];
  const themeColors = Object.values(theme.colors);
  return bestContrast(baseColor, ...themeColors);
};
