import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export const config = defineConfig({
  presets: [presetTailwind({}), presetAutoprefix()],
  theme: {
    extend: {
      colors: {
        "fg-default": "#1f2328",
        "accent-fg": "#0969da",
        "fg-muted": "#656d76",
        "border-default": "#d0d7de",
        "canvas-subtle": "#f6f8fa",
        "canvas-default": "#ffffff",
        "border-mute": "#d8dee4",
        "border-active": "#f78166",
        "open-fg": "#3fb950",
        "btn-text": "#24292f",
        "btn-border": "#1f232826",
        "btn-bg": "#f6f8fa",
        "page-header-bg": "#f6f8fa",
      },
    },
  },
});
