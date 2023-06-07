import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export const config = defineConfig({
  presets: [presetTailwind({}), presetAutoprefix()],
  theme: {
    extend: {
      colors: {
        "fg-default": "#e6edf3",
        "accent-fg": "#2f81f7",
        "fg-muted": "#7d8590",
        "border-default": "#30363d",
        "canvas-subtle": "#161b22",
        "border-mute": "#21262d",
        "border-active": "#f78166",
        "open-fg": "#3fb950",
      },
    },
  },
});
