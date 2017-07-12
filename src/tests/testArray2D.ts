import { expect, assert } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

import {Array2D} from '../Array2D';

describe('Assertion Test', () => {
  it('should make an obvious assertion', () => {
      expect("Hello World!").to.equal('Hello World!');
  });
});

describe('Array2D test', () => {
    let r = 10, c = 12;
  it('should create a new array with the given dimensions', () => {
      let x = new Array2D(r,c);
      assert(x instanceof Array2D);
      expect(x.numRows).to.equal(r);
      expect(x.numCols).to.equal(c);
  });
  it('should set and get properly', () => {
      let x = new Array2D(r,c);
      expect(x.get(2,3)).to.equal(undefined);
      expect(x.get(r-1,c-1)).to.equal(undefined);
      expect(x.get(0, 0)).to.equal(undefined);
      x.set(2, 3, 5);
      expect(x.get(2, 3)).to.equal(5);
  });
});
