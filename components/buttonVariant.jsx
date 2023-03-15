import { ThemeProvider, theme } from "@reusejs/react";

const buttonTheme = {
  ...theme,
  variants: {},
};

const variants = {
  indigo: {
    buttonBaseClasses: {
      backgroundColor: "bg-indigo-600",
      padding:"py-2 px-4",
      font:"h-fit w-fit mt-4"

    },
  },
  blue: {
    buttonBaseClasses: {
        backgroundColor: "bg-blue-600",
      },
  },
  green: {
    buttonBaseClasses: {
        backgroundColor: "bg-green-200",
      },
  },
};

buttonTheme["variants"] = variants;

export default buttonTheme;
