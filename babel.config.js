module.exports = {
  presets: [
    'module:react-native-dotenv',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json'],
        alias: {
          '~': './',
          assets: './assets',
        },
      },
    ],
  ],
}
