/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  custom: {
    ultraDarkBlue: "#0B132B",
    darkBlue: "#1C2541",
    lightBlue: "#5BC0BE",
    ultraLightBlue: "#98D7D6",
    primary_font: "beige",

    background_primary: "#3A506B",
    background_secondary: "#1C2541",
    font_primary: "#5BC0BE",
    font_secondary: "beige",
    button_primary: "#98D7D6",
    button_secondary: "beige",
  },
  custom_two: {
    background_primary: "#38618C",
    background_Secondary: "#35A7FF",
    font_primary: "#FFFFFF",
    font_secondary: "#FF5964",
    button_primary: "#FFE74C",
    button_secondary: "beige",
  },
};



export const Mode = [
  {
    background_primary: "#3A506B", // dark blue
    background_secondary: "#1C2541", //darker blue
    font_primary: "#5BC0BE", //turquoise 
    font_secondary: "beige",
    button_primary: "#98D7D6", // light turquoise
    button_secondary: "beige",
    border_color: "black",
  },
  {
    background_primary: "#FF5964", // red
    background_secondary: "#35A7FF", // light blue
    font_primary: "#FFFFFF", // white
    //font_primary: "#FFE74C", //yellow
    font_secondary: "#FF5964", // red
    button_primary: "#38618C", // dark blue
    button_secondary: "beige",
    border_color: "black",
  },
  {
    background_primary: "#EDE7B1", //pastel yellow
    background_secondary: "#E4C1F9", //pastel purple
    font_primary: "#F694C1", //pastel pink
    font_secondary: "#D3F8E2", // pastel green
    button_primary: "#A9DEF9", //pastel blue
    button_secondary: "beige",
    border_color: "black",
  },
];