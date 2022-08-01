const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = new SpeedMeasurePlugin().wrap({
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
});
