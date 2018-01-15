import { expect } from 'chai';
import hello from '../src/index';

describe('Hello', () => {
  it('should return Hello', () => {
    expect(hello()).to.be.equal('Hello');
  });
});
