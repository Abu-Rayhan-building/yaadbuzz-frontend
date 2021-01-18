// eslint-disable-next-line import/no-extraneous-dependencies
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
    },
  ],
};
