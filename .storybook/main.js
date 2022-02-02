const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    babelModeV7: true,
  },
  addons: ['@storybook/preset-scss', '@storybook/addon-links', '@storybook/addon-essentials'],

  stories: [
    '../src/stories/Introduction.stories.mdx',
    '../src/**/*.stories.[tj]s',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/**/*.stories.[tj]s',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === '/\\.css$/',
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName:
            configType === 'PRODUCTION'
              ? '[local]__[hash:base64:5]'
              : '[name]__[local]__[hash:base64:5]',
        };
      }

      return item;
    });

    return config;
  },
};
