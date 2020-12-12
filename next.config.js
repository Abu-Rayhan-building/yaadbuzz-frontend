/* eslint-disable import/no-extraneous-dependencies */
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

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
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
})));
