const CracoAlias = require('craco-alias');

const emotionPresetOptions = {};
const EmotionBabelPreset = require('@emotion/babel-preset-css-prop').default(undefined, emotionPresetOptions);

module.exports = {
  babel: {
    plugins: [...EmotionBabelPreset.plugins],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
