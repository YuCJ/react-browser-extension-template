const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: '',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'eval-source-map',
  plugins: [...baseConfig.plugins, new webpack.HotModuleReplacementPlugin()],
};
