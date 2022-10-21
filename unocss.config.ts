import {
  defineConfig,
  presetTypography,
  presetWind,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {},
  presets: [
    presetWind(), // required
    presetTypography(),
    presetWebFonts({
      // Google Fonts by default. Use Bunny for privacy-friendly reasons
      provider: "bunny",
      fonts: {
        mont: "Montserrat:300,400,500,600,700,900",
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
