import { Octokit } from '@octokit/core';
import { OctokitOptions } from '@octokit/core/dist-types/types';
import { createActionAuth } from '@octokit/auth-action';

export function getOctokit(): Octokit {
  return getOctokitWithDefaults({});
}

export function getOctokitWithDefaults(defaults: OctokitOptions): Octokit {
  const options = getOctokitOptionsFromEnv();
  return new Octokit({
    ...options,
    ...defaults
  });
}

function getOctokitOptionsFromEnv(): OctokitOptions {
  const isTokenDefined = process.env.GITHUB_TOKEN || process.env.INPUT_GITHUB_TOKEN;
  const isGithubAction = process.env.GITHUB_ACTION && process.env.GITHUB_WORKFLOW;
  const auth = isGithubAction && isTokenDefined ? createActionAuth() : undefined;

  return {
    auth,
    userAgent: process.env.GITHUB_USER_AGENT,
    timeZone: process.env.GITHUB_TIME_ZONE
  };
}
