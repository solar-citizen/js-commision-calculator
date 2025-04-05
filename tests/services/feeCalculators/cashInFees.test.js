import { expect } from 'chai';

import { calculateCashInFee } from '../../../src/services/feeCalculators';

describe('Cash In Fee Calculator Test', () => {
  describe('Cash In Fee Calculation', () => {
    it('should calculate cash in fee correctly and cap at 5.00 EUR', () => {
      // Regular calculations
      expect(calculateCashInFee(100)).to.equal(0.03);
      expect(calculateCashInFee(500)).to.equal(0.15);
      expect(calculateCashInFee(200)).to.equal(0.06);

      // Edge case: approaching cap
      expect(calculateCashInFee(10000)).to.equal(3.0);

      // Capped cases
      expect(calculateCashInFee(200000)).to.equal(5.0);
      expect(calculateCashInFee(1000000)).to.equal(5.0);
    });
  });
});
