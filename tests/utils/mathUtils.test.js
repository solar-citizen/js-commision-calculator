import { expect } from 'chai';

import { roundUpFee } from '../../src/utils';

describe('Math Utils Test', () => {
  describe('Rounding Function', () => {
    it('should round up to the nearest cent', () => {
      expect(roundUpFee(0.023)).to.equal(0.03);
      expect(roundUpFee(0.03)).to.equal(0.03);
      expect(roundUpFee(1.001)).to.equal(1.01);
      expect(roundUpFee(0.505)).to.equal(0.51);
      expect(roundUpFee(2.999)).to.equal(3.0);
    });
  });
});
