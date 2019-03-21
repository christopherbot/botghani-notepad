module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      'react-native',
      'react-native-dotenv',
      // 'module:react-native',
      // 'module:react-native-dotenv',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '~': './',
          },
        },
      ],
      '@babel/plugin-proposal-export-default-from',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-transform-runtime',
    ],
  }
}
