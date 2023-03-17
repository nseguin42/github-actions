import * as auth from '../src/auth';
import { Octokit } from '@octokit/core';

describe('auth', () => {
  it('should export getOctokit', () => {
    expect(auth.getOctokit).toBeDefined();
  });

  describe('getOctokit', () => {
    it('should return an Octokit instance', () => {
      expect(auth.getOctokit()).toBeInstanceOf(Octokit);
    });
  });

  it('should export getOctokitWithDefaults', () => {
    expect(auth.getOctokitWithDefaults).toBeDefined();
  });

  describe('getOctokitWithDefaults', () => {
    it('should return an Octokit instance', () => {
      expect(auth.getOctokitWithDefaults({})).toBeInstanceOf(Octokit);
    });
  });
});
