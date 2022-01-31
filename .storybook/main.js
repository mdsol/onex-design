module.exports = {
  stories: [
    '../src/**/*.stories.[tj]s',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/**/*.stories.[tj]s',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/preset-scss', '@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  base: './',
};
