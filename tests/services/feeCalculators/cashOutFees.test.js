import { expect } from 'chai';

import {
  calculateCashOutFeeLegal,
  calculateCashOutFeeNatural,
} from '../../../src/services/feeCalculators';

describe('Cash Out Fee Calculators Test', () => {
  describe('Cash Out Fee Calculation for Legal Persons', () => {
    it('should calculate cash out fee correctly with a minimum of 0.50 EUR', () => {
      // Below minimum
      expect(calculateCashOutFeeLegal(100)).to.equal(0.5);

      // Regular calculations
      expect(calculateCashOutFeeLegal(300)).to.equal(0.9);
      expect(calculateCashOutFeeLegal(500)).to.equal(1.5);

      // Edge case: exactly at minimum
      expect(calculateCashOutFeeLegal(166.67)).to.equal(0.5);
    });
  });

  describe('Cash Out Fee Calculation for Natural Persons', () => {
    it('should calculate fee correctly based on amount and used free limit', () => {
      // No free limit used, under free limit
      expect(calculateCashOutFeeNatural(800, 0)).to.equal(0);

      // No free limit used, exceeding free limit: (1200 - 1000) * 0.003 = 0.6
      expect(calculateCashOutFeeNatural(1200, 0)).to.equal(0.6);

      // Partial free limit used: (300 - 200) * 0.003 = 0.3
      expect(calculateCashOutFeeNatural(300, 800)).to.equal(0.3);

      // Free limit completely used
      expect(calculateCashOutFeeNatural(500, 1000)).to.equal(1.5);
    });
  });
});
