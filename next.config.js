/* eslint-disable import/no-extraneous-dependencies */
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(withImages(withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  cssLoaderOptions: {
  //   https://github.com/webpack-contrib/css-loader#object
  //
  //   sourceMap: true, // default false
  //   esModule: false, // default false
  //   modules: {
  //     exportLocalsConvention: 'asIs',
  //     exportOnlyLocals: true,
  //     mode: 'pure',
  //     getLocalIdent: [Function: getCssModuleLocalIdent]
  //   }
  },
})));
