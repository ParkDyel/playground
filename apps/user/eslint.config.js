import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default {
  ...nextJsConfig,
  rules: {
    ...nextJsConfig.rules,
    "indent": ["error", 2],
  },
  settings:{
    "better-tailwindcss": {
      entryPoint: "app/global.css",
    },
  }
};
