import { InputOptions } from '@actions/core';
import * as core from '@actions/core';

export function getInput(name: string, options?: InputOptions): string | undefined {
  const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`];
  if (options && options.required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }

  return val;
}

export function setFailed(message: string): void {
  process.exitCode = 1;
  core.setFailed(message);
  console.error(message);
}

export function setOutput(name: string, value: string): void {
  core.setOutput(name, value);
}
