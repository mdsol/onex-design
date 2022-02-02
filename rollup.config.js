import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: 'src/components/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: 'OneX',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    postcss({
      extract: 'style.css',
    }),
    terser(),
  ],
};
