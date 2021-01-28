const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, './src'),
      '@Common': path.resolve(__dirname, './src/common'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Public': path.resolve(__dirname, './public/static'),
      '@Store': path.resolve(__dirname, './src/store'),
    });
    return config;
  },
};
