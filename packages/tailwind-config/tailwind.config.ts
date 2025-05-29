import type { Config } from "tailwindcss";

const primaryColor = {
  default: "#c094f6",
  dark: "#522281",
  50: "#faf6fe",
  100: "#f2e9fe",
  200: "#e7d7fd",
  300: "#d5b8fa",
  400: "#c094f6",
  500: "#a15eee",
  600: "#8a3de0",
  700: "#752cc4",
  800: "#6429a0",
  900: "#522281",
  950: "#360c5f",
};

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        text: {
          default: "#212529",
          light: "#e9ecef",
          dark: "#343a40",
          placeholder: "#adb5bd",
          disabled: "#ced4da",
        },
        bg: {
          default: "#ffffff",
          light: "#f8f9fa",
          dark: primaryColor.dark,
        },
        modal: {
          content: "#ffffff",
          overlay: "rgba(11,11,11,0.2)",
        },
      },
      zIndex: {
        modal: "100",
      },
    },
  },
  plugins: [],
};
export default config;