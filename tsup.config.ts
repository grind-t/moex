import { defineConfig } from "tsup";

export default defineConfig({
  name: "@grind-t/moex",
  entry: ["lib/index.ts"],
  outDir: "dist",
  experimentalDts: true,
  clean: true,
});
