module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
