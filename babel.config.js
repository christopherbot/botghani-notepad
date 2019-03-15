module.export = {
  presets: [
    'react-native',
    'react-native-dotenv',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '~': './',
      },
    }],
  ],
}
