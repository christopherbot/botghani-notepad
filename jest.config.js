module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-clone-referenced-element|react-navigation)',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/testConfig.js'],
  moduleDirectories: ['src', 'node_modules'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.svgx?$': '<rootDir>/jestSvgTransform',
  },
  testEnvironment: 'jsdom',
}
