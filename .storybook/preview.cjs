import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "html",
    dark: { ...themes.dark, appBg: "black" },
    light: { ...themes.normal, appBg: "white" },
    darkClass: "adw-dark",
    lightClass: "adw-default",
    stylePreview: true,
  },
};
