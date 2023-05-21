import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    typescript(),
    replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
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