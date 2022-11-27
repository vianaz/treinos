const config = require('storybook-setup/main');

config.stories = [
  '../**/*.stories.mdx',
  '../**/*.stories.@(js|jsx|ts|tsx)'
];

module.exports = config;
