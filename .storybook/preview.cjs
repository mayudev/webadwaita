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
    dark: { ...themes.dark, appBg: "#303030", appContentBg: "#242424" },
    light: { ...themes.normal, appBg: "#ebebeb", appContentBg: "#fafafa" },
    darkClass: "adw-dark",
    lightClass: "adw-default",
    stylePreview: true,
  },
};
