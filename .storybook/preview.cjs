import { themes } from "@storybook/theming";

const create = (theme) => {
  return {
    ...theme,
    brandImage:
      "https://gitlab.gnome.org/uploads/-/system/project/avatar/14079/libadwaita.png?width=32",
  };
};

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
    dark: {
      ...create(themes.dark),
      appBg: "#303030",
      appContentBg: "#242424",
    },
    light: {
      ...create(themes.normal),
      appBg: "#ebebeb",
      appContentBg: "#fafafa",
    },
    darkClass: "adw-dark",
    lightClass: "adw-default",
    stylePreview: true,
  },
};
