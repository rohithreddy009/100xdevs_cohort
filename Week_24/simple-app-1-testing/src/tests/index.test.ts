import {describe, expect, it, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    const finalAnswer = sum(1,2);
    expect(finalAnswer).toBe(3);
  });
});