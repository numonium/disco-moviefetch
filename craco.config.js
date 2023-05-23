const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~assets/*': path.resolve(__dirname, 'src/assets/*'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~components/*': path.resolve(__dirname, 'src/components/*'),
      '~themes': path.resolve(__dirname, 'src/themes'),
      '~themes/*': path.resolve(__dirname, 'src/themes/*'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~utils/*': path.resolve(__dirname, 'src/utils/*')
    },
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes('node_modules') &&
            warning.details &&
            warning.details.includes('source-map-loader')
          );
        }
      ]
    }
  }
};
