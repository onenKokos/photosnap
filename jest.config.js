const { resolve } = require('path');

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  preset: 'ts-jest',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    // --->>> taken from offical vercel github
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: [
    //'@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleNameMapper: {
    '^@Components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^@Common/(.*)$': resolve(__dirname, './src/common/$1'),
    '^@/(.*)$': resolve(__dirname, './src/$1'),
  },
};
