module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }]
  },
  moduleFileExtensions: ['js', 'ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'packages/**/*.ts',
    'packages/**/*.mts',
    '!packages/**/*.d.ts',
    '!packages/**/*.d.mts'
  ]
};
