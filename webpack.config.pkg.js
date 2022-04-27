const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  mode: 'production',
  entry: ['./src/components/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.umd.js',
    library: {
      name: pkg.name,
      type: 'umd',
    },
    publicPath: '/dist/',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  plugins: [new ESLintPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
        resourceQuery: { not: [/raw/] },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader'],
        resourceQuery: { not: [/raw/] },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/inline',
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: { path: false },
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
