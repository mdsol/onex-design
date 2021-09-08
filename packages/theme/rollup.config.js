import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    scss({
      sourceMap: true,
      outputStyle: 'compressed',
      watch: 'src',
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        'node_modules/'
      ]
    })
  ]
};