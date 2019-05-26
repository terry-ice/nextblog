/*
 * @Author: terry
 * @Date: 2019-05-26 23:03:29
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2019-05-26 23:03:29
 */

const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const withConfig = nextRuntimeDotenv({
  public: ['API_URL'],
});

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line node/no-deprecated-api
  require.extensions['.less'] = file => {};
}

module.exports = withPlugins(
  [
    [withTypescript],
    [withCSS],
    [
      withCSS,
      {
        // cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[path]___[local]___[hash:base64:5]',
        },
        [PHASE_PRODUCTION_BUILD]: {
          cssLoaderOptions: {
            localIdentName: '[hash:base64:8]',
          },
        },
      },
    ],
    [withSass],
    [withConfig],
    [withBundleAnalyzer],
  ],
  {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
  }
);
