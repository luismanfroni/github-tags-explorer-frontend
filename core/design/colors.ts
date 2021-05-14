import { tint, shade, getContrast } from "polished";

const BASE_COLORS = {
  purple: {
    main: "#673AB7"
  },
  orange: {
    main: "#FF9800"
  },
  red: {
    main: "#AD343E"
  },
  blue: {
    main: "#0496FF"
  },
  green: {
    main: "#659B5E"
  },
  grey: {
    main: "#9E9E9E"
  },
  white: {
    main: "#F8F8F8"
  },
  black: {
    main: "#262626"
  }
};
type ColorsContent = {
  darker: string;
  dark: string;
  main: string;
  light: string;
  lighter: string;
};
type ColorsObject = { [key in keyof typeof BASE_COLORS]: ColorsContent };

function generateColors(base: typeof BASE_COLORS): ColorsObject {
  const colors = Object.entries(base);
  return Object.fromEntries(
    colors.map(([color, { main }]): [string, ColorsContent] => {
      return [
        color,
        {
          darker: shade(0.3, main),
          dark: shade(0.1, main),
          main,
          light: tint(0.1, main),
          lighter: tint(0.3, main)
        }
      ];
    })
  ) as ColorsObject;
}

export const colors: ColorsObject = generateColors(BASE_COLORS);
export const bestContrast = (baseColor: string, ...colors: string[]): string => {
  const bestColorContrast = colors.reduce((prevColor, currentColor) => {
    const contrastPrev = getContrast(baseColor, prevColor);
    const contrastCurrent = getContrast(baseColor, currentColor);
    return contrastPrev >= contrastCurrent ? prevColor : currentColor;
  });
  return bestColorContrast;
};
export type Colors = keyof typeof BASE_COLORS;
export type ColorKind = keyof ColorsContent;
