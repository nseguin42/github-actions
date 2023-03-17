import * as input from '../src/input';

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
  process.exitCode = 0;
});

describe('input', () => {
  it('should export getInput', () => {
    expect(input.getInput).toBeDefined();
  });

  describe('getInput', () => {
    it('should return the value of the input', () => {
      process.env['INPUT_TEST'] = 'test';
      expect(input.getInput('test')).toEqual('test');
    });

    it('should return undefined if the input is not defined', () => {
      expect(input.getInput('test')).toEqual('');
    });

    it('should throw an error if the input is required and not defined', () => {
      expect(() => input.getInput('test', { required: true })).toThrow();
    });
  });

  it('should export setFailed', () => {
    expect(input.setFailed).toBeDefined();
  });

  describe('setFailed', () => {
    it('should set the exit code to 1', () => {
      input.setFailed('test');
      expect(process.exitCode).toEqual(1);
    });
  });
});
