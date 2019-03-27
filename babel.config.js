module.exports = {
  presets: [
    // '@babel/preset-react',
    // '@babel/preset-env',
    'module:react-native-dotenv',
    'module:metro-react-native-babel-preset',
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
  ],
  env: {
    test: {
      presets: [
        // '@babel/preset-env',
        // '@babel/preset-react',
      ],
      plugins: [
        // '@babel/plugin-proposal-class-properties',
        // 'transform-es2015-modules-commonjs',
        // 'babel-plugin-dynamic-import-node',
      ],
    },
  },
}
