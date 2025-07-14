import type { Config } from "tailwindcss";

const config: Pick<Config, 'presets' | 'prefix'> = {
  prefix: 'ui-',
};

export default config;