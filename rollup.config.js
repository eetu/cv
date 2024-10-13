import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";

export default {
  input: "src/index.ts",
  output: {
    file: "build/index.bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    replace({ "Reflect.decorate": "undefined", preventAssignment: true }),
    resolve(),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize({
      showBrotliSize: true,
    }),
  ],
};
