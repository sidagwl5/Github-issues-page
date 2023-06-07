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
        "canvas-default": "#ffffff",
        "border-mute": "#21262d",
        "border-active": "#f78166",
        "open-fg": "#3fb950",
        "btn-text": "#c9d1d9",
        "btn-border": "#f0f6fc1a",
        "btn-bg": "#21262d",
      },
    },
  },
});
